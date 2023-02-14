
var myChart = echarts.init(document.getElementById('map'));
var option;

//数据存储
var bs = 'kh',
dataArr = {kh:[],gcs:[],bj:[]},
urls = {kh:'/mock/dtrl/kh.json',gcs:'/mock/dtrl/gcs.json',bj:'/mock/dtrl/bj.json'},
urlss = {kh:'/screen/hsotpot/selectCustomerAreaHostpot',gcs:'/screen/hsotpot/selectCustomerEngineerArea',bj:'/screen/center/selectSparePartWarehouseList'},
images = {kh:'image://../images/dtrl/03.png',gcs:'image://../images/dtrl/02-1.png',bj:'image://../images/dtrl/01.png'},
imagesSize = {kh:[18,25],gcs:[7,17],bj:[32,43]};

$(function () {
    //调用时间戳函数
    setDateTime();
    setInterval(setDateTime, 1000);
    initMap();
    $('.btn li').click( function(){
      if(bs !== $(this).data('bs')) {
        bs = $(this).data('bs');
        getData();
      }
      $(this).addClass('active').siblings().removeClass('active');
    })
    setInterval(getData, 30000);
})

var getData = function(){
  //客户
  $.get(switcH == 1 ? urls[bs] : urlss[bs], function (data) {
    if(data.data.length){
      toMassage(data.data);
    }
  })
}



// 处理获取回来的数据
function toMassage(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].areas];
    if (geoCoord) {
      res.push({
        name: data[i].areas || data[i].engineerNum,
        value: geoCoord.concat(data[i].customerNum || data[i].engineerAreas),
        symbol: images[bs],
        symbolSize: imagesSize[bs],
      });
    }
  }
  console.log(res);
  // if(bs == topic){
    option.series[0].data = res;
    option && myChart.setOption(option);
  // }

}
/**************************************************************主题订阅！！！！！！！！！！！！！！*****************************************/



//窗口轮播开启
var setLunbo = (id) => {
    var oDom = $(`#${id}_list`);
    // clearTimeout(window[`${id}_timer`]);
    if (window[`${id}_timer`]) {
        if (oDom.find('.active').index() >= oDom.find('li').length - 1) {
            qhFn(0, id);
        } else {
            qhFn(oDom.find('.active').index() + 1, id);
        }
    };
    setTimeout(function () {
        setLunbo(id)
    }, 5000);
}

// 时间戳函数
function setDateTime() {
    document.getElementById("datetime").innerHTML = moment().format("YYYY/MM/DD");
    document.getElementById("hourminute").innerHTML = moment().format("HH:mm:ss");
}
