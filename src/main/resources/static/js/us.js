

$(function() {
	$('.nav').on('click', 'a', function(){
		$(this).addClass('active').siblings().removeClass('active');
		// 2.1 显示与隐藏
		var index = $(this).index();
		$('.content').children('div').eq(index).removeClass('none').siblings().addClass('none');
		loaded();
		
	});
	// 将input 获取焦点后，输入法上提，输入框上提
	if(/Android [4-6]/.test(navigator.appVersion)) {
	    window.addEventListener("resize", function() {
	        if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
	            window.setTimeout(function() {
	                document.activeElement.scrollIntoViewIfNeeded();
	            },0);
	        }
	    });
	}
	
	showImg("#img-we");
	function showImg( imgId ){
		$(imgId).on('click', function(){
	        $('.window').addClass('window-show');
	        $('.window #bg-img').attr("src", $(this).attr("src"));
	   	});
	    $('.cloes-tag').on('click', function(){
	        $('.window ').removeClass('window-show');
	    });
	};
	
	var myScroll,myScroll2;

	function loaded () {
		myScroll = new IScroll('.we-info #wrapper', { mouseWheel: true, tap: true ,click: true});
		myScroll2 = new IScroll('.contact-us #wrapper', { mouseWheel: true, tap: true ,click: true});
	}
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	loaded ();
	
	
	var verifyCode;
	// 邮箱表单验证规则
	var email = /^([a-zA-Z0-9_\-\.\u4e00-\u9fa5])+@([a-zA-Z0-9_\-])+((\.[a-zA-Z0-9_-]{2,5}){1,15})$/;
	// 手机验证规则
	var phone = /(^1[3|4|5|7|8]\d{9}$)|(^0\d{2,3}-\d{7,8}$)|(^\d{7,8}$)|(^0\d{2,3}-\d{7,8}-\d{1,4}$)|(^\d{7,8}-\d{1,4}$)/;

	verifyCode = new GVerify("code_container");
	
	// 提交数据
	var b=true;
	$("#contact").on( 'click','#contact_submit',function(){ 
        if(b){
        	b=false;
        	if (!check()) {
				return false;
			}
			$.ajax({
				cache : true,
				type : "POST",
				url : "../mail/mailInsert",
				data : $('#contact').serialize(),
				async : false,
				error : function(request) {
	
				},
				success : function(data) {
					if (data.result == "true") {
						layer.msg("发送成功", {
							time : 1000
						});
						setTimeout(function(){
							b = true;
						},2000);
					} else {
						layer.msg("发送失败", {
							time : 1000
						});
					}
				}
			});
        }
        
	});

	$("#userName").blur(function() {
		if ($.trim($("#userName").val()) == "") {
			$("#userName1").text("不能为空");
		} else {
			$("#userName1").text("");
		}
	});
	$("#corporateName").blur(function() {
		if ($.trim($("#corporateName").val()) == "") {
			$("#corporateName1").text("不能为空");
		} else {
			$("#corporateName1").text("");
		}
	});
	$("#phone").blur(function() {
		if($.trim($("#phone").val())==""){
			$("#phone1").text("不能为空");
		}else if (!phone.test($("#phone").val())) {
			$("#phone1").text("格式不正确");
		}else {
			$("#phone1").text("");
		}
	});
	$("#email").blur(function() {
		if($.trim($("#email").val())==""){
			$("#email1").text("不能为空");
		}else if (!email.test($("#email").val())) {
			$("#email1").text("格式不正确");
		}else {
			$("#email1").text("");
		}
	});
	$("#content").blur(function() {
		if ($.trim($("#content").val()) == "") {
			$("#content1").text("不能为空");
		} else {
			$("#content1").text("");
		}
	});
	$("#validateCode").blur(function() {
		if($.trim($("#validateCode").val())==''){
			$("#validateCode1").text("不能为空");
		}else if (!verifyCode.validate($("#validateCode").val())) {
			$("#validateCode1").text("验证码错误");
		}
	});
	
	// 检查内容是否为空：是：false、否true
	function check() {
		// 姓名/职位校验
		if ($.trim($("#userName").val()) == "") {
			$("#userName1").text("不能为空");
			return false;
		}
		// 公司名称
		if ($.trim($("#corporateName").val()) == "") {
			$("#corporateName1").text("不能为空");
			return false;
		}
		// 电话
		if($.trim($("#phone").val())==""){
			$("#phone1").text("不能为空");
		}else if (!phone.test($("#phone").val())) {
			$("#phone1").text("格式不正确");
			return false;
		}
		// emial
		if($.trim($("#email").val())==""){
			$("#email1").text("不能为空");
		}else if (!email.test($("#email").val())) {
			$("#email1").text("格式不正确");
			return false;
		}
		// 内容
		if ($.trim($("#content").val()) == "") {
			$("#content1").text("不能为空");
			return false;
		}
		// 验证码
		if ($.trim($("#validateCode").val()) == "") {
			$("#validateCode1").text("不能为空");
			return false;
		}else if (!verifyCode.validate($("#validateCode").val())) {
			$("#validateCode1").text("验证码错误");
			return false;
		}
		return true;
	};
	
	
});



