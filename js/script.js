$(".sel-box").on("click", function() {
	$(".top-mask-meng").stop().show().next().stop().show();
})
var onoff = true;
$(".top-mask").children("div").children("div").on("click", function() {
	if(onoff) {
		$(this).children("div").slideDown(300).end().children("i").eq(0).html("&#xe65b;")
		onoff = false;
	} else {
		$(this).children("div").slideUp(300).end().children("i").eq(0).html("&#xe65d;")
		onoff = true;
	}
})
$(".top-mask").on("mouseleave", function() {
	setTimeout(() => {
		$(this).children("div").children("div").children("div").slideUp(300).end().children("i").eq(0).html("&#xe65d;")
		onoff = true;
	}, 1000)
})
$(".top-mask").children("div").children("div").children("div").children("ul").children("li").on("click", function() {
	onoff = false;
	$(this).parent().parent().parent().children("i").html($(this).children("i").html())
	$(this).parent().parent().parent().children("span").html($(this).children("span").html())
	var hb = document.getElementsByClassName("div3")[0].children[1];
	if(hb.innerHTML == "CNY（￥）") {
		document.getElementsByClassName("price")[0].children[1].children[0].className = "cny"
	}
	if(hb.innerHTML == "USD（$）" || hb.innerHTML == "CAD（C$）") {
		document.getElementsByClassName("price")[0].children[1].children[0].className = "usd"
	}
	if(hb.innerHTML == "JPY（¥）" || hb.innerHTML == "HKD（H$）" || hb.innerHTML == "MOP（MOP$）" || hb.innerHTML == "TWD（NT$）" || hb.innerHTML == "NZD（NZ$）" || hb.innerHTML == "AUD（A$）") {
		document.getElementsByClassName("price")[0].children[1].children[0].className = "jpy"
	}
})

$(".top-mask").children("button").on("click", function() {
	$(this).parent().stop().hide().prev().stop().hide();
})
$(".top-mask").children(".clone").on("click", function() {
	$(this).parent().stop().hide().prev().stop().hide();
})

$(".top-right").children("ul").children("li").eq(0).hover(function() {
	$(this).children("span").slideDown(100)
}, function() {
	$(this).children("span").slideUp(100)
})

$(".load").hover(function() {
	$(this).stop().animate({
		height: "164px"
	}, 200).css({
		background: "#fff",
		border: "1px solid #ccc"
	})
}, function() {
	$(this).stop().animate({
		height: "37px"
	}, 200, function() {
		$(this).css({
			background: "",
			border: "none"
		})
	})
})
$(".car").hover(function() {
	$(this).children("div").slideDown(100).end().css({
		borderLeft: "1px solid #ccc",
		borderRight: "1px solid #ccc",
		borderTop: "1px solid #ccc",
	})
}, function() {
	$(this).children("div").slideUp(100).end().css({
		border: ""
	})
})

$(".fllist01-li").hover(function() {
	$(this).children(".sub-box").css({
		display: "block"
	})
}, function() {
	$(this).children(".sub-box").css({
		display: "none"
	})
});

$(".banner .content").banner({
	left: $(".banner").find(".prev"),
	right: $(".banner").find(".next"),
	items: $(".items").find("a"),
	img: $(".imgbox").children("img"),
	autoPlay: true,
	width: 1200
});

$(".notice").find(".tab-box").find("li").hover(function() {
	$(".notice").children(".content-box1").eq($(this).index()).css({
		display: "block"
	}).siblings(".content-box1").css({
		display: "none"
	})
})

$(".app-bottom-box").hover(function() {
	$(this).stop().animate({
		height: 221
	})
}, function() {
	setTimeout(() => {
		$(this).stop().animate({
			height: 41
		})
	}, 500)
})

$(".rmph-left-top").children(".tab-box").children("ul").children("li").on("mouseenter", function() {
	$(this).css({
		backgroundColor: " #fff",
		borderBottom: "solid 1px #fff",
		borderTop: "solid 1px red",
		color: "red"
	}).siblings().css({
		backgroundColor: "",
		borderBottom: "",
		borderTop: "solid 1px #EBEBEB",
		color: "#666666",

	})
	$(".rmph-left-top").children(".content-box").children("div").eq($(this).index()).css({
		display: "block"
	}).siblings().css({
		display: "none"
	})
})

$(".rmph").find(".imgbox").Carousel({
	left: $(".daynew-prev"),
	right: $(".daynew-next"),
	img: $(".rmph").find(".imgbox").children("ul").children("div"),
	autoPlay: true,
	width: 921
});

$(".jxhd").children(".tab-box").find("li").on("mouseenter", function() {
	$(this).css({
		backgroundColor: " #fff",
		borderTop: "solid 1px red",
		color: "red"
	}).siblings().css({
		background: "",
		borderTop: "",
		color: "#666666",
	})
	$(".jxhd").children(".shop-content").eq($(this).index()).css({
		zIndex: "1"
	}).siblings().css({
		zIndex: "0"
	})
})

$(".hw").find(".presellgoods").on("mouseenter", function() {
	$(this).find(".imgbox").Carousel({
		left: $(this).find(".hw-prev"),
		right: $(this).find(".hw-next"),
		img: $(this).find(".imgbox").children("ul").children("div"),
		autoPlay: false,
		width: 550
	});
});

(function() {
	var bottom = 0;
	onscroll = onload = function() {
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop >= $(".ad-special").offset().top) {
			$(".header-show").slideDown();
		} else {
			$(".header-show").slideUp();
		}

		if(scrolltop >= $(".banner").offset().top) {
			$(".right_navslide").find(".top-link").slideDown(300)
		} else {
			$(".right_navslide").find(".top-link").slideUp(300)
		}
		if(scrolltop >= $(".zphh").find(".content-item07").offset().top - 200) {
			bottom += 100;
			if(bottom >= 300) {
				bottom = 300
			}
			$(".right_navslide").css({
				bottom: bottom + 250
			})
		} else {
			$(".right_navslide").css({
				bottom: 200
			})
		}
	}
	$(".right_navslide").find("li").hover(function() {
		$(this).children("a").children("span").css({
			backgroundColor: "red"
		}).end().children("em").show()
	}, function() {
		$(this).children("a").children("span").css({
			backgroundColor: ""
		}).end().children("em").hide()
	})

	$(".right_navslide").find(".top-link").on("click", function() {
		clearInterval(this.timer);
		this.timer = setInterval(() => {
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
			if(scroll <= 0) {
				clearInterval(this.timer);
			} else {
				scroll = scroll - 200;
				document.documentElement.scrollTop = document.body.scrollTop = scroll;
			}
		}, 20);
	})

})()