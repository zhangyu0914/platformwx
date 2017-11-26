$(function() {
	function GetRequest() { 
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		// url.indexOf("?") ：判断？的下标
		if (url.indexOf("?") != -1) { // .indexOf("?")：如果？存在
			var str = url.substr(1); // substr(1)：从下标1开始截取
			var strs = str.split("&"); // split：切割成数组
			for(var i = 0; i < strs.length; i ++) { 
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			} 
		}
		return theRequest; 
	};
	
	var Request = new Object(); 
	Request = GetRequest(); 
	index = Request['index'];
	
	$('.my-gallery>div').eq(index).removeClass('none');
	
	
});
