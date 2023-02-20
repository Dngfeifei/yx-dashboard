

/************************************ 客户柱图 *******************************/
var kh_bar = echarts.init(document.getElementById('kh_bar'));
var khoption = getBar('kh_bar');
kh_bar.setOption(khoption);
/************************************ 项目数量柱图 *******************************/
var xm_bar = echarts.init(document.getElementById('xm_bar'));
var xmoption = getBar('xm_bar');
xm_bar.setOption(xmoption);
/************************************ 工单柱图  *******************************/
var gd_bar = echarts.init(document.getElementById('gd_bar'));
var gdoption = getBar('gd_bar');
gd_bar.setOption(gdoption);
/************************************ 工程师柱图 *******************************/
var gcs_bar = echarts.init(document.getElementById('gcs_bar'));
var gcsoption = getBar('gcs_bar');
gcs_bar.setOption(gcsoption);
// /************************************ 行业金额统计3d环形图 *******************************/
var gd_3pie = echarts.init(document.getElementById('pie'));

// /************************************ 备件数量柱图 *******************************/
var bj_bar = echarts.init(document.getElementById('bj_bar'));
var bjoption = getBar2();
bj_bar.setOption(bjoption);
$(function () {
    //调用时间戳函数
    setDateTime();
    setInterval(setDateTime, 1000);
    initMap();
    setInterval(getData, 60000);
})
var getData = function(){
  //行业金额统计
  $.get(switcH == 1 ? '/mock/yxzb/hyje.json' : 'http://49.232.133.21:8089/screen/center/selectIndustry', function (data) {
    if(data.data){
      gdPie3(data.data)
    }
  })
  //备件数统计
  $.get(switcH == 1 ? '/mock/yxzb/bjs.json' : 'http://49.232.133.21:8089/screen/center/selectSparePartList', function (data) {
    if(data.data.length){
      var list = data.data,res1 = [],res2 = [],res3 = [],res4 = [],xAxisArr = [],zt = 0,kc =0,ly=0,zj=0;
      list.forEach(element => {
        zt += (element.onway || 0), kc += (element.stock || 0), ly += (element.collect || 0), zj += (element.complete || 0);
        res1.push(element.onway),res2.push(element.stock),res3.push(element.collect),res4.push(element.complete),xAxisArr.push(element.areas);
      });
      $('#zt').html(zt),$('#kc').html(kc),$('#ly').html(ly),$('#zj').html(zj);
      bjoption.yAxis.data = xAxisArr,bjoption.series[0].data = res1,bjoption.series[1].data = res2,bjoption.series[2].data = res3,bjoption.series[3].data = res4;
      bj_bar.setOption(bjoption);
    }
  })

  //中间四图
  var barpz = [{url:'/mock/yxzb/bar.json',bs:'kh',url2:'http://49.232.133.21:8089/screen/biCustomer/selectBiCustomer'},{url:'/mock/yxzb/bar.json',bs:'xm',url2:'http://49.232.133.21:8089/screen/biProject/selectBiProject'},{url:'/mock/yxzb/bar.json',bs:'gd',url2:'http://49.232.133.21:8089/screen/biTicket/selectBiTicket'},{url:'/mock/yxzb/bar.json',bs:'gcs',url2:'http://49.232.133.21:8089/screen/biUser/selectBiUser'}];
  for(let i = 0 ,len=barpz.length;i < len ; i++){
    $.get(switcH == 1 ? barpz[i].url : barpz[i].url2, function (data) {
      if(data.data.data){
        var option = setData(data.data.data);
        if(barpz[i].bs == 'gcs'){
          window[barpz[i].bs + 'option'].xAxis.data = option.xAisArr,window[barpz[i].bs + 'option'].series[0].data = window[barpz[i].bs + 'option'].series[1].data= window[barpz[i].bs + 'option'].series[2].data= window[barpz[i].bs + 'option'].series[3].data = option.res;

        }else{
          window[barpz[i].bs + 'option'].xAxis.data = option.xAisArr,window[barpz[i].bs + 'option'].series[0].data = window[barpz[i].bs + 'option'].series[1].data = option.res;
        }
        window[barpz[i].bs+'_bar'].setOption(window[barpz[i].bs + 'option']);
      }
    })
  }
 //中间四图

 //表格数据
 $.get(switcH == 1 ? '/mock/yxzb/table.json' : 'http://49.232.133.21:8089/screen/biTicket/selectWorkOrder', function (data) {
  if(data.data.length || data.data.data.length){
    setTable(data.data.data || data.data);
  }
})
//中间四图四个数据统计指标
var zbpz = [{url:'/mock/yxzb/zb.json',bs:'kh_number',url2:'http://49.232.133.21:8089/screen/biCustomer/selectBiCustomerNumber'},{url:'/mock/yxzb/zb.json',bs:'xm_number',url2:'http://49.232.133.21:8089/screen/biProject/selectBiProjectNumber'},{url:'/mock/yxzb/zb.json',bs:'gd_number',url2:'http://49.232.133.21:8089/screen/biTicket/selectBiTicketNumber'},{url:'/mock/yxzb/zb.json',bs:'gcs_number',url2:'http://49.232.133.21:8089/screen/biUser/selectBiUserNumber'}];
  for(let i = 0 ,len=zbpz.length;i < len ; i++){
    let bs = zbpz[i].bs;
    $.get(switcH == 1 ? zbpz[i].url : zbpz[i].url2, function (data) {
      if(data.data){
        $('#' + bs).html(data.data.data || 0);
      }
    })
  }
//顶部指标
$.get(switcH == 1 ? '/mock/yxzb/top.json' : 'http://49.232.133.21:8089/screen/biConfigurations/selectBiConfigurations', function (data) {
  if(data.data.length){
    for(let i of data.data){
      switch (i.name) {
        case '维护设备数量总计':
          digitalScrollFun(i.number, { id: 'whsb_num' }, 0, 0);
          break;
        case '小型机':
          $('#xxj').html(i.number || 0);
          break;
        case '服务器':
          $('#fwq').html(i.number || 0);
          break;
        case '存储':
          $('#cc').html(i.number || 0);
          break;
        case '网络设备':
          $('#wlsb').html(i.number || 0);
          break;
        case '软件':
          $('#rj').html(i.number || 0);
          break;
      }
    }
  }
})

}
//处理中间四图数据
var setData = function(data){
  console.log(data)
  var option = {res:[],xAisArr:[]};
  data.forEach(element => {
    option.res.push(element.number),option.xAisArr.push(element.name);
  });
  return option;
}
//各类型工单分布-3D环形图
function gdPie3(data) {
   var colorList = ['#3399ff','#ff9966','#ffcc33','#66ff99','#ff99ff','#999999'],content='',dataList = [];
   for(let key in data){
      if(pie3[key] && key !== 'total'){
        content +=`<li>
            <div class="dian" style="background-color:${pie3[key].color}"></div>
            <div>
                <span class="name">${pie3[key].name || ''}</span>
                <span class="num">${data[key] || 0}<text class="dw">万元</text></span>
            </div>
        </li>`
        var obj = {
        value: data[key],
        name: pie3[key].name,
        itemStyle: {
        color: pie3[key].color
        }
        };
        dataList.push(obj);
      }
      
    }
    let option = getPie3D(dataList, 1.18, 175, 35, 18, 1);
    gd_3pie.setOption(option);
    $("#total").html(milliFormatFn(data.total));
    $(".right_top .gd_list").html(content);
  }



//初始化页面
var initMap = function (parmArr) {
    digitalScrollFun(120, { id: 'whsb_num' }, 0, 0);
    // setTable(tableData);
    // gdPie3(moneyData);
    getData();
}

var setTable = function(data){
  var content = '<table class="table_bottom tbody"><tbody>';
  for(var i=0;i<data.length ;i++){
      content +=`<tr>
                    <td class="td1">${data[i].bussinessKey}</td>
                    <td class="td2" title="${data[i].title}"><div class="title">${data[i].title}</div></td>
                    <td class="td3">${data[i].assignee || data[i].userId}</td>
                    <td class="td4">${data[i].type}</td>
                    <td class="td5">${data[i].name}</td>
                    <td class="td6">${data[i].startTime}</td>
                </tr>`
  }
  $("#table_content").html(content+'</tbody></table>');
  setTimeout(()=>{
    $("#table_content").liMarquee({
      direction:'up',
      runshort: false,
      scrollamout:18
    })
  },800)
}
// 时间戳函数
function setDateTime() {
    document.getElementById("datetime").innerHTML = moment().format("YYYY/MM/DD");
    document.getElementById("hourminute").innerHTML = moment().format("HH:mm:ss");
}
