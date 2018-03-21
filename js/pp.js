var bottom = 0;
onscroll = onload = function() {
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrolltop >= $(".banner").offset().top) {
		$(".right_navslide").find(".top-link").slideDown(300)
	} else {
		$(".right_navslide").find(".top-link").slideUp(300)
	}
	if(scrolltop >= $(".banner").find("#X").offset().top - 200) {
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

	if(scrolltop >= $(".banner").find(".banner-inner").offset().top) {
		$(".banner").find(".banner-inner").children("div").eq(0).children("p").css({
			position: "fixed",
			top: 0
		})
	} else {
		$(".banner").find(".banner-inner").children("div").eq(0).children("p").css({
			position: "absolute",
			top: 0
		})
	}

	for(i = 0; i < $(".banner").find(".banner-inner").children("dl").length; i++) {
		if(scrolltop >= $(".banner").find(".banner-inner").children("dl").eq(i).offset().top - 110) {
			$(".banner").find(".banner-inner").children("div").eq(0).find("a").eq(i).addClass("active").siblings().removeClass("active")
		}
	}

	$(".banner").find(".banner-inner").children("div").eq(0).find("a").on("mouseenter", function() {
		$(this).addClass("active").siblings().removeClass("active");
		$(this).on("click", function() {
			scrolltop = $(".banner").find(".banner-inner").children("dl").eq($(this).index() - 1).offset().top - 90;
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop;
		})
	})
}