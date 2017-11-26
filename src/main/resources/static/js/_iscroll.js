$(function(){
	var myScroll;
	
	function loaded () {
		myScroll = new IScroll('#wrapper', { mouseWheel: true, click: true, tap: true });
	};
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	loaded();
	
	function show() {
		$('.loading').addClass('none');
	}
	setTimeout(show(),1000);    //设置页面加载后1秒显示内容层
	
	
});
