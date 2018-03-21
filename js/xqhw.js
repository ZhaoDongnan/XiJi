$(".banner").find(".content-block-inner").find(".bannerbox").on("mouseenter", function() {
	$(this).Carousel({
		left: $(this).find(".prev"),
		right: $(this).find(".next"),
		img: $(this).find(".imgbox").children("ul").children("div"),
		autoPlay: false,
		width: 510
	});
})

onscroll = onload = function() {
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrolltop >= $(".banner").find(".content-block").eq(0).offset().top - 100) {
		$(".right-navslide").css({
			display: "block"
		})
	} else {
		$(".right-navslide").css({
			display: "none"
		})
	}

	if(scrolltop >= $(".banner").find(".content-block").eq(0).offset().top && scrolltop < $(".banner").find(".content-block").eq(1).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(0).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(1).offset().top && scrolltop < $(".banner").find(".content-block").eq(2).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(1).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(2).offset().top && scrolltop < $(".banner").find(".content-block").eq(3).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(2).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(3).offset().top && scrolltop < $(".banner").find(".content-block").eq(4).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(3).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(4).offset().top && scrolltop < $(".banner").find(".content-block").eq(5).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(4).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(5).offset().top && scrolltop < $(".banner").find(".content-block").eq(6).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(5).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(6).offset().top && scrolltop < $(".banner").find(".content-block").eq(7).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(6).addClass("active").siblings().removeClass("active").parent().css({
			top: 0
		})
		$(".handle").css({
			top: 0
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(7).offset().top && scrolltop < $(".banner").find(".content-block").eq(8).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(7).addClass("active").siblings().removeClass("active").parent().css({
			top: -60
		})
		$(".handle").css({
			top: 60
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(8).offset().top && scrolltop < $(".banner").find(".content-block").eq(9).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(8).addClass("active").siblings().removeClass("active").parent().css({
			top: -90
		})
		$(".handle").css({
			top: 90
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(9).offset().top && scrolltop < $(".banner").find(".content-block").eq(10).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(9).addClass("active").siblings().removeClass("active").parent().css({
			top: -120
		})
		$(".handle").css({
			top: 120
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(10).offset().top && scrolltop < $(".banner").find(".content-block").eq(11).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(10).addClass("active").siblings().removeClass("active").parent().css({
			top: -150
		})
		$(".handle").css({
			top: 150
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(11).offset().top && scrolltop < $(".banner").find(".content-block").eq(12).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(11).addClass("active").siblings().removeClass("active").parent().css({
			top: -180
		})
		$(".handle").css({
			top: 180
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(12).offset().top && scrolltop < $(".banner").find(".content-block").eq(13).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(12).addClass("active").siblings().removeClass("active").parent().css({
			top: -210
		})
		$(".handle").css({
			top: 210
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(13).offset().top && scrolltop < $(".banner").find(".content-block").eq(14).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(13).addClass("active").siblings().removeClass("active").parent().css({
			top: -240
		})
		$(".handle").css({
			top: 240
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(14).offset().top && scrolltop < $(".banner").find(".content-block").eq(15).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(14).addClass("active").siblings().removeClass("active").parent().css({
			top: -270
		})
		$(".handle").css({
			top: 270
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(15).offset().top && scrolltop < $(".banner").find(".content-block").eq(16).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(15).addClass("active").siblings().removeClass("active").parent().css({
			top: -310
		})
		$(".handle").css({
			top: 310
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(16).offset().top && scrolltop < $(".banner").find(".content-block").eq(17).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(16).addClass("active").siblings().removeClass("active").parent().css({
			top: -340
		})
		$(".handle").css({
			top: 340
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(17).offset().top && scrolltop < $(".banner").find(".content-block").eq(18).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(17).addClass("active").siblings().removeClass("active").parent().css({
			top: -370
		})
		$(".handle").css({
			top: 370
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(18).offset().top && scrolltop < $(".banner").find(".content-block").eq(19).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(18).addClass("active").siblings().removeClass("active").parent().css({
			top: -400
		})
		$(".handle").css({
			top: 400
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(19).offset().top && scrolltop < $(".banner").find(".content-block").eq(20).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(19).addClass("active").siblings().removeClass("active").parent().css({
			top: -430
		})
		$(".handle").css({
			top: 420
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(20).offset().top && scrolltop < $(".banner").find(".content-block").eq(21).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(20).addClass("active").siblings().removeClass("active").parent().css({
			top: -460
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(21).offset().top && scrolltop < $(".banner").find(".content-block").eq(22).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(21).addClass("active").siblings().removeClass("active").parent().css({
			top: -490
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(22).offset().top && scrolltop < $(".banner").find(".content-block").eq(23).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(22).addClass("active").siblings().removeClass("active").parent().css({
			top: -520
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(23).offset().top && scrolltop < $(".banner").find(".content-block").eq(24).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(23).addClass("active").siblings().removeClass("active").parent().css({
			top: -550
		})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(24).offset().top && scrolltop < $(".banner").find(".content-block").eq(25).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(24).addClass("active").siblings().removeClass("active").parent().css({})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(25).offset().top && scrolltop < $(".banner").find(".content-block").eq(26).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(25).addClass("active").siblings().removeClass("active").parent().css({})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(26).offset().top && scrolltop < $(".banner").find(".content-block").eq(27).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(26).addClass("active").siblings().removeClass("active").parent().css({})
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(27).offset().top && scrolltop < $(".banner").find(".content-block").eq(28).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(27).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(28).offset().top && scrolltop < $(".banner").find(".content-block").eq(29).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(28).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(29).offset().top && scrolltop < $(".banner").find(".content-block").eq(30).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(29).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(30).offset().top && scrolltop < $(".banner").find(".content-block").eq(31).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(30).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(31).offset().top && scrolltop < $(".banner").find(".content-block").eq(32).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(31).addClass("active").siblings().removeClass("active")
	}
	if(scrolltop >= $(".banner").find(".content-block").eq(32).offset().top) {
		$(".right-navslide").children(".right-navslide-inner").find("li").eq(32).addClass("active").siblings().removeClass("active")
	}

	$(".right-navslide-inner").find("li").on("click", function() {
		scrolltop = $(".banner").find(".content-block").eq($(this).index()).offset().top;
		document.documentElement.scrollTop = document.body.scrollTop = scrolltop;
	})
}

$(".right-navslide").on("mouseenter", function() {
	var handle = document.getElementsByClassName("handle")[0];
	handle.onmousedown = function() {
		document.onmousemove = function(eve) {
			var e = eve || window.event;
			if(e.preventDefault) {
				e.preventDefault();
			} else if(e.returnValue || e.returnValue == undefined) {
				e.returnValue = false;
			} else {
				return false;
			}
			var top = e.pageY - $(".right-navslide-bar").offset().top - ($(".handle").height() / 2);
			if(top < 0) {
				top = 0
			}
			if(top > $(".right-navslide-bar").height() - $(".handle").height() - ($(".handle").height() / 2)) {
				top = $(".right-navslide-bar").height() - $(".handle").height() - ($(".handle").height() / 2)
			}
			$(".handle").css({
				top: top
			})
			$(".right-navslide-inner").children("ul").css({
				top: -top
			})
		}
		document.onmouseup = function(eve) {
			document.onmousemove = null;
		}
	}
})