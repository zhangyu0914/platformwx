(function (doc, win) {
    var docEl = doc.documentElement, //获取html标签
		//orientationchange方向改变事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
			//当前设备视口宽度
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth /375) + 'px';//375为手动改的，是设计师给的设计图以哪个手机为基准，即写那个手机的宽度
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
