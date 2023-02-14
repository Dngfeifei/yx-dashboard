/*
    @parme 元素 tab保留几位小数 passtime切换时间 fn2方法2(每次不平均加载)
    gl 2018-07-17
    v1.1
    main1peo3 = new sortData2(xxx,0,1000,2); 生成实例初始化
    main1peo3.plus(num);                     更新数据
*/


var sortData2 = function(id,tab,passtime,fn2){   //元素 tab保留几位小数 passtime切换时间 fn2方法2(每次不平均加载)
	var that = this;
	this.id = id,
	//this.fixed = (typeof fixed == 'undefined') ? 0 : fixed,
	this.tab = (typeof tab == 'undefined') ? 0 : tab,               //tab 0 金额，保留两位小数 ；1 笔数 整数。
    this.setPlus = null,
    this.nowvalue = 0,
    this.newvalue = 0,
    this.step = 0,
    this.passtime = passtime ? passtime : 1000,
    this.fn = digitalScrollFun;
    this.plus = function (value){
            clearTimeout(this.setPlus);       //清除现有定时器
            if(value < this.nowvalue ) this.nowvalue = 0;
			if(typeof Number(value) == "number") this.newvalue = value;
            if(fn2){
              this.plus2();
              return;   
            }
            var plusNum = this.tab <= 0 ? Math.floor(parseInt(this.newvalue - this.nowvalue)/12) : ((this.newvalue - this.nowvalue)/12).toFixed(this.tab); //12为分割加载次数，后续可作为参数进行配置
			if(plusNum < 0){           
                this.step = 0,
				this.newvalue = 0,
				this.fn(0, {id:this.id},0,this.tab);
            }else{
                //dom.data("step",plusNum);
				this.step = plusNum;
            }
            
        this.playPass();
		//this.setPlus = setTimeout(this.playPass,this.passtime);
    }
    this.playPass = function (){
        var nowvalue = Number(that.nowvalue) + Number(that.step);
        if(nowvalue < that.newvalue){
            //调用方法(nowvalue)
            that.fn(nowvalue, {id:that.id},0,that.tab),
			that.nowvalue = nowvalue;
			that.setPlus = setTimeout(that.playPass,that.passtime);
         }else{
            //调用方法(dom.data("newvalue"))
            that.fn(that.newvalue, {id:that.id},0,that.tab);
            that.nowvalue = that.newvalue;
            clearTimeout(that.setPlus);
        }
    }
    this.plus2 = function (){
        if(that.nowvalue >= that.newvalue ) {
            return;
        }
        var numm = Math.abs(that.nowvalue - that.newvalue),l = that.newvalue.toString().length;
        if(numm > 1000){
            that.nowvalue += that.tab <= 0 ? parseInt(numm/9) : (numm/9).toFixed(that.tab); //15为分割加载次数，后续可作为参数进行配置
            that.fn(that.nowvalue, {id:that.id},0,that.tab);
            that.setPlus = setTimeout(function(){
               that.plus2();
            },100);
        }else if(numm > 0 && numm <=1000  ){
            numm++;
            if(that.nowvalue >= that.newvalue){
                that.fn(that.nowvalue, {id:that.id},0,that.tab);
                that.setPlus = setTimeout(function(){
                    that.plus2();
                },10);
            }else{
                that.fn(that.newvalue, {id:that.id},0,that.tab);
                clearTimeout(that.setPlus);
            }
            
        }else{
            that.fn(that.newvalue, {id:that.id},0,that.tab);
            clearTimeout(that.setPlus); 
         }
    }
}


/**
 * 添加千分位
 */
function milliFormat(s){
	var decimalLen = 2;//小数点后位数
	var _regular ="";
	s = s+"";
	if(s.indexOf(".")>=0){
		//如果有小数位 更新decimalLen
		decimalLen = s.length - s.indexOf(".") -1;
	}
	for (var i = 0; i < decimalLen; i++) {
		_regular += "\\d";
	}
	var original = s;
	var op = "";
	if(s.indexOf("-")==0){
		op = "-";
		s = s.substring(1, s.length);
	}
		
	if(/[^0-9\.\-]/.test(s)) {
		return "invalid value";
	}
	s=s.replace(/^(\d*)$/,"$1.");
//	s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
	s=(s+"00").replace(eval("/(\\d*\\."+_regular+")\\d*/"),"$1");
	s=s.replace(".",",");
	var re=/(\d)(\d{3},)/;
	while(re.test(s)){
		s=s.replace(re,"$1,$2");
	}
//	s=s.replace(/,(\d\d)$/,".$1");
	s=s.replace(eval("/,("+_regular+")$/"),".$1");
	s=s.replace(/^\./,"0.");
	s=s.toString();
	
	if(s.length>(decimalLen+1)){
		if(original.length>(decimalLen+1)){
			if(s.substring(s.length-(decimalLen+1), s.length)
					==original.substring(original.length-(decimalLen+1), original.length)){
				return op+s;
			}
		}
		if(("0"+s.substring(s.length-(decimalLen+1), s.length))-0==0){
			return op+s.substring(0,s.length-(decimalLen+1));
		}
	}
		return op+s;
}

//刷屏计时器开始
var mcount=0;//预计跑100次  gl
//id 按位数数值逐渐增加~ N秒跑完，可以跑M次
var ScrollFunMap = new HashMap();
function digitalScrollFun(data,obj,willlen,decimal){
	var divId="newAddDeposit";
	if(obj){
		divId = obj.id;
	}
    if(!ScrollFunMap.containsKey(divId)){
        ScrollFunMap.put(divId,true);
    }
    if(!ScrollFunMap.get(divId)){
        console.log("ScrollFunMap--divId"+divId);
        return;
    }
	if(willlen==null) willlen = 0; 
	var notFinanceCnt = Math.round(data);
	if(decimal) {
//		decimal = 0; 
		notFinanceCnt = (data-0).toFixed(decimal);//修改成 支持小数的代码
	}
	if(notFinanceCnt<0){
		notFinanceCnt=Math.abs(notFinanceCnt)+"-"+milliFormat(Math.abs(notFinanceCnt));
//		console.log(notFinanceCnt);
	}else{
		notFinanceCnt=""+notFinanceCnt;
		if(notFinanceCnt.length<willlen){
			var llen = notFinanceCnt.length;
			for (var i = 0; i < (willlen-llen); i++) {
				notFinanceCnt="0"+notFinanceCnt;
			}
		}
//		console.log(notFinanceCnt,milliFormat(notFinanceCnt));
			notFinanceCnt = milliFormat(notFinanceCnt);
	}
    var cnt = notFinanceCnt;
    var len =cnt.length;
    var oldspans= $("#"+divId+" span");
    var oldspansVal = [];
    for( var i = 0; i < oldspans.length; i++){
    	oldspansVal.push($(oldspans[i]).html());
    }
    if(len != oldspans.length){
        $('#'+divId).html("");
        for(var i=0;i<len;i++){
            $("<span id='value"+i+"' class='cntStyle'>").appendTo($('#'+divId));
        }
    } //g
    
    var spans= $("#"+divId+" span");
	var arr=[];
	var fopacity=true;
//    if(ScrollFunMap.get("divId")){
//       ScrollFunMap.put("divId",false);
//     }else{
//        console.log("ScrollFunMap-----false");
//    }
//	ScrollFunMap.put("divId",true);
        for ( var i = 0; i < cnt.length; i++) {
             ss = (cnt.substr(i, 1));    
             arr.push(ss);
        //	 if(ss=="0"){
        //		 if(fopacity){
        //			 $(spans[i]).css({ opacity:.5});//把首位补0操作出现的0010.00的第一等等，增加透明度
        //		 }
        //	 }else{
        //		 fopacity=false;
        //	 }
            if(i == 0){
                $(spans[i]).html(arr[i]);
                continue;
            }//g
            if(!oldspansVal[i]?true:(oldspansVal[i]!=arr[i])){//循环所有id*=value的span，如果和上次不相等，就变化
                //addCount($(spans[i]),arr[i],0);
                switch(arr[i]){
                    case ",":
                        //$(spans[i]).html(",").css({"display":"inline-block","width":"30px","text-align":"center","background":"transparent"});
                        $(spans[i]).html(",").css({"width":"30px","text-align":"center","background":"transparent"});
                        break;
                    case ".":
                        $(spans[i]).html(".");
                        break;
                    case "-":
                        $(spans[i]).html("-");
                        break;
                    default:
                        addCount($(spans[i]),arr[i],0);
                        break;
                }//g
            }else{
                $(spans[i]).html(arr[i]);
            }
        }
   
//	setTimeout(function(){
//	for ( var i = 0; i < cnt.length; i++) {
//		if($(spans[i]).html()=="0"){
//			$(spans[i]).css({ opacity:.5});
//		}else{
//			break;
//		}
//	}}
//	,2500
//	);
}
function addCount(obj,orderValue,runcount){
	//if(orderValue==","){
	//	obj.html(" , ");
	//	obj.css({"display":"inline-block","width":"30px","text-align":"center","background":"transparent"});
//	//	obj.html("<i style='height:100%;opacity:0;'></i>");
	//	return;
	//}else if(orderValue=="."){
	//	obj.html(".");
	//	return;
	//}else if(orderValue=="-"){
	//	obj.html("-");
	//	return;
	//} //g
//	_orderValue = Number(orderValue)
//console.log(obj,obj[0])
if(!obj[0].parentElement){
    console.log(obj,obj[0])
}
ScrollFunMap.put(obj[0].parentElement.id,false);
    _orderValue = orderValue;
	var _val = Number(obj.html());
//    if("main1-peo3"==obj[0].parentElement.id)
//        console.log(orderValue,_val);
	if(!isNaN(_val)){
        var ops = 1;
        if(_val-orderValue>0){
            ops=1;
        }else if(_val-orderValue<0){
            ops=-1;
        }else{
            ops=0;
        }
		var tempnum= orderValue;//_val - ops; gl
//		if(tempnum==10){
//			obj.html(0);
//		}else{
			obj.html(tempnum);
//		}
		runcount++;
		if(runcount>=mcount){
			if(_orderValue == Number(obj.html())){
                ScrollFunMap.put(obj[0].parentElement.id,true);
				return ;
			}
            if(runcount>=100){
                ScrollFunMap.put(obj[0].parentElement.id,true);
				return ;
            }
		}
		setTimeout(function(){
			addCount(obj,orderValue,runcount);
			},50*Math.random());
	}else{
		return ;
	}
}