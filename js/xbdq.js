
var bs = '西北大区'; // 标识，默认为西北大区

/************************************ 设备数量柱图 *******************************/
var sb_bar = echarts.init(document.getElementById('sb_bar'));
var sboption = getBar();
/************************************ 工单数量线图 *******************************/
var gd_line = echarts.init(document.getElementById('gd_line'));
var gdoption = getLine();
/************************************ 客户满意度仪表盘 *******************************/
var kh_gauge = echarts.init(document.getElementById('kh_gauge'));
var khoption = getGauge();
/************************************ 工程师忙碌比环形图 *******************************/
var totalAreaEngineer = 100,totalEngineerd = 100; //区域工程师人数，全国工程师人数
var gcs_pie = echarts.init(document.getElementById('gcs_pie'));
var gcsoption = getPie();
/************************************ 各类型工单分布3d环形图 *******************************/
var gd_3pie = echarts.init(document.getElementById('gd_3pie'));

$(function () {
    //调用时间戳函数
    setDateTime();
    setInterval(setDateTime, 1000);
    initMap();
    //添加大区切换事件
    $('.region_btn li').click( function(){
      var index = $(this).index()
      clickFn(index);
    })
    setInterval(getData, 60000);
})
var clickFn = function(index){
  _this = $('.region_btn li').eq(index);
  if(bs !== _this.html()) {
    bs = _this.html();
    getData();
  }
  $('.title').html(`${bs}数据统计`);
  // $('body').css({'background':`url(../images/xbdq/${$(this).data('bs')}.png) no-repeat`});
  $('#containers').removeClass().addClass(_this.data('bs'));
  _this.addClass('active').siblings().removeClass('active');
}
var getData = function(){
    //指标
  $.get((switcH == 1 ? '/mock/xbdq/zb.json' : 'http://49.232.133.21:8089/screen/area/selectAreaData') +'?area=' + bs, function (data) {
    if(data.data){
      $('#kh').html(data.data.customerNum || 0);
      $('#xm').html(data.data.projectNum || 0);
      $('#sb').html(data.data.equipmentNum || 0);
      $('#gd').html(data.data.ticketNum || 0);
      $('#gcs').html(data.data.engineerNum || 0);
      $('#bj').html(data.data.sparePartNum || 0);
    }
  })
//设备数量
  $.get((switcH == 1 ? '/mock/xbdq/sbsl.json': 'http://49.232.133.21:8089/screen/area/type') +'?area=' + bs, function (data) {
    if(data.data){
        var res = [],res2 = [],dataLIst = data.data,n = 0,nameArr = [];
        for (var i = 0; i < dataLIst.length; i++) {
          if (dataLIst[i].skillTypeName) {
            if(n > colors.length) n = 0;
            res.push({
                value:dataLIst[i].num || 0,
                itemStyle:{
                    color: colors[n]
                }
            });
            res2.push({value:dataLIst[i].num || 0,itemStyle:{color:colors2[n]}});
            nameArr.push(dataLIst[i].skillTypeName);
            n++;
          }
        }
        sboption.xAxis.data = nameArr,sboption.series[0].data = res,sboption.series[1].data = sboption.series[2].data = sboption.series[3].data = res2;
        // console.log(sboption)
        sb_bar.setOption(sboption);
    }
  })
  //工程师忙碌比
  $.get((switcH == 1 ? '/mock/xbdq/mlb.json': 'http://49.232.133.21:8089/screen/area/engineer') +'?area=' + bs, function (data) {
    if(data.data){
      totalAreaEngineer = data.data.totalAreaEngineer,totalEngineerd = data.data.totalEngineer; //区域工程师人数，全国工程师人数
      gcsoption.series[0].data[0].value = data.data.busyAreaEngineer, gcsoption.series[0].data[1].value = (totalAreaEngineer - data.data.busyAreaEngineer);
      gcsoption.series[1].data[0].value = data.data.busyEngineer, gcsoption.series[1].data[1].value = (totalEngineerd - data.data.busyEngineer);
      gcs_pie.setOption(gcsoption);
    }
  })
//工单分布
  $.get((switcH == 1 ?'/mock/xbdq/gd.json' : 'http://49.232.133.21:8089/screen/area/order') +'?area=' + bs, function (data) {
    if(data.data){
      gdPie3(data.data);
    }
  })

  var linepz = [
    {url:'/mock/xbdq/gdqs.json',index:0,url2:'http://49.232.133.21:8089/screen/area/selectWorkOrderTotal'},
    {url:'/mock/xbdq/gdqs.json',index:1,url2:'http://49.232.133.21:8089/screen/area/selectWorkOrderEvent'},
    {url:'/mock/xbdq/gdqs.json',index:2,url2:'http://49.232.133.21:8089/screen/area/selectWorkOrderService'},
    {url:'/mock/xbdq/gdqs.json',index:3,url2:'http://49.232.133.21:8089/screen/area/selectWorkOrderInspection'}
  ];
  for(let i = 0 ,len=linepz.length;i < len ; i++){
    let index = linepz[i].index;
    $.get((switcH == 1 ? linepz[i].url : linepz[i].url2) +'?area=' + bs, function (data) {
      
      if(data.data.length){
        var xAxisArr = [],valueArr = [],list = data.data;
        for (var i = 0; i < list.length; i++) {
          xAxisArr.push(list[i].createTime || 0);
          valueArr.push(list[i].amount);
        }
        gdoption.xAxis.data = xAxisArr,gdoption.series[index].data = valueArr;
        gd_line.setOption(gdoption);
      }
    })
  }
}

//各类型工单分布-3D环形图
function gdPie3(data) {
    var content = '',res = [];
    for(let key in data){
      if(pie3[key]){
        content += `<li>
                      <div class="dian" style="background-color:${pie3[key].color}"></div>
                      <div>
                          <span class="name">${pie3[key].name}</span>
                          <span class="num">${data[key] || 100}</span>
                      </div>
                  </li>`;
        res.push({
          value: data[key] || 100,
          name: pie3[key].name,
          itemStyle: {
            color: pie3[key].color
          }
        })
      }
    }
    
    let option = getPie3D(res.length ? res : ([
      {
        value: data.eventNum || 0,
        name: '事件工单',
        itemStyle: {
          color: '#3399ff'
        }
      },
      {
        value: data.supportNum || 0,
        name: '内部支持',
        itemStyle: {
          color: '#ff9966',
        }
      },
      {
        value: data.patrolNum || 0,
        name: '巡检工单',
        itemStyle: {
          color: '#ffcc33',
        }
      },
      {
        value: data.callbackNum || 0,
        name: '问题工单',
        itemStyle: {
          color: '#66ff99',
        }
      },
      {
        value: data.serviceNum || 0,
        name: '服务请求',
        itemStyle: {
          color: '#ff99ff',
        }
      },
      {
        value: data.changeNum || 0,
        name: '变更工单',
        itemStyle: {
          color: '#999999',
        }
      }]), 1.18, 185, 45, 18, 1)
    gd_3pie.setOption(option);
    $('.gd_list').html(content);
  }
//初始化页面
var initMap = function (parmArr) {
    gdPie3({});
    getData();
    // setTimeout(setLunbo, 5000);
}
var setLunbo = function () {
    var oDom = $('.region_btn li'),index = $('.region_btn .active').index();
    index = index + 1 >= oDom.length ? 0 : index + 1;
    console.log(index);
    // clickFn(index);
    setTimeout(setLunbo, 5000);
}

// 时间戳函数
function setDateTime() {
    document.getElementById("datetime").innerHTML = moment().format("YYYY/MM/DD");
    document.getElementById("hourminute").innerHTML = moment().format("HH:mm:ss");
}
