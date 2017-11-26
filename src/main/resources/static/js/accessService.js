$(function(){
	// 2. tab 切换:显示、隐藏
	$('#service-header').on('tap', 'a' , function(){
		// 2.1 显示与隐藏
		var index = $(this).index();
		sessionStorage.setItem('index', index);
		
	});
	
	
	
	
	
});
