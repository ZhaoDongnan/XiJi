$(".banner").find(".top-block").find(".Carousel").banner({
	left: $(".banner").find(".top-block").find(".Carousel").find(".prev"),
	right: $(".banner").find(".top-block").find(".Carousel").find(".next"),
	items: $(".banner").find(".top-block").find(".Carousel").children(".items").find("a"),
	img: $(".banner").find(".top-block").find(".Carousel").children(".imgbox").children("img"),
	autoPlay: true,
	width: 1200
});

$(".banner").find(".main-block06").find(".Carousel").Carousel({
	left: $(".banner").find(".main-block06").find(".Carousel").find(".prev"),
	right: $(".banner").find(".main-block06").find(".Carousel").find(".next"),
	items: $(".banner").find(".main-block06").find(".Carousel").find(".items").find("a"),
	img: $(".banner").find(".main-block06").find(".Carousel").children(".imgbox").children("div"),
	autoPlay: true,
	width: 1140
});

(function() {
	var bottom = 0;
	onscroll = onload = function() {
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop >= $(".banner").find(".main-block04").offset().top + 900) {
			bottom += 100;
			if(bottom >= 400) {
				bottom = 400
			}
			$(".topic").css({
				bottom: bottom + 60
			})
		} else {
			$(".topic").css({
				bottom: 60
			})
		}

		$(".topic").find("img").eq(1).on("click", function() {
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
	}
})()