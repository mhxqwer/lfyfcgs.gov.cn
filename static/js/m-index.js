if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
		//显示手机页头,对适配页面进行处理
	if($('meta[name="viewport"]').length > 0)
	$(document).ready(function(){		
		var viewport = $('meta[name=viewport]');
		  if (viewport.length) {
		    viewport.attr('content', 'width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
		  }
		//去掉搜索框的浮动
		$(".site-search").removeClass("fn-right");
		$(".header .site-warp img").removeClass("fn-left")
	//修改logo
//		var domain = document.domain;
//		$(".site-warp img").attr("src","http://"+domain+"/material/images/M-logo.png")
	
	});
}