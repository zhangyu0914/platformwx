$(function(){
	// 2. tab 切换:显示、隐藏
	$('#service-header').on('click', 'a' , function(){
		// 2.1 点击的样式
		$(this).addClass('active').siblings().removeClass('active');
		// 2.1 显示与隐藏
		var index = $(this).index();
		sessionStorage.setItem('index', index);
		var _index= JSON.parse(sessionStorage.getItem('index'));
		$('#service-content').children('div').eq(_index).removeClass('none').siblings().addClass('none');
		
		loaded();
		
	});
	function show() {
		$('.loading').addClass('none');
	}
	setTimeout(show(),1000);    //设置页面加载后1秒显示内容层
	
	// 1. 上下滚动
	function loaded () {
		var myScroll1 = new IScroll('.product #wrapper', { mouseWheel: true, tap: true ,click:true});
		var myScroll2 = new IScroll('.access-service #wrapper', { mouseWheel: true, tap: true ,click:true});
	};
	loaded();
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	// 2. 判断是否点击切换过
	var index= JSON.parse(sessionStorage.getItem('index'));
	$('#service-header').children('a').eq(index).addClass('active').siblings().removeClass('active');
	$('#service-content').children('div').eq(index).removeClass('none').siblings().addClass('none');
	loaded();
	
	showImg("#img-01");
	showImg("#img-02");
	function showImg( imgId ){
		$(imgId).on('click', function(){
	        $('.window').addClass('window-show');
	        $('.window #bg-img').attr("src", $(this).attr("src"));
	   	});
	    $('.cloes-tag').on('click', function(){
	        $('.window ').removeClass('window-show');
	    });
	};
	
	
	
	// 3.智能硬件--点击跳转
	$('.product').on('tap', '#wrapper #scroller a' , function(){
		var index = $(this).index();
		// 测试
//		window.location.href = 'label.html?index=' + index;
		// 服务器
		window.location.href = 'label?index=' + index;
	});
});
