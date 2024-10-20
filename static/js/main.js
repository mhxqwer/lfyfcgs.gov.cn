// 首页
var mySwiper = new Swiper('.swiperIndex', { //轮播图
	loop: true,
	spaceBetween: -30,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true, //点击页码可以切换轮播图片
	},
});



$(function() {
	var tab1 = $(".tab_menu li");
	tab1.click(function() {
		$(this).addClass("selected1").siblings().removeClass("selected1");
		var index = tab1.index(this);
		$(".tab_box > div").eq(index).show().siblings().hide();
	});

});

$(function() {
	var tab2 = $(".tab_menu2 li");
	tab2.click(function() {
		$(this).addClass("selected2");
		$(this).siblings().removeClass("selected2");
		var index = tab2.index(this);
		$(".tab_box2 > div").eq(index).show().siblings().hide();
	});
});


// 右侧导航按钮
$(".navBtn").click(function() {
	$(".rightNav").show();
});
$(".close").click(function() {
	$(".rightNav").hide();
});


// 列表页
$(function() {

	let navScroll = new Swiper(".h-nav .swiper", {
		freeMode: true,
		slidesPerView: "auto",
		freeModeMomentumRatio: 0.5,
		on: {
			//当前swiper-slide点击时触发事件
			click: function(e) {
				let thisWidth = this.clickedSlide.offsetWidth;
				let thisLeft = this.clickedSlide.offsetLeft;
				let offsetX = this.width / 2 - thisLeft - thisWidth / 2;
				//偏移量在1/2视口内时，容器不发生偏移
				if (offsetX > 0) {
					offsetX = 0;
				}
				//offsetX小于容器最大偏移时，让偏移量等于容器最大的偏移量
				else if (offsetX < this.maxTranslate()) {
					offsetX = this.maxTranslate();
				}
				//设置容器的过渡动画
				this.setTransition(300);
				this.setTranslate(offsetX);
			}
		}
	});
});

$(function() {
	var tabList = $(".swiper-wrapper div");
	tabList.click(function() {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		var index = tabList.index(this);
		$(".tab-box3 > div").eq(index).show().siblings().hide();
	});
});




// 索引页
$(function() {
	var tabList2 = $(".swiper-wrapper div");
	tabList2.click(function() {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		var index = tabList2.index(this);
		$(".tab-box4 > div").eq(index).show().siblings().hide();
	});
});

