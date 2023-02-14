/**
 * 页面文件说明 此文件为项目基础方法整合文件 整合有页面多种常用基础方法 并负有某些方法相关依赖说明 若调用某些方法请注意相关依赖文件注释
 * @method autoRefresh   0点页面自动刷新（已调用）
 * @method milliFormat   将数字解析为千分位数字
 * @method digitalScrollFun   页面数字翻牌效果
 * @method delayedRefresh 页面数字长时间多次翻牌效果
 * @method toPercent   将数据转化为百分比
 * @method pageAutoTime  页面钟表时间自动刷新      ###依赖外部控件文件-moment.js ###
 * @method sortFun   对数组或对象数组（亦可以根据对象的某个key值）进行降序排序
 * @method getUrlParam   获取地址栏参数函数
 * @method initPageSize  页面窗口自适应方法初始化
 */

/* 0点页面自动刷新*/
setInterval(autoRefresh, 5000);

function autoRefresh() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h == 23 && m == 59 && (s > 55 && s < 59)) {
        location.reload();
    }
}
/**
 * 方法说明
 * @method milliFormat   将数字解析为千分位数字
 * @param number|string  s  传入值为数字类型或字符串类型的数字
 * @return string  返回值为字符串类型的 以逗号分隔的千分位数字
 */
function milliFormat(s) {
    var decimalLen = 2; //小数点后位数
    var _regular = "";
    s = s + "";
    if (s.indexOf(".") >= 0) {
        //如果有小数位 更新decimalLen
        decimalLen = s.length - s.indexOf(".") - 1;
    }
    for (var i = 0; i < decimalLen; i++) {
        _regular += "\\d";
    }
    var original = s;
    var op = "";
    if (s.indexOf("-") == 0) {
        op = "-";
        s = s.substring(1, s.length);
    }

    if (/[^0-9\.\-]/.test(s)) {
        return "invalid value";
    }
    s = s.replace(/^(\d*)$/, "$1.");
    //	s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    s = (s + "00").replace(eval("/(\\d*\\." + _regular + ")\\d*/"), "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) {
        s = s.replace(re, "$1,$2");
    }
    //	s=s.replace(/,(\d\d)$/,".$1");
    s = s.replace(eval("/,(" + _regular + ")$/"), ".$1");
    s = s.replace(/^\./, "0.");
    s = s.toString();

    if (s.length > (decimalLen + 1)) {
        if (original.length > (decimalLen + 1)) {
            if (s.substring(s.length - (decimalLen + 1), s.length) ==
                original.substring(original.length - (decimalLen + 1), original.length)) {
                return op + s;
            }
        }
        if (("0" + s.substring(s.length - (decimalLen + 1), s.length)) - 0 == 0) {
            return op + s.substring(0, s.length - (decimalLen + 1));
        }
    }
    return op + s;
}


//刷屏计时器开始
var mcount = 2; //预计跑100次
//id 按位数数值逐渐增加~ N秒跑完，可以跑M次
var nc = 0;

/**
 * 方法说明
 * @method digitalScrollFun   页面数字翻牌效果
 * @param  number  data  传入值为数字类型 界面最终变换后的值
 * @param  object  obj  传入值对象{id:string} id的值为翻拍效果的目标元素id
 * @param  willlen  number 总位数
 * @param  decimal  number 小数点之后保留位数
 *  * @param  milli  number 千分位 false 千分位 true 不是千分位
 * @return null  无返回值
 */
function digitalScrollFun(data, obj, willlen, decimal, milli) {
    var divId = "newAddDeposit";
    if (obj) {
        divId = obj.id;
    }
    if (willlen == null) willlen = 0;
    var notFinanceCnt = Math.round(data);
    if (decimal) {
        //		decimal = 0; 
        notFinanceCnt = (data - 0).toFixed(decimal); //修改成 支持小数的代码
    }
    if (notFinanceCnt < 0) {
        notFinanceCnt = Math.abs(notFinanceCnt) + "-" + (milli ? Math.abs(notFinanceCnt) : milliFormat(Math.abs(notFinanceCnt)));
        //		console.log(notFinanceCnt);
    } else {
        notFinanceCnt = "" + notFinanceCnt;
        if (notFinanceCnt.length < willlen) {
            var llen = notFinanceCnt.length;
            for (var i = 0; i < (willlen - llen); i++) {
                notFinanceCnt = "0" + notFinanceCnt;
            }
        }
        //		console.log(notFinanceCnt,milliFormat(notFinanceCnt));
        notFinanceCnt = (milli ? notFinanceCnt : milliFormat(notFinanceCnt));
    }
    var cnt = notFinanceCnt;
    var len = cnt.length;
    var oldspans = $("#" + divId + " span");
    var oldspansVal = [];
    for (var i = 0; i < oldspans.length; i++) {
        oldspansVal.push($(oldspans[i]).html());
    }
    $('#' + divId).html("");
    for (var i = 0; i < len; i++) {
        $("<span id='value" + i + "' class='cntStyle'>").appendTo($('#' + divId));
    }

    var spans = $("#" + divId + " span");
    var arr = [];
    var fopacity = true;
    for (var i = 0; i < cnt.length; i++) {
        ss = (cnt.substr(i, 1));
        arr.push(ss);
        if (ss == "0") {
            if (fopacity) {
                $(spans[i]).css({
                    opacity: .5
                }); //把首位补0操作出现的0010.00的第一等等，增加透明度
            }
        } else {
            fopacity = false;
        }
        //if (!oldspansVal[i] ? true : (oldspansVal[i] != arr[i])) { //循环所有id*=value的span，如果和上次不相等，就变化
        addCount($(spans[i]), arr[i], 0);
        //} else {
        $(spans[i]).html(arr[i]);
        //}
    }
}

function addCount(obj, orderValue, runcount) {
    if (orderValue == ",") {
        obj.html(",");
        obj.css({
            "width": "20px",
            "text-align": "center",
            "background": "transparent",
            "padding": "0",
            "border": "0px"
        });
        return;
    } else if (orderValue == ".") {
        obj.html(".");
        obj.css({
            "background": "transparent",
            "padding": "0",
            "border": "0px"
        });
        return;
    } else if (orderValue == "-") {
        obj.html("-");
        return;
    }
    _orderValue = Number(orderValue)
    var _val = Number(obj.html());
    if (!isNaN(_val)) {
        var tempnum = _val - (-1);
        if (tempnum == 10) {
            obj.html(0);
        } else {
            obj.html(tempnum);
        }
        runcount++;
        if (runcount >= mcount) {
            if (_orderValue == Number(obj.html())) {
                return;
            }
        }
        setTimeout(function () {
            addCount(obj, orderValue, runcount);
        }, 1500 * Math.random());
    } else {
        return;
    }
}

/**
 * 方法说明
 * @method delayedRefresh   页面数字多次翻牌效果
 * @param  number  data  传入值为数字类型 界面最终变换后的值
 * @param  object  obj  传入值为对象类型
 * {
 * id:string,   //id的值为翻牌效果的目标元素id
 * num:number,  //num的值是将数值分次翻拍的次数
 * time:number  //time为翻拍的时间范围
 * } 
 * @param  willlen  number 总位数
 * @param  decimal  number 小数点之后保留位数
 * @return null  无返回值
 */
function delayedRefresh(data, obj, willlen, decimal) {
    var arr = grouping(data, obj);
    if (!arr) {
        return;
    }
    var n = 0;
    digitalScrollFun(arr[0], obj, willlen, decimal)
    var timer = setInterval(function () {
        n++;
        digitalScrollFun(arr[n], obj, willlen, decimal);
        if (n + 1 == obj.num) {
            clearInterval(timer)
        }
    }, obj.time / obj.num);
}

/**
 * 方法说明
 * @method grouping   多次翻牌数据解析为数组 根据传入目标数据、次数值、时间值，将目标数据解析为对应次数的数据数组
 * @param  number  data  传入值为数字类型 界面最终变换后的值
 * @param  object  obj  传入值为对象类型  
 * {
 * id:string,   //id的值为翻牌效果的目标元素id
 * num:number,  //num的值是将数值分次翻拍的次数
 * time:number  //time为翻拍的时间范围
 * } 
 * @return arr  返回值为数组
 */
function grouping(data, obj) {
    var result = [];
    // 获取旧数据
    var oldspans = $("#" + obj.id + " span");
    var oldspansVal = "";
    if (oldspans.length) {
        for (var i = 0; i < oldspans.length; i++) {
            if (!($.trim($(oldspans[i]).html()) === ",")) {
                oldspansVal += $.trim($(oldspans[i]).html());
            }
        }
    } else {
        oldspansVal = 0;
    }
    oldspansVal = Number(oldspansVal);
    if (oldspansVal == data) { //若与旧数据相等返回false
        return false;
    }
    if (oldspansVal > data || data == 0) { //若小于旧数据或等于0返回false,并将数据直接追加到桌面
        $("#" + obj.id).html("<span>" + milliFormat(data) + "</span>")
        return false;
    }
    var step = (Number(data) - Number(oldspansVal)) / obj.num;
    for (var i = 0; i < obj.num - 1; i++) {
        oldspansVal += step;
        oldspansVal = Math.round(oldspansVal);
        if (oldspansVal >= data) {
            result.push(data);
        } else {
            result.push(oldspansVal);
        }
    }
    result.push(data);
    return result
}

/**
 * 方法说明
 * @method toPercent  将数据转化为百分比
 * @param  number  grouping  传入值为数字类型
 * @return string  返回值为string的百分比数据
 */
function toPercent(point) {
    var percent = Number(point * 100).toFixed(2);
    percent += "%";
    return percent;
}

/**
 * 方法说明
 * @method pageAutoTime  页面钟表时间自动刷新 依赖外部控件文件-moment.js
 * @Element #dateYear 年月日目标元素
 * @Element #dateTime 时分秒目标元素
 * @return null  无返回值
 */
function pageAutoTime(obj) {
    /*时间戳*/
    setDateTime(obj);
    setInterval(setDateTime(obj), 1000);
}

//调用时间插件  依赖外部控件文件-moment.js
function setDateTime(obj) {
    if (obj && obj.hasOwnProperty("formatA")) {
        document.querySelector("#dateYear").innerHTML = moment().format(obj.formatA);
    } else {
        document.querySelector("#dateYear").innerHTML = moment().format("YYYY/MM/DD");
    }
    if (obj && obj.hasOwnProperty("formatB")) {
        document.querySelector("#dateTime").innerHTML = moment().format(obj.formatB);
    } else {
        document.querySelector("#dateTime").innerHTML = moment().format("HH:mm:ss");
    }
}

/**
 * 方法说明
 * @method sortFun  对数组或对象数组（根据对象的某个key值）进行降序排序
 * @param  object  obj  传入值为对象
 * {
 *   arr: Arrow,   要排序的目标数组
 *   key: String,  若排序的是对象数组
 * }
 * @return null  无返回值
 */
function sortFun(obj) {
    if (obj.hasOwnProperty("key")) {
        obj.arr.sort(function (a, b) {
            return b[obj.key] - a[obj.key]
        })
    } else {
        obj.arr.sort(function (a, b) {
            return b - a
        })
    }
}

/**
 * 方法说明
 * @method getUrlParam  获取浏览器地址栏参数
 * @return null  无返回值
 */
function getUrlParam() {
    var url = window.location.search; //获取url中？符号后的参数字符
    if (url.indexOf("?") != -1) {
        return url.substr(1).toUpperCase();
    }
}


/**
 * 方法说明
 * @method initPageSize  页面窗口自适应方法初始化
 * @return null  无返回值
 */
// 监听浏览器窗口改变大小
var winWidth = 1920;
var winHeight = 1080;

function initPageSize() {
    resetScale();
    $(window).resize(function () {
        resetScale();
    });
}

// function getSize() { //获得窗口大小
//     if (window.innerWidth)
//         winWidth = window.innerWidth;
//     else if ((document.body) && (document.body.clientWidth))
//         winWidth = document.body.clientWidth;
//     //获取窗口高度
//     if (window.innerHeight)
//         winHeight = window.innerHeight;
//     else if ((document.body) && (document.body.clientHeight))
//         winHeight = document.body.clientHeight;

//     //通过深入Document内部对body进行检测，获取窗口大小
//     if (document.documentElement && document.documentElement.clientHeight &&
//         document.documentElement.clientWidth) {
//         winHeight = document.documentElement.clientHeight;
//         winWidth = document.documentElement.clientWidth;
//     }
// }

// function resetScale() { //调整缩放
//     getSize();
//     var db = document.body;
//     db.style.transform = "scale(" + winWidth / 1920 + "," + winHeight / 1080 + ")";
//     db.style.msTransform = "scale(" + winWidth / 1920 + "," + winHeight / 1080 + ")";
// }

function setNumber(num) {
    var n = Math.abs(num);
    //  var n = Number(num);
    //  if(n > 0){
    //      n = '+' + n;
    //  }
    return n;
}

// function digitalScrollFun(data, obj, willlen, decimal, milli) {
//     var divId = "newAddDeposit";
//     if (obj) {
//         divId = obj.id;
//     }
//     if (willlen == null) willlen = 0;
//     var notFinanceCnt = Math.round(data);
//     if (decimal) {
//         //		decimal = 0; 
//         notFinanceCnt = (data - 0).toFixed(decimal);//修改成 支持小数的代码
//     }
//     if (notFinanceCnt < 0) {
//         notFinanceCnt = "-" + (milli ? Math.abs(notFinanceCnt) : milliFormat(Math.abs(notFinanceCnt)));
//     } else {
//         notFinanceCnt = "" + notFinanceCnt;
//         var llen = notFinanceCnt.length;
//         if (notFinanceCnt.indexOf(".") >= 0) {
//             llen = notFinanceCnt.substring(0, notFinanceCnt.indexOf(".")).length;
//         }
//         if (llen < willlen) {
//             for (var i = 0; i < (willlen - llen); i++) {
//                 notFinanceCnt = "0" + notFinanceCnt;
//             }
//         }
//         notFinanceCnt = (milli ? notFinanceCnt : milliFormat(notFinanceCnt));
//     }
//     var cnt = notFinanceCnt;
//     var len = cnt.length;
//     var oldspans = $("#" + divId + " span");
//     var oldspansVal = [];
//     for (var i = 0; i < oldspans.length; i++) {
//         oldspansVal.push($(oldspans[i]).html());
//     }
//     $('#' + divId).html("");
//     for (var i = 0; i < len; i++) {
//         $("<span id='value" + i + "' class='cntStyle'>").appendTo($('#' + divId));
//     }
//     var spans = $("#" + divId + " span");
//     var arr = [];
//     var fopacity = true;
//     for (var i = 0; i < cnt.length; i++) {
//         ss = (cnt.substr(i, 1));
//         arr.push(ss);
//         if (ss == "0") {
//             if (fopacity) {
//                 $(spans[i]).css({ opacity: .5 });//把首位补0操作出现的0010.00的第一等等，增加透明度
//             }
//         } else {
//             if (fopacity)
//                 if ((ss == ",")) {
//                     fopacity = true
//                 } else {
//                     fopacity = false;
//                 }
//         }
//         if (!oldspansVal[i] ? true : (oldspansVal[i] != arr[i])) {//循环所有id*=value的span，如果和上次不相等，就变化
//             addCount($(spans[i]), arr[i], 0);
//         } else {
//             $(spans[i]).html(arr[i]);
//         }
//     }
// }

//添加千分位
function milliFormatFn(s) {
    s = s + "";
    var op = "";
    if (s.indexOf("-") == 0) {
        op = "-";
        s = s.substring(1, s.length);
    }

    if (/[^0-9\.\-]/.test(s)) {
        return "invalid value";
    }
    var s1 = "";
    var s2 = "";
    if (s.indexOf(".") >= 0) {
        s1 = s.split(".")[0];
        s2 = s.split(".")[1];
        s = s1;
    }
    s = s.replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s)) {
        s = s.replace(re, "$1,$2");
    }
    s = s.replace(/,(\d\d)$/, ".$1");
    s = s.replace(/^\./, "0.");
    s = s.toString();
    if (s.length > 3) {
        if (s.substring(s.length - 3, s.length) == ".00") {
            if (s2) {
                return op + s.substring(0, s.length - 3) + "." + s2;
            } else {
                return op + s.substring(0, s.length - 3);
            }
        }
    }
    if (s2) {
        return op + s + "." + s2;
    } else {
        return op + s;
    }
}
// function addCount(obj, orderValue, runcount) {
//     if (orderValue == ",") {
//         obj.html(" , ");
//         obj.css({ "border": "0px", "display": "inline-block", "width": "8px", "text-align": "center", "background": "transparent", "color": "#fff", "padding": "0px", "margin": "0px" });
//         //		obj.html("<i style='height:100%;width:5px;opacity:0;'></i>");
//         return;
//     } else if (orderValue == ".") {
//         obj.html(".");
//         return;
//     } else if (orderValue == "-") {
//         obj.html("-");
//         return;
//     }
//     _orderValue = Number(orderValue)
//     var _val = Number(obj.html());
//     if (!isNaN(_val)) {
//         var tempnum = _val - (-1);
//         if (tempnum == 10) {
//             obj.html(0);
//         } else {
//             obj.html(tempnum);
//         }
//         runcount++;
//         if (runcount >= mcount) {
//             if (_orderValue == Number(obj.html())) {
//                 return;
//             }
//         }
//         setTimeout(function () {
//             addCount(obj, orderValue, runcount);
//         }, 1500 * Math.random());
//     } else {
//         return;
//     }
// }


//刷屏计时器开始
var mcount = 2; //预计跑100次
//id 按位数数值逐渐增加~ N秒跑完，可以跑M次
var nc = 0;

/**
 * 方法说明
 * @method digitalScrollFun   页面数字翻牌效果
 * @param  number  data  传入值为数字类型 界面最终变换后的值
 * @param  object  obj  传入值对象{id:string} id的值为翻拍效果的目标元素id
 * @param  willlen  number 总位数
 * @param  decimal  number 小数点之后保留位数
 * @return null  无返回值
 */
function digitalScrollFun(data, obj, willlen, decimal) {
    var divId = "newAddDeposit";
    if (obj) {
        divId = obj.id;
    }
    if (willlen == null) willlen = 0;
    var notFinanceCnt = Math.round(data);
    if (decimal) {
        //		decimal = 0; 
        notFinanceCnt = (data - 0).toFixed(decimal); //修改成 支持小数的代码
    }
    if (notFinanceCnt < 0) {
        notFinanceCnt = Math.abs(notFinanceCnt) + "-" + milliFormat(Math.abs(notFinanceCnt));
        //		console.log(notFinanceCnt);
    } else {
        notFinanceCnt = "" + notFinanceCnt;
        if (notFinanceCnt.length < willlen) {
            var llen = notFinanceCnt.length;
            for (var i = 0; i < (willlen - llen); i++) {
                notFinanceCnt = "0" + notFinanceCnt;
            }
        }
        //		console.log(notFinanceCnt,milliFormat(notFinanceCnt));
        notFinanceCnt = milliFormat(notFinanceCnt);
    }
    var cnt = notFinanceCnt;
    var len = cnt.length;
    var oldspans = $("#" + divId + " span");
    var oldspansVal = [];
    for (var i = 0; i < oldspans.length; i++) {
        oldspansVal.push($(oldspans[i]).html());
    }
    $('#' + divId).html("");
    for (var i = 0; i < len; i++) {
        $("<span id='value" + i + "' class='cntStyle'>").appendTo($('#' + divId));
    }

    var spans = $("#" + divId + " span");
    var arr = [];
    var fopacity = true;
    for (var i = 0; i < cnt.length; i++) {
        ss = (cnt.substr(i, 1));
        arr.push(ss);
        if (ss == "0") {
            if (fopacity) {
                $(spans[i]).css({
                    opacity: .5
                }); //把首位补0操作出现的0010.00的第一等等，增加透明度
            }
        } else {
            fopacity = false;
        }
        if (!oldspansVal[i] ? true : (oldspansVal[i] != arr[i])) { //循环所有id*=value的span，如果和上次不相等，就变化
            addCount($(spans[i]), arr[i], 0);
        } else {
            $(spans[i]).html(arr[i]);
        }
    }
}

function addCount(obj, orderValue, runcount) {
    if (orderValue == ",") {
        obj.html(" , ");
        obj.css({
            "display": "inline-block",
            "width": "20px",
            "text-align": "center",
            "background": "transparent",
            "height": "75px",
            "line-height": "75px",
            "border":"0px"
        });
        return;
    } else if (orderValue == ".") {
        obj.html(".");
        return;
    } else if (orderValue == "-") {
        obj.html("-");
        return;
    }
    _orderValue = Number(orderValue)
    var _val = Number(obj.html());
    if (!isNaN(_val)) {
        var tempnum = _val - (-1);
        if (tempnum == 10) {
            obj.html(0);
        } else {
            obj.html(tempnum);
        }
        runcount++;
        if (runcount >= mcount) {
            if (_orderValue == Number(obj.html())) {
                return;
            }
        }
        setTimeout(function () {
            addCount(obj, orderValue, runcount);
        }, 150 * Math.random());
    } else {
        return;
    }
}