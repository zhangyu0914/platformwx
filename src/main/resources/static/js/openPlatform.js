$(function(){
	// 1. 上下滚动
	var myScroll;
	function loaded () {
		myScroll = new IScroll('#wrapper', { mouseWheel: true, tap: true });
	};
	loaded();
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	//	2. 点击滚动到相应位置
	$('#header').on('tap','.list' , function(){
//		$(this).addClass('active').siblings().removeClass('active');
		
		if ($(this).index() == 0) {
			myScroll.scrollToElement('.platform',10);
		    setTimeout(function(){ myScroll.refresh(); },10);
		} else if ($(this).index() == 1) {
			myScroll.scrollToElement('#second',10);
		    setTimeout(function(){ myScroll.refresh(); },10);
		} else if ($(this).index() == 2) {
			myScroll.scrollToElement('.product-advantage',10);
		    setTimeout(function(){ myScroll.refresh(); },10);
		} else if ($(this).index() == 3) {
			myScroll.scrollToElement('.API',10);
		    setTimeout(function(){ myScroll.refresh(); },10);
		} else if ($(this).index() == 4) {
			myScroll.scrollToElement('#unionMall',10);
		    setTimeout(function(){ myScroll.refresh(); },10);
		}
	});
	
	myScroll.on('scrollEnd', function() {
		//console.log(document.body.scrollTop);
//		console.log(this.y);
//		console.log('医疗物联云平台='+$('#structure').offset().top);
//		console.log($('#structure').offset());
//		console.log('开发平台='+$('#development').offset().top);
//		console.log('运营支撑平='+$('#operationSupport').offset().top);
//		console.log('物联商城='+$('#unionMall').offset().top);
	  	if(this.y >= -320 ) {
	  		$('#header>.list').eq(0).addClass('active').siblings().removeClass('active');
	  	} else if(this.y >= -640 && this.y < -320) {
	  		$('#header>.list').eq(1).addClass('active').siblings().removeClass('active');
	  	} else if(this.y >= -950 && this.y < -640) {
	  		$('#header>.list').eq(2).addClass('active').siblings().removeClass('active');
	  	} else if(this.y >= -1100 && this.y < -950) {
	  		$('#header>.list').eq(3).addClass('active').siblings().removeClass('active');
	  	} else{
	  		$('#header>.list').eq(4).addClass('active').siblings().removeClass('active');
	  	} 
	});
});
