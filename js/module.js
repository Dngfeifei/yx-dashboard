$("body").on("swipeleft", function () {
    window.parent.itemNext();
})
$("body").on("swiperight", function () {
    window.parent.itemPrev();

})
// 界面操作调用home页 延时定时器 5分钟后启动轮播
$("body").on("click", function () {
//    if (typeof layer != 'undefined') {
//     layer.open({
//         type: 2,
//         title: false,
//         maxmin: false,
//         closeBtn: 0,
//         area: ['100%', '100%'],//['800px', '500px']
//         content: 'http://layer.layui.com/test/welcome.html',
//         offset:['0px', '0px'],
//         end: function(){
//         layer.tips('Hi', '#about', {tips: 1})
//         }
//       });
//    }   
    // window.parent.swiper.autoplay.stop();
    // window.parent.startLoop();
})

//左右鼠标切换按钮事件添加
$(".control_next").on("click", function (event) {
    window.parent.itemNext();
    event.stopPropagation();
})
$(".control_pre").on("click", function (event) {
    window.parent.itemPrev();
    event.stopPropagation();
})
$(".control_btn").on("click", function (event) {
    if (window.parent.swiper.autoplay.running) {
        window.parent.swiper.autoplay.stop();
        window.parent.startLoop();
    } else {
        window.parent.swiper.autoplay.start();
        window.parent.changeViewLoopBtnState("暂停轮播");
        window.parent.clearAll(); 
    } 
     event.stopPropagation();
})
//切换轮播按钮状态
function changeLoopState(state) {
    $(".control_btn").html(state)
}