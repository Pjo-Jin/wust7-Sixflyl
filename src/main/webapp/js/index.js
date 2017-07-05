/*==========弹出层=============*/
//获取遮罩层元素
var mask=document.getElementById('mask');
//获取登录框盒子元素
var loginBox=document.getElementById('login-box');
var loginLink=document.getElementById('login');
loginLink.onclick=function(){
	mask.style.display='block';
	loginBox.style.display="block";
	var left=Math.floor((visibleWin().innerWidth-loginBox.offsetWidth)/2);
	//console.log(left);
	var top=Math.floor((visibleWin().innerHeight-loginBox.offsetHeight)/2);
	//console.log(visibleWin().innerHeight);
	//console.log(top);
	$('#login-box').css({left:left,top:top});	
}
mask.onclick=function(){

	mask.style.display='none';
	loginBox.style.display="none";

}
$('a[class="login_btn"]').click(function(){
	$(this).css({color:'#fff','text-decoration':'none'});
	$('#mask').show();
	var left=($(window).width()-$('#login-box').width())/2;
	var top=($(window).height()-$('#login-box').height())/2;
	$('#login-box').css({left:left,top:top});
	$('#login-box').show('speed');
});
/*=========登录正则验证=============*/
//登录切换元素的父元素
var regTop=document.getElementById('reg-top');
//获取普通登录元素
var normal=document.getElementById('normal');
//alert(normal);
//获取无密码登录元素
var nopw=document.getElementById('nopw');

//获取普通登录对应的div
var rc=document.getElementById('rc');
//获取无密码登录对应的div
var lc=document.getElementById('lc');

//实现登录方式的切换
normal.onclick=function(){
	rc.style.display="block";
	lc.style.display="none";
	regTop.style.display="block";
	nopw.style.borderBottom="none";
	normal.style.borderBottom="2px solid #ff1877";
}
nopw.onclick=function(){
	rc.style.display="none";
	lc.style.display="block";
	
	regTop.style.display="block";
	nopw.style.borderBottom="2px solid #ff1877";
	normal.style.borderBottom="none";
}
/*=========普通登录表单验证============*/
//获取提示框元素
var rcInnerNum=document.getElementById('rc-inner-num');
var rcinnerText=rcInnerNum.getElementsByTagName('span')[0];


var rcInnerVirity=document.getElementById('rc-inner-virity');
var rcInnerVirityText=rcInnerVirity.getElementsByTagName('span')[0];

//手机号码输入框
var inputPhone=document.getElementsByName('phone-num')[0];
//alert(inputPhone);
//密码输入框
var inputPassword=document.getElementsByName('password')[0];
//获取登录按钮
var loginBtn=document.getElementById('login-btn');


//用户名输入框验证
//手机输入正确标识位
var nFlag=false;
inputPhone.onblur=function(){
	//手机号码的正则验证
	var reg= /^(1([358][0-9]|(47)|[7][0178]))[0-9]{8}$/;
	//邮箱的正则验证
	var reg1=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	//昵称的正则验证
	var reg2=/^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,10}$/i;
	//console.log(this.value);
	if(this.value==""){
		rcInnerNum.style.display="block";
		rcInnerVirity.style.display="none";
		return;
	}
	if(reg.test(this.value)||reg1.test(this.value)||reg2.test(this.value)){
		nFlag=true;
		return;
	}else{
		rcInnerNum.style.display="block";
		rcInnerVirity.style.display="none";
	}
}

inputPhone.onfocus=function(){
	rcInnerNum.style.display="none";
}

//密码输入框验证
var passFlag=false;
inputPassword.onblur=function(){
	if(this.value==""){
		if(nFlag){
			rcInnerVirity.style.display="block";
			rcInnerNum.style.display="none";
			rcInnerVirityText.innerText="请输入密码";
		}
		return;
	}
	var reg=/((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/i;  
	//*密码必须为8-16位<br/>*必须有字母、数字或特殊字符其中两种
	if(!reg.test(this.value)){
		rcInnerVirity.style.display="block";
		rcInnerVirityText.innerText="密码为8-16位的字母或数字或特殊字符的结合";
		rcInnerNum.style.display="none";
	}else{
		passFlag=true;
		return;
	}
}

inputPassword.onfocus=function(){
	rcInnerVirity.style.display="none";
}

//按钮验证
loginBtn.onclick=function(e){
	stopDefault(e);
	if(inputPhone.value==""){
		rcInnerNum.style.display="block";
		rcinnerText.innerText="请输入昵称/邮箱/手机号码";
		rcInnerVirity.style.display="none";
		return;
	}
	if(inputPassword.value==""){
		if(nFlag){
			rcInnerVirity.style.display="block";
			rcInnerNum.style.display="none";
		}
		return;
	}
	if(passFlag&&nFlag){
		window.location.href='file:///C:/Users/Administrator/Desktop/陈霞的蘑菇街网站素材/蘑菇街/主页/index.html';
	}
}
/*=========手机无密码登录=============*/
//获取手机号码提示框元素
var innerNum=document.getElementById('inner-num');
var innerNumText=innerNum.getElementsByTagName('span')[0];
//获取密码提示框元素
var innerVirity=document.getElementById('inner-virity');
var innerVirityText=innerVirity.getElementsByTagName('span')[0];


//获取下拉列表元素
var selectList=document.getElementById('country');
//获取手机号码输入框
var noPhoneNum=document.getElementsByName('phone-num')[1];
//console.log(noPhoneNum);
//获取密码输入框
var otp=document.getElementsByName('password')[1];
//获取手机动态密码按钮
var getcodeBtn=document.getElementById('getcode');
//登录按钮
var loginBtn1=document.getElementById('login-btn1');

var country=[
		'喀麦隆',
		'贝宁',
		'马达加斯加',
		'卢旺达',
		'塞舌尔',
		'科特迪瓦',
		'埃及',
		'毛里求斯',
		'布基纳法索',
		'厄立特里亚',
		'圣多美和普林西比',
		'安哥拉',
		'利比亚',

		'塞卜泰',
		'津巴布韦',
		'几内亚',
		'塞拉利昂',
		'留尼汪',
		'加蓬',
		'加纳',
		'坦桑尼亚',
		'马里',
		'索马里',,
		'毛里塔尼亚',
		'乌干达',
		'乍得',
		'马约特岛',
		'科摩罗',
		'博茨瓦那',
		'塞内加尔',
		'斯威士兰',
		'几内亚(比绍)',
		'民主刚果',
		'中非共和国',
		'莱索托',
		'刚果',
		'南非',
		'利比里亚',
		'突尼斯',
		'赞比亚',
		'尼日尔',
		'西撒哈拉',
		'多哥',
		'纳米比亚',
		'莫桑比克',
		'梅利利亚',
		'埃塞俄比亚',
		'摩洛哥',
		'马拉维',
		'尼日利亚',
		'佛得角',
		'布隆迪',
		'阿尔及利亚',
		'吉布提',
		'加那利群岛',
		'冈比亚',
		'赤道几内亚',
		'苏丹',
		'肯尼亚',
		'新加坡',
		'韩国',
		'叙利亚',
		'乌兹别克斯坦',
		'巴林',
		'日本',
		'约旦',
		'越南',
		'吉尔吉斯斯坦',
		'泰国',
		'斯里兰卡',
		'阿联酋',
		'老挝',
		'阿富汗',
		'中国澳门',
		'塔吉克斯坦',
		'朝鲜',
		'巴勒斯坦',
		'中国香港',
		'伊拉克',
		'黎巴嫩',
		'科威特',
		'文莱',,
		'马尔代夫',
		'印度尼西亚',
		'以色列',
		'蒙古',

		'阿曼',
		'印度',
		'缅甸',
		'马来西亚',
		'东帝汶',
		'也门共和国',
		'不丹',
		'柬埔寨',
		'巴基斯坦',
		'孟加拉国',
		'沙特阿拉伯',
		'土库曼斯坦',
		'卡塔尔',
		'尼泊尔',
		'哈萨克斯坦',
		'菲律宾',
		'台湾',
		'伊朗',
		'哥斯达黎加',
		'古巴',
		'多米尼加共和国',
		'墨西哥',
		'尼加拉瓜',
		'巴拿马',
		'荷属安地列斯群岛',
		'萨尔瓦多',
		'英属维尔京群岛',
		'波多黎各',
		'美属维尔京群岛',
		'安圭拉(英)',
		'圣卢西亚',
		'圣文森特和格纳丁斯',
		'荷属安德列斯',
		'瓜德罗普',
		'洪都拉斯',
		'危地马拉',
		'格鲁吉亚',
		'亚美尼亚',
		'阿塞拜疆',
		'白俄罗斯',
		'俄罗斯联邦',
		'乌克兰',

		'匈牙利',
		'冰岛',
		'马耳他',
		'摩纳哥',
		'挪威',
		'罗马尼亚',
		'圣马力诺',
		'瑞典',
		'瑞士',
		'爱沙尼亚',
		'拉脱维亚',
		'立陶宛',
		'摩尔多瓦',
		'土耳其',
		'斯洛文尼亚',
		'捷克共和国',
		'斯洛伐克',
		'马其顿',
		'波斯尼亚-黑塞哥维那共和',
		'梵蒂冈城国',
		'荷兰',
		'克罗地亚',
		'希腊',
		'爱尔兰',
		'比利时',
		'塞浦路斯',
		'丹麦',
		'英国',
		'德国',
		'法国',
		'意大利',
		'卢森堡',
		'葡萄牙',
		'波兰',
		'西班牙',
		'阿尔巴尼亚',
		'安道尔',
		'列支敦士登',
		'塞黑',
		'奥地利',
		'保加利亚',
		'芬兰',
		'直布罗陀',
		'多米尼克',
		'百慕大',
		'加拿大',
		'美国',
		'格陵兰',
		
		'汤加',
		'澳大利亚',
		'库克群岛',
		'瑙鲁',
		'新喀里多尼亚',
		'瓦努阿图',
		'所罗门群岛',
		'萨摩亚',
		'图瓦卢',
		'密克罗尼西亚联邦',
		'马绍尔群岛',
		'基里巴斯',
		'法属玻利尼西亚',
		'新西兰',
		'斐济',
		'巴布亚新几内亚',
		'帕劳共和国',
		'土阿莫土群岛',
		'土布艾群岛',
		'社会群岛',
		'马克萨斯群岛',
		'瓦利斯和浮图纳',
		'盖比群岛',
		'诺福克岛',

		'智利',
		'哥伦比亚',
		'法属圭亚那',
		'圭亚那',
		'库腊索岛',
		'巴拉圭',
		'秘鲁',
		'苏里南',
		'委内瑞拉',
		'乌拉圭',
		'厄瓜多尔',
		'安提瓜和巴布达',
		'阿鲁巴岛',
		'巴哈马',
		'巴巴多斯',
		'开曼群岛',
		'格林纳达',
		'萨巴',
		'海地',
		'牙买加',
		'马提尼克',
		'蒙特塞拉特',
		'圣文森特和格林纳丁斯',
		'特立尼达和多巴哥',
		'特克斯和凯科斯群岛',
		'英属维尔京群岛',
		'圣其茨-尼维斯',
		'圣马丁岛',

		'圣皮埃尔和密克隆',
		'阿根廷',
		'伯利兹',
		'玻利维亚',
		'巴西',
		'博内尔',
		'圣卢西亚'
	];

//循环创建下拉列表项
for(var i=0;i<country.length;i++){
	var option=document.createElement('option');
	option.innerText=country[i];
	selectList.appendChild(option);
}

//手机号码验证,失焦验证
var npnFlag=false;
noPhoneNum.onblur=function(){
	var reg= /^(1([358][0-9]|(47)|[7][0178]))[0-9]{8}$/;
	if(this.value==""){
		innerNum.style.display="block";
		innerNumText.innerText="请输入手机号码";
		innerVirity.style.display="none";
		return;
	}
	if(!reg.test(this.value)){
		innerNum.style.display="block";
		innerNumText.innerText="请输入正确的手机号码";
		innerVirity.style.display="none";
		return;
	}else{
		npnFlag=true;
		return;
	}
}
//获取焦点隐藏提示框
noPhoneNum.onfocus=function(){
	innerNum.style.display="none";
}

//动态密码验证
var otpFlag=false;
otp.onblur=function(){
	var reg=/^\d{6}$/;
	if(this.value==""){
		if(npnFlag){
			innerVirity.style.display="block";
			innerVirityText.innerText="请输入验证码";
			innerNum.style.display="none";
		}
		return;
	}
	if(!reg.test(this.value)){
		if(npnFlag){
			innerVirity.style.display="block";
			innerVirityText.innerText="验证码为6位数字";
			innerNum.style.display="none";
		}
	}else{
		otpFlag=true;
		return;
	}
}

otp.onfocus=function(){
	innerVirity.style.display="none";
}

//获取动态密码按钮验证
getcodeBtn.onclick=function(e){
	stopDefault(e);
	if(npnFlag){
		//动态获取验证码
	}else{
		innerNum.style.display="block";
		innerNumText.innerText="请输入手机号码";
		innerVirity.style.display="none";
		return;
	}
}

//登录按钮验证
loginBtn1.onclick=function(e){
	stopDefault(e);
	if(noPhoneNum.value==""){
		innerNum.style.display="block";
		innerNumText.innerText="请输入手机号码";
		innerVirity.style.display="none";
		return;
	}
	if(otp.value==""){
		if(npnFlag){
			innerVirity.style.display="block";
			innerVirityText.innerText="请输入验证码";
			innerNum.style.display="none";
		}
		return;
	}
	if(npnFlag&&otpFlag){
		//数据提交，及登录跳转
		window.location.href='file:///C:/Users/Administrator/Desktop/陈霞的蘑菇街网站素材/蘑菇街/主页/index.html';
	}

}

//阻止按钮默认提交的行为函数
function stopDefault(e)
{
    if (e&&e.preventDefault)
    {
        e.preventDefault();//非IE
    }
    else
    {
        window.event.returnValue = false;//IE
        return false;
    }
}


/*========顶部导航==========*/
//购物车
var cart=document.getElementById('cart');

//console.log(cartLoding);
var emptyCart=cart.getElementsByTagName('div')[0];

addEvent(cart,'mouseover',function(e){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
	emptyCart.style.display="block";
	emptyCart.style.backgroundColor="#eee";
});
addEvent(cart,'mouseout',function(){
	emptyCart.style.display="none";
});

//客户服务
var custom=document.getElementById('custom');

var customCon=custom.getElementsByTagName('ol')[0];

addEvent(custom,'mouseover',function(e){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
	customCon.style.display="block";
	customCon.style.backgroundColor="#eee";
}); 
addEvent(custom,"mouseout",function(e){

	customCon.style.display="none";

});
//我的小店
var store=document.getElementById('store');

var storeCon=store.getElementsByTagName('ol')[0];
addEvent(store,'mouseover',function(e){
	window.event? window.event.cancelBubble = true : e.stopPropagation();
	storeCon.style.display="block";
	storeCon.style.backgroundColor="#eee";
});
addEvent(store,'mouseout',function(e){
	
	storeCon.style.display="none";
});

/*===========侧边菜单栏==============*/
//console.log($('[data-label]'));
$('[data-label]').each(function(){
	$(this).hover(function(){
		$(this).css({backgroundColor:'#ef2f23'});
	},function(){
		$(this).css({backgroundColor:'#202020'});
	});
});
$(window).scroll(function(){
	if($(window).scrollTop()>=200){
		//获取回到顶部按钮
		$('#sideBottom').css({display:'block'});
	}else{
		$('#sideBottom').css({display:'none'});
	}
});
//回到顶部
$('#sideBottom').click(function(){
	$('body,html').animate({scrollTop:0},1000);
	return false;  
});

/*=======滚动监听弹出搜索框=========*/
$(window).scroll(function(){
	var height=$('#conference-menu').offset().top;
	//console.log(height);
	if($(window).scrollTop()>=height){
		$('#J_sticky_container').css({display:'block'});
	}else{
		$('#J_sticky_container').css({display:'none'});
	}
});
//弹出搜索框，侧边商品菜单
//在子元素中添加事件，也要影响父元素时，记得不能阻止事件的冒泡(mouseover,mouseout)。当父元素的事件不让子元素继承时，记得要阻止事件的冒泡（mouseenter,mouseleave,hover）
$('#pop-logo').hover(function(event){
	// event.stopPropagation(); 
	$('#float-nav-menu').show();
	
	var color=['#f58','#f58','#f58','#f58','#f92','#57f','#57f','#57f','#e6e','#3ce','#4b7','#f4b','#0c8','#4b7']
	$('#more-nav-list li').each(function(i){
		$(this).hover(function(){
			$(this).css({backgroundColor:'#333',borderLeft:'2px solid '+color[i]+''});
		},function(){
			$(this).css({backgroundColor:'transparent',borderLeft:'none'});
		});
	});
	//子元素的事件对父级元素也有影响
	$('#more-nav-list li').each(function(i){
		$(this).mouseenter(function(){
			$('[data-nav="nav-menu"]').eq(i).show();
		});
		$(this).mouseleave(function(){
			$('[data-nav="nav-menu"]').eq(i).hide();
		});
	});
	// $('#pop-logo').mousemove(function(e){
	// 	//console.log('x='+e.clientX+'y='+e.clientY);
	// 	if(e.clientX<80||e.clientY>510||e.clientX>860){
	// 		$('#float-nav-menu').hide();
	// 	}
	// });
},function(event){
	event.stopPropagation(); 
	$('#float-nav-menu').hide();
});
//更换logo图片
function changeLogo(){
	var count=0;
	var time1=setInterval(function(){
		count++;
		if(count%2==0){
			$('#s1111-logo').attr('src','./images/1111_220x90.gif').css({width:220,height:90,top:0,left:0});
		}else{
			$('#s1111-logo').attr('src','./images/logo.png').css({width:150,height:40,top:25,left:35});
		}
		if(count>=8){
			count=0;
		}
	},5000);
}
changeLogo();

//搜索框
$('#select-box').hover(function(){
	$('#select-box ol').show();
	$('#select-box ol li').eq(0).click(function(){
		$('#select-box span').text('搜商品');
		$('#select-box ol').hide();
	});
	$('#select-box ol li').eq(1).click(function(){
		$('#select-box span').text('搜店铺');
		$('#select-box ol').hide();
	});

},function(){
	$('#select-box ol').hide();
});
//搜索历史信息
$('#top_nav_form input[name="q"]').click(function(){
	$('#top-search-hint-1').show();
}).blur(function(){
	$('#top-search-hint-1').hide();
});

$('#select-box-1').hover(function(){
	$('#select-box-1 ol').show();
	$('#select-box-1 ol li').eq(0).click(function(){
		$('#select-box-1 span').text('搜商品');
		$('#select-box-1 ol').hide();
	});
	$('#select-box-1 ol li').eq(1).click(function(){
		$('#select-box-1 span').text('搜店铺');
		$('#select-box-1 ol').hide();
	});

},function(){
	$('#select-box-1 ol').hide();
});

$('#top_nav_form input[name="q1"]').click(function(){
	$('#top-search-hint').show();
}).blur(function(){
	$('#top-search-hint').hide();
});

/*========轮播区菜单栏============*/
menu();
function menu(){
	$('#more-banner-list li').each(function(i){
		//轮播区菜单边框颜色数组
		var color=['#f58','#f58','#f58','#f58','#f92','#57f','#57f','#57f','#e6e','#3ce','#4b7','#f4b','#0c8','#4b7'];
		$(this).hover(function(){
			$(this).css({backgroundColor:'#222',borderLeft:'2px solid '+color[i]+''});
		},function(){
			$(this).css({backgroundColor:'transparent',borderLeft:'none'});
		});
	});
	//二级菜单显示
	$('#more-banner-list li').each(function(i){
		$(this).hover(function(e){
			e.stopPropagation();
			$('[data-ban="ban-menu"]').eq(i).show();
		},function(e){
			e.stopPropagation();
			$('[data-ban="ban-menu"]').eq(i).hide();
		});
	});	
}


/*===========兼容IE8的轮播图===============*/
lunbo();
function lunbo(){
	//$('div[class="banner-button"] ul li');
	//轮播按钮位置设置
	var bannerBtnLeft=($('#banner-box').width()-$('div[class="banner-button"]').width())/2;
	/*console.log($('#banner-box').width());
	console.log(bannerBtnLeft);*/
	$('div[class="banner-button"]').css({left:bannerBtnLeft});
	
	var a=0;//关联变量，关联图片及按钮
	
	//轮播区背景数组
	var color=['#FF9003','#CE4853','#6F3C9B','#7C4181','#4A6CB6','#744395','#BC416D'];
	//console.log($('li[data-bi]'));
	
	//定时器变量，用于存储定时器的ID
	var timer=null;

	//无限轮播函数
	function play(){
		"use strict";
		$('#banner-img a').eq(a).css({display:'block'}).siblings().css({display:'none'});
		//针对IE和其他浏览器设置的按钮显示，及有无动画
		if(browser()=='ie8'||browser()=='ie9'||browser()=='ie7'){
			$('li[data-bi]').eq(a).css({backgroundPosition:'-129px -17px'}).siblings().css({backgroundPosition:'-97px -17px'});
			$('img[data-btn]').each(function(){
				$(this).css({display:'none'});
			});
		}else{
			$('li[data-bi]').eq(a).css({backgroundPosition:'-157px -17px'}).siblings().css({backgroundPosition:'-97px -17px'});
			$('img[data-btn]').each(function(){
				$(this).css({display:'none'});
			});
			//轮播按钮动画旋转360度
			$('img[data-btn]').eq(a).css({display:'block'}).rotate({
				duration:3000,
				angle:0,
				animateTo:360
			});
		}
		/*console.log($('li[data-bi] img'));*/
		$('#header-banner').css({backgroundColor:color[a]});
		a++;
		if(a>=$('#banner-img a').length){
			a=0;
		}
		timer=setTimeout(play,3000);
	}
	play();


	$('#banner-box').hover(function(){
		clearTimeout(timer);
	},function(){
		play();
	});
	//遍历轮播按钮，添加鼠标事件
	$('li[data-bi]').each(function(i){
		$(this).mouseover(function(){
			if(browser()=='ie8'||browser()=='ie9'||browser()=='ie7'){
				$(this).css({backgroundPosition:'-129px -17px'}).siblings().css({backgroundPosition:'-97px -17px'});
				$('img[data-btn]').each(function(){
					$(this).css({display:'none'});
				});
			}else{
				$(this).css({backgroundPosition:'-157px -17px'}).siblings().css({backgroundPosition:'-97px -17px'});
				$('img[data-btn]').each(function(){
						$(this).css({display:'none'});
				});
				//轮播按钮图片动画旋转360度
				$('img[data-btn]').eq(i).css({display:'block'}).rotate({
					duration:3000,
					angle:0,
					animateTo:360
				});
			}
			$('#banner-img a').eq(i).css({display:'block'}).siblings().css({display:'none'});
			$('#header-banner').css({backgroundColor:color[i]});
			a=i+1;
			if(a>=$('#banner-img a').length){
				a=0;
			}
		});
	});
}


/*=======限时快抢时间设定=========*/
kuaiqiang();
function kuaiqiang(){
	function getTime(){
		var now=new Date().getTime();
	 	var end=new Date("2016/11/11").getTime();
	 	var temp=end-now;
	 	var sec=00;
	 	var min=00;
	 	var hou=00;
	 	if(temp<=0){
	 		return {hou:'00',min:'00',sec:'00',flag:false};
	 	}else{
	 		var temp2=new Date();
	 		temp2.setTime(temp);
	 		sec=Math.floor((temp)/1000%60);
	 		min=Math.floor(temp/(60*1000)%60);
	 		hou=Math.floor(temp/(60*60*1000));
	 		return {hou:hou,min:min,sec:sec,flag:true};
	 	}
	}
	var spanHou=document.getElementById('hou');
	var spanMin=document.getElementById('min');
	var spanSec=document.getElementById('sec');
	var time=setInterval(function(){
		var t=getTime();
		if(t.flag){
			if(t.hou<10){
				spanHou.innerText="0"+t.hou;
			}else{
				spanHou.innerText=t.hou;
			}
			if(t.min<10){
				spanMin.innerText="0"+t.min;
			}else{
				spanMin.innerText=t.min;
			}
			if(t.sec<10){
				spanSec.innerText="0"+t.sec;
			}else{
				spanSec.innerText=t.sec;
			}
		}else{
			spanHou.innerText=t.hou;
			spanMin.innerText=t.min;
			spanSec.innerText=t.sec;
			clearInterval(time);
		}
	},1000);
}


/*======用户信息=======*/
$('div[class="live_show"]').hover(function(){
	$('img[class="yh-qrCode"]').show();
},function(){
	$('img[class="yh-qrCode"]').hide();
});


/*=======商品显示=========*/
//appednGoods();
var countImg=0;
function appednGoods(countImg){

	var dataImg={'data':[
			{
				'src':'11.jpg',
				'title':'买一送四秋冬款网红明星同款麦昆小白鞋',
				'price':'¥59.9',
				'num':'530'
			},
			{
				'src':'12.jpg',
				'title':'韩版懒兔毛平底加棉豆豆鞋',
				'price':'¥68.6',
				'num':'21907'
			},
			{
				'src':'13.jpg',
				'title':'包包2016韩版新款简约爆裂纹双肩包女学院风百搭休闲背包潮',
				'price':'¥55.3',
				'num':'45326'
			},
			{
				'src':'14.jpg',
				'title':'【买3送1】可爱奥利奥奶油饼干伴侣盒子双联盒清洗盒隐形眼镜盒',
				'price':'¥9.9',
				'num':'2154'
			},
			{
				'src':'15.jpg',
				'title':'童装新款外套 儿童外套韩版女童加厚迷彩牛仔外套潮流上衣',
				'price':'¥120.75',
				'num':'26'
			},
			{
				'src':'16.jpg',
				'title':'女童毛衣套头针织衫2016秋冬童装卡通加厚棉线儿童长袖打底衫',
				'price':'¥68.95',
				'num':'64'
			},
			{
				'src':'17.jpg',
				'title':'秋季新款 女装喇叭袖轻薄羽绒服外套中长款面包服',
				'price':'¥149',
				'num':'5987'
			},
			{
				'src':'18.jpg',
				'title':'韩版中长款修身纯色长袖女t恤纯棉学生打底衫白色上衣体恤秋',
				'price':'¥28',
				'num':'275'
			},
			{
				'src':'19.jpg',
				'title':'包邮艾丽可大美目彩色隐形眼镜',
				'price':'¥39.9',
				'num':'467'
			},
			{
				'src':'20.jpg',
				'title':'学院风冬季新品贝壳鞋魔术贴棉鞋厚底休闲鞋女鞋子韩版保暖鞋运动',
				'price':'¥66.5',
				'num':'781'
			},
			{
				'src':'21.jpg',
				'title':'买一送四秋冬款网红明星同款麦昆小白鞋',
				'price':'¥59.9',
				'num':'530'
			},
			{
				'src':'22.jpg',
				'title':'韩版懒兔毛平底加棉豆豆鞋',
				'price':'¥68.6',
				'num':'21907'
			},
			{
				'src':'23.jpg',
				'title':'包包2016韩版新款简约爆裂纹双肩包女学院风百搭休闲背包潮',
				'price':'¥55.3',
				'num':'45326'
			},
			{
				'src':'24.jpg',
				'title':'【买3送1】可爱奥利奥奶油饼干伴侣盒子双联盒清洗盒隐形眼镜盒',
				'price':'¥9.9',
				'num':'2154'
			},
			{
				'src':'25.jpg',
				'title':'童装新款外套 儿童外套韩版女童加厚迷彩牛仔外套潮流上衣',
				'price':'¥120.75',
				'num':'26'
			},
			{
				'src':'26.jpg',
				'title':'女童毛衣套头针织衫2016秋冬童装卡通加厚棉线儿童长袖打底衫',
				'price':'¥68.95',
				'num':'64'
			},
			{
				'src':'27.jpg',
				'title':'秋季新款 女装喇叭袖轻薄羽绒服外套中长款面包服',
				'price':'¥149',
				'num':'5987'
			},
			{
				'src':'28.jpg',
				'title':'韩版中长款修身纯色长袖女t恤纯棉学生打底衫白色上衣体恤秋',
				'price':'¥28',
				'num':'275'
			},
			{
				'src':'29.gif',
				'title':'包邮艾丽可大美目彩色隐形眼镜',
				'price':'¥39.9',
				'num':'467'
			},
			{
				'src':'30.jpg',
				'title':'学院风冬季新品贝壳鞋魔术贴棉鞋厚底休闲鞋女鞋子韩版保暖鞋运动',
				'price':'¥66.5',
				'num':'781'
			},{
				'src':'31.jpg',
				'title':'买一送四秋冬款网红明星同款麦昆小白鞋',
				'price':'¥59.9',
				'num':'530'
			},
			{
				'src':'32.jpg',
				'title':'韩版懒兔毛平底加棉豆豆鞋',
				'price':'¥68.6',
				'num':'21907'
			},
			{
				'src':'33.jpg',
				'title':'包包2016韩版新款简约爆裂纹双肩包女学院风百搭休闲背包潮',
				'price':'¥55.3',
				'num':'45326'
			},
			{
				'src':'34.jpg',
				'title':'【买3送1】可爱奥利奥奶油饼干伴侣盒子双联盒清洗盒隐形眼镜盒',
				'price':'¥9.9',
				'num':'2154'
			},
			{
				'src':'35.jpg',
				'title':'童装新款外套 儿童外套韩版女童加厚迷彩牛仔外套潮流上衣',
				'price':'¥120.75',
				'num':'26'
			},
			{
				'src':'36.jpg',
				'title':'女童毛衣套头针织衫2016秋冬童装卡通加厚棉线儿童长袖打底衫',
				'price':'¥68.95',
				'num':'64'
			},
			{
				'src':'37.jpg',
				'title':'秋季新款 女装喇叭袖轻薄羽绒服外套中长款面包服',
				'price':'¥149',
				'num':'5987'
			},
			{
				'src':'38.jpg',
				'title':'韩版中长款修身纯色长袖女t恤纯棉学生打底衫白色上衣体恤秋',
				'price':'¥28',
				'num':'275'
			},
			{
				'src':'39.jpg',
				'title':'包邮艾丽可大美目彩色隐形眼镜',
				'price':'¥39.9',
				'num':'467'
			},
			{
				'src':'40.jpg',
				'title':'学院风冬季新品贝壳鞋魔术贴棉鞋厚底休闲鞋女鞋子韩版保暖鞋运动',
				'price':'¥66.5',
				'num':'781'
			},
			{
				'src':'41.jpg',
				'title':'买一送四秋冬款网红明星同款麦昆小白鞋',
				'price':'¥59.9',
				'num':'530'
			},
			{
				'src':'42.jpg',
				'title':'韩版懒兔毛平底加棉豆豆鞋',
				'price':'¥68.6',
				'num':'21907'
			},
			{
				'src':'43.jpg',
				'title':'包包2016韩版新款简约爆裂纹双肩包女学院风百搭休闲背包潮',
				'price':'¥55.3',
				'num':'45326'
			},
			{
				'src':'44.jpg',
				'title':'【买3送1】可爱奥利奥奶油饼干伴侣盒子双联盒清洗盒隐形眼镜盒',
				'price':'¥9.9',
				'num':'2154'
			},
			{
				'src':'45.jpg',
				'title':'童装新款外套 儿童外套韩版女童加厚迷彩牛仔外套潮流上衣',
				'price':'¥120.75',
				'num':'26'
			},
			{
				'src':'46.jpg',
				'title':'女童毛衣套头针织衫2016秋冬童装卡通加厚棉线儿童长袖打底衫',
				'price':'¥68.95',
				'num':'64'
			},
			{
				'src':'47.jpg',
				'title':'秋季新款 女装喇叭袖轻薄羽绒服外套中长款面包服',
				'price':'¥149',
				'num':'5987'
			},
			{
				'src':'48.jpg',
				'title':'韩版中长款修身纯色长袖女t恤纯棉学生打底衫白色上衣体恤秋',
				'price':'¥28',
				'num':'275'
			},
			{
				'src':'49.jpg',
				'title':'包邮艾丽可大美目彩色隐形眼镜',
				'price':'¥39.9',
				'num':'467'
			},
			{
				'src':'50.jpg',
				'title':'学院风冬季新品贝壳鞋魔术贴棉鞋厚底休闲鞋女鞋子韩版保暖鞋运动',
				'price':'¥66.5',
				'num':'781'
			},{
				'src':'51.jpg',
				'title':'达令女王  韩版时尚超长款双面呢子大衣直筒宽松毛呢外套',
				'price':'¥59.9',
				'num':'530'
			},
			{
				'src':'52.jpg',
				'title':'vivoy35 y37x5m 硅胶彩绘浮雕挂绳手机壳',
				'price':'¥68.6',
				'num':'21907'
			},
			{
				'src':'53.jpg',
				'title':'{加绒}新款欧美范绒面毛线套女短靴 舒适防滑大底套脚女靴子',
				'price':'¥55.3',
				'num':'45326'
			},
			{
				'src':'54.jpg',
				'title':'2016秋冬新品斗篷加厚大毛领中长款宽松棉袄外套百搭棉衣女',
				'price':'¥9.9',
				'num':'2154'
			},
			{
				'src':'55.jpg',
				'title':'秋冬新品韩版潮女装秋装秋冬披肩外套针织衫套头衣服流苏毛衣',
				'price':'¥120.75',
				'num':'26'
			},
			{
				'src':'56.jpg',
				'title':'大码紧身弹力高腰牛仔裤女秋冬加绒加厚小脚铅笔长裤',
				'price':'¥68.95',
				'num':'64'
			},
			{
				'src':'57.jpg',
				'title':'秋冬新品加绒加厚假两件打底裤外穿大码包臀裙裤',
				'price':'¥149',
				'num':'5987'
			},
			{
				'src':'58.jpg',
				'title':'秋冬纯棉少女内裤女可爱白色中腰无痕透气三角裤头学生全棉质印花',
				'price':'¥28',
				'num':'275'
			},
			{
				'src':'59.jpg',
				'title':'新品男装商务男士西服韩版修身灯芯绒休闲西装男外套',
				'price':'¥39.9',
				'num':'467'
			},
			{
				'src':'60.jpg',
				'title':'秋季新款韩版孕妇毛衣裙+打底衫潮妈孕妇装针织背带裙秋季两件套',
				'price':'¥66.5',
				'num':'781'
			}
			
		]};
	
	//console.log(dataImg.data[1].src);
	if(countImg*10<=dataImg.data.length){
		var a=countImg-1;
		for(var i=0;i<10;i++){
			$('#goods-list-mod').append('<div class="goods-item"data-index="'+(countImg*10+i)+'"><div class="border_top"></div><div class="border_right"></div><div class="border_bottom"></div><div class="border_left"></div><a href="javascript:void(0)" class="goods-img"><span class="icon-lefttop"><img src="./images/1111.png" alt=""></span><img src="./goods-image/'+dataImg.data[a*10+i].src+'" alt=""><p class="vis-title">'+dataImg.data[a*10+i].title+'</p></a><a href="javascript:void(0)"class="goods-info-box"><p class="goods-title">'+dataImg.data[a*10+i].title+'</p><p class="icon-leftbottom"><img src="./images/liangping_60x36.png" alt=""></p><div class="goods-info-dis"><b class="price-info">'+dataImg.data[a*10+i].price+'</b><span class="fav-num">'+dataImg.data[a*10+i].num+'<img src="./goods-image/start.png" alt=""></span></div></a></div>');
		}
		return true;
	}else{
		return false;
	}
}


$(function(){
	$(window).scroll(function(){
		//console.log($('.goods-item').length)
		var flag=true;
		if(flag){
			var lastTop=$('.goods-item').eq(length).offset().top+countImg*($('.goods-item').eq(1).height()*2);
			//console.log(lastTop);
			var height=$(window).scrollTop()+$(window).height();
			//console.log(height);
			if(lastTop<height){
				countImg++;
				flag=appednGoods(countImg);
			}
		}else{
			return;
		}
	});
	
	$('#goods-list-mod').on('mouseenter','.goods-item',function(event){
		event.stopPropagation();
		//console.log($(this).attr('data-index'));
		var i=$(this).attr('data-index');
		$('div[class="border_top"]').eq(i).animate({width:'220px'},'fast');
		$('div[class="border_right"]').eq(i).animate({height:'330px'},'fast');
		$('div[class="border_bottom"]').eq(i).animate({width:'220px'},'fast');
		$('div[class="border_left"]').eq(i).animate({height:'330px'},'fast');
		$('p[class="vis-title"]').eq(i).hide();
		$('a[class="goods-info-box"]').eq(i).show();
		/*return false;*/
	});
	$('#goods-list-mod').on('mouseleave','.goods-item',function(event){
		event.stopPropagation();
		var i=$(this).attr('data-index');
		$('div[class="border_top"]').eq(i).animate({width:'0px'},'fast');
		$('div[class="border_right"]').eq(i).animate({height:'0px'},'fast');
		$('div[class="border_bottom"]').eq(i).animate({width:'0px'},'fast');
		$('div[class="border_left"]').eq(i).animate({height:'0px'},'fast');
		$('p[class="vis-title"]').eq(i).show();
	 	$('a[class="goods-info-box"]').eq(i).hide();
	 	/*return false;*/
	});
});


/*==========楼层跳转=============*/
function floorSkip(){
	var color=['#EE9D6E','#AF65E7','#FE5785','#FFCA34','#6DA9FC','#62C1FB','#9079FF','#AF65E7','#7BDD5E','#E85EC6','#0ED499','#C966A6'];
	$('.floor-item').each(function(i){
		$(this).hover(function(){
			var num=$(this).attr('data-fl');
			$(this).css({background:color[num]});
		},function(){
			$(this).css({background:'none'});
		});
	});
	$('.floor-item').each(function(i){
		$(this).click(function(){
			var num=$(this).attr('data-fl');
			var top=$('[data-flindex]').eq(num).offset().top-60;
			$('body,html').stop().animate({scrollTop:top},1000);
			return false; 
		});
	});
}
floorSkip();
$(window).scroll(function(){
	var flTop=$('[data-flindex]').eq(0).offset().top;
	var currentTop=$(window).scrollTop()+$(window).height();
	if(flTop<currentTop){
		$('.storey').show();
	}else{
		$('.storey').hide();
		return false;
	}
});



/*========工具函数===========*/
/**
 * 阻止事件的冒泡
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
function myfn(e){
	//如果提供了事件对象，则这是一个非IE浏览器 
	if ( e && e.stopPropagation ) 
    	//因此它支持W3C的stopPropagation()	方法 
   	 e.stopPropagation(); 
	else 
   	 	//否则，我们需要使用IE的方式来取消事件冒泡 
   	 	window.event.cancelBubble = true; 
}

/**
 * 获取样式的值
 * @param  {对象} obj  [元素]
 * @param  {属性} attr [样式]
 * @return {属性值}      [样式的值]
 */
function getStyle (obj,attr) { 
	//IE兼容
	if(obj.currentStyle){ 
		return obj.currentStyle[attr];
	}else{ 
		return getComputedStyle(obj,false)[attr];
	}

}

/**
 * 跨浏览器添加事件方法
 * @param {[type]} element [元素]
 * @param {[type]} type    [添加的事件类型]
 * @param {[type]} handler [事件处理函数]
 */
function addEvent(element, type, handler) {
	//为每一个事件处理函数分派一个唯一的ID
	if (!handler.$$guid) 
		handler.$$guid = addEvent.guid++;
	//为元素的事件类型创建一个哈希表
	if (!element.events) 
		element.events = {};
	//为每一个"元素/事件"对创建一个事件处理程序的哈希表
	var handlers = element.events[type];
	if (!handlers) {
		handlers = element.events[type] = {};
		//存储存在的事件处理函数(如果有)
		if (element["on" + type]) {
			handlers[0] = element["on" + type];
		}
	}
	//将事件处理函数存入哈希表
	handlers[handler.$$guid] = handler;
	//指派一个全局的事件处理函数来做所有的工作
	element["on" + type] = handleEvent;
};
//用来创建唯一的ID的计数器
addEvent.guid = 1;
function removeEvent(element, type, handler) {
	//从哈希表中删除事件处理函数
	if (element.events && element.events[type]) {
		delete element.events[type][handler.$$guid];
	}
};
function handleEvent(event) {
	var returnValue = true;
	//抓获事件对象(IE使用全局事件对象)
	event = event || fixEvent(window.event);
	//取得事件处理函数的哈希表的引用
	var handlers = this.events[event.type];
	//执行每一个处理函数
	for (var i in handlers) {
		this.$$handleEvent = handlers[i];
		if (this.$$handleEvent(event) === false) {
			returnValue = false;
		}
	}
	return returnValue;
};
//为IE的事件对象添加一些“缺失的”函数
function fixEvent(event) {
//添加标准的W3C方法
	event.preventDefault = fixEvent.preventDefault;
	event.stopPropagation = fixEvent.stopPropagation;
	return event;
};
fixEvent.preventDefault = function() {
	this.returnValue = false;
};
fixEvent.stopPropagation = function() {
	this.cancelBubble = true;
};


/*======获取浏览器可视窗口========*/
function visibleWin(){
	var winWidth,winHeight;
	// 获取窗口宽度
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if((document.documentElement)&&(document.documentElement.clientWidth)){
		winWidth = document.documentElement.clientWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	// 获取窗口高度
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if((document.documentElement)&&(document.documentElement.clientHeight)){
		winHeight = document.documentElement.clientHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	return {innerWidth:winWidth,innerHeight:winHeight}
}
/*=======获取IE浏览器类型及版本号=========*/
function browser(){
	if(navigator.userAgent.indexOf("MSIE")>0){   
      if(navigator.userAgent.indexOf("MSIE 6.0")>0){   
        return("ie6");    
      }   
      if(navigator.userAgent.indexOf("MSIE 7.0")>0){  
        return("ie7");   
      }   
      if(navigator.userAgent.indexOf("MSIE 8.0")>0 && !window.innerWidth){//这里是重点，你懂的
        return("ie8");  
      }   
      if(navigator.userAgent.indexOf("MSIE 9.0")>0){  
        return("ie9");  
      }   
    } 
}
/*========工具函数===========*/
