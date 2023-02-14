
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
        if(bs !== $(this).html()) {
          bs = $(this).html();
          getData();
        }
        $('.title').html(`${bs}数据统计`);
        // $('body').css({'background':`url(../images/xbdq/${$(this).data('bs')}.png) no-repeat`});
        $('body').removeClass().addClass($(this).data('bs'));
        $(this).addClass('active').siblings().removeClass('active');
    })
    setInterval(getData, 30000);
})

var getData = function(){
    //指标
  $.get((switcH == 1 ? '/mock/xbdq/zb.json' : '/screen/area/selectAreaData') +'?area=' + bs, function (data) {
    if(data.data){
      $('#kh').html(data.data.customerNum);
      $('#xm').html(data.data.projectNum);
      $('#sb').html(data.data.equipmentNum);
      $('#gd').html(data.data.ticketNum);
      $('#gcs').html(data.data.engineerNum);
    }
  })
//设备数量
  $.get((switcH == 1 ? '/mock/xbdq/sbsl.json': '/screen/area/type') +'?area=' + bs, function (data) {
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
        console.log(sboption)
        sb_bar.setOption(sboption);
    }
  })
  //工程师忙碌比
  $.get((switcH == 1 ? '/mock/xbdq/mlb.json': '/screen/area/engineer') +'?area=' + bs, function (data) {
    if(data.data){
      totalAreaEngineer = data.data.totalAreaEngineer,totalEngineerd = data.data.totalEngineer; //区域工程师人数，全国工程师人数
      gcsoption.series[0].data[0].value = data.data.busyAreaEngineer, gcsoption.series[0].data[1].value = (100 - data.data.busyAreaEngineer);
      gcsoption.series[1].data[0].value = data.data.busyEngineer, gcsoption.series[1].data[1].value = (100 - data.data.busyEngineer);
      gcs_pie.setOption(gcsoption);
    }
  })
//工单分布
  $.get((switcH == 1 ?'/mock/xbdq/gd.json' : '/screen/area/order') +'?area=' + bs, function (data) {
    if(data.data){
      gdPie3(data.data);
    }
  })

  var linepz = [
    {url:'/mock/xbdq/gdqs.json',index:0,url2:'/screen/area/selectWorkOrderTotal'},
    {url:'/mock/xbdq/gdqs.json',index:1,url2:'/screen/area/selectWorkOrderEvent'},
    {url:'/mock/xbdq/gdqs.json',index:2,url2:'/screen/area/selectWorkOrderService'},
    {url:'/mock/xbdq/gdqs.json',index:3,url2:'/screen/area/selectWorkOrderInspection'}
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
}
var setDom = function (dataArr) {
    dataArr.forEach(function (val, index) {
        var _html = '';
        if (val.type == 1) {
            val.data.forEach(function (value, index) {
                let url1 = value.url
                _html += `<li class=${url1 ? 'eventLi' : ''} data-bs=${value.id} title=${value.name} data-url="./2/${value.url}.html"><span>${value.name}</span></li>`
            })
            $(`#${val.bs}_list`).html(_html)
        } else {
            val.data.forEach(function (value, index) {

                if (index !== 0) {
                    // console.log(index == val.data.length, index, val.data.length - 1)
                    if ((index + 1) % 6 == 0 && index !== val.data.length - 1) {
                        _html += `<li  title=${value.name}><span style="text-align:left !important;">${value.name}</span></li></ul></div><div class="swiper-slide"><ul class="clear">`
                    } else if (value.name == "非信贷资产风险分类系统") {
                        _html += `<li class="leftLi"  title=${value.name}><span style="text-align:left !important;">${value.name}</span></li>`
                    } else if (value.name == "责任认定与追究信息管理系统") {
                        _html += `<li class="leftLi1"  title=${value.name}><span style="text-align:left !important;">${value.name}</span></li>`
                    } else {
                        _html += `<li  title=${value.name}><span style="text-align:left !important;">${value.name}</span></li>`
                    }

                } else if (index == val.data.length - 1) {
                    _html += `</ul></div>`;
                } else {
                    _html += `<div class="swiper-slide"><ul class="clear"><li title=${value.name}><span>${value.name}</span></li>`
                }
            })
            // console.log(_html)
            $(`#${val.bs}_qiehuan`).html(_html + `</ul></div>`)
        }
    })
}

// 时间戳函数
function setDateTime() {
    document.getElementById("datetime").innerHTML = moment().format("YYYY/MM/DD");
    document.getElementById("hourminute").innerHTML = moment().format("HH:mm:ss");
}
