$.ajax({
	url: "http://localhost/XiJi/data/json.json",
}).then(function(res) {
	var tzbyres = res.tzby;
	var rmdpres = res.rmdp;
	tzby(tzbyres);
	rmdp(rmdpres);
});

function tzby(res) {
	var str = ""
	for(i = 0; i < res.length; i++) {
		str +=
			`<li>
			<div>
				<div>
					<img src="${res[i].img}"/>
					<div class="txt-box">
						<p class="price-xj">${res[i].xj}</p>
						<p class="price-market">${res[i].market}</p>
					</div>
					<p class="tit-box">${res[i].tit}</p>
					<div class="tag-box">
						<span class="self">${res[i].self}</span>
						<span class="shipping">${res[i].shipping}</span>
					</div>
					<a data-id="${res[i].index}">立即选购</a>
				</div>
			</div>
		</li>`
	}
	$(".tzby").find(".goods-inner").html(str)
	tz();
}

function tz() {
	$(".banner").find(".goods-inner").find("li").on("click", function() {
		var str = document.cookie.split("; ")
		var arr = [];
		for(i = 0; i < str.length; i++) {
			arr.push(str[i].split("="))
		}
		for(i = 0; i < arr.length; i++) {
			var reg = /^[a-z]{3}\d+$/
			if(!reg.test(arr[i][0])) {
				var date = new Date();
				date.setDate(date.getDate() - 7)
				document.cookie = arr[i][0] + "=123;expires=" + date
			}
		}
		setcookie($(this).find("a").attr("data-id"), $(this).find("a").attr("data-id"), 7)
		window.location.href = "http://localhost/XiJi/html/spxq.html"
	});
}

function rmdp(res) {
	var str = ""
	for(i = 0; i < res.length; i++) {
		str +=
			`<li>
			<div>
				<div>
					<img src="${res[i].img}"/>
					<div class="txt-box">
						<p class="price-xj">${res[i].xj}</p>
						<p class="price-market">${res[i].market}</p>
					</div>
					<p class="tit-box">${res[i].tit}</p>
					<div class="tag-box">
						<span class="self">${res[i].self}</span>
						<span class="shipping">${res[i].shipping}</span>
					</div>
					<a data-id="${res[i].index}">立即选购</a>
				</div>
			</div>
		</li>`
	}
	$(".rmdp").find(".goods-inner").html(str)
	tz();
}

(function() {
	var bottom = 0;
	onscroll = onload = function() {
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop >= $(".helper").offset().top - 854) {
			bottom += 100;
			if(bottom >= 400) {
				bottom = 400
			}
			$(".rightslide").css({
				bottom: bottom + 60
			})
		} else {
			$(".rightslide").css({
				bottom: 60
			})
		}
	}
	$(".rightslide").find("li").eq(4).on("click", function() {
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
	$(".rightslide").find(".tz").on("click", function() {
		var top = $(".banner").children("div").eq($(this).index() - 1).offset().top;
		document.documentElement.scrollTop = document.body.scrollTop = top;
	})
})()