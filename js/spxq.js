

$.ajax({
	url: "http://localhost/XiJi/data/json.json",
}).then(function(res) {
	var str = document.cookie.split("; ")
	var arr = []
	for(i = 0; i < str.length; i++) {
		arr.push(str[i].split("="))
	}
	for(k = 0; k < arr.length; k++) {
		for(let i in res) {
			for(j = 0; j < res[i].length; j++) {
				if(res[i][j].index == arr[k][0]) {
					var num =
						`<div class="product-side">
						<div class="product-side-top">
							<div class="meng"></div>
							<div class="movediv"></div>
							<img src="${res[i][j].img}"/>
						</div>
						<div class="large-box">
							<img src="${res[i][j].img}"/>
						</div>
						<div class="product-side-bottom">
							<span class="prev"><img src="http://img2.helper-sys.com/themes/ecstore/images/product_161107/pro_icon05.png"/></span>
							<ul>
								<li><img src="${res[i][j].img}"/></li>
							</ul>
							<span class="next"><img src="http://img2.helper-sys.com/themes/ecstore/images/product_161107/pro_icon06.png"/></span>
						</div>
					</div>
					<div class="product-main">
						<p class="icon-box">
							<img src="http://img1.helper-sys.com/image/381009e5f4fecf5305cd1cdc8b97e367ce20d0a1.jpg?1489388049#w"/>
							<span>${res[i][j].self}</span>
						</p>
						<h1>${res[i][j].tit}</h1>
						<div>
							<p>${res[i][j].tit}</p>
						</div>
						<ul>
							<li>
								<span>售价</span>
								<span class="price">${res[i][j].xj}</span>
								<span>${res[i][j].market}</span>
							</li>
							<li>
								<span>促销</span>
								<ul>
									<li>
										<span>【活动】</span>
										<span>家居日用一套包邮</span>
									</li>
									<li>
										<span>${res[i][j].shipping}</span>
										<span>本商品由袭击承担邮费</span>
									</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li>
								<span>配送</span>
							</li>
							<li>
								<span>日本</span>
								<span>至</span>
								<span>中国</span>
								<span>支持配送</span>
							</li>
						</ul>
						<ul>
							<li>
								<span>重量</span>
								<span>338g</span>
							</li>
						</ul>
						<div class="product-action">
							<ul>
								<li class="sl">
									<span>数量</span>
									<span>
										<a class="jj">-</a>
										<input type="text" value="1"/>
										<a class="add">+</a>
									</span>
								</li>
								<li>
									<p>请注意 包含此商品的订单预计7个工作日左右发出。</p>
								</li>
							</ul>
							<ul>
								<li>立即购买</li>
								<li class="car" data-id="${res[i][j].index}">加入购物车</li>
							</ul>
						</div>
					</div>`
					$(".banner").find(".product").html(num)
				}
			}
		}
	}
	$(".banner").find(".product-side-top").hover(function() {
		$(this).find(".movediv").css({
			display: "block"
		}).end().next().css({
			display: "block"
		})
		$(this).on("mousemove", function() {
			var left = event.offsetX - ($(this).find(".movediv").width() / 2)
			var top = event.offsetY - ($(this).find(".movediv").height() / 2)
			if(left < 0) {
				left = 0
			}
			if(left > $(this).width() - $(this).find(".movediv").width()) {
				left = $(this).width() - $(this).find(".movediv").width()
			}
			if(top < 0) {
				top = 0
			}
			if(top > $(this).height() - $(this).find(".movediv").height()) {
				top = $(this).height() - $(this).find(".movediv").height()
			}
			$(this).find(".movediv").css({
				left: left,
				top: top
			}).end().next().children("img").css({
				left: -left,
				top: -top
			})
		})
	}, function() {
		$(this).find(".movediv").css({
			display: "none"
		}).end().next().css({
			display: "none"
		})
	})
	$(".banner").find(".product-action").find(".jj").on("click", function() {
		if($(this).next().val() == 0) {
			$(this).next().val(0)
		} else {
			var sl = $(this).next().val();
			sl--;
			$(this).next().val(sl);
		}

	})
	$(".banner").find(".product-action").find(".add").on("click", function() {
		if($(this).prev().val() == 4) {
			$(this).prev().val(4)
		} else {
			var sl = $(this).prev().val();
			sl++;
			$(this).prev().val(sl);
		}

	})

	$(".banner").find(".car").on("click", function() {
		function setcookie(name, value, time) {
			var date = new Date();
			date.setDate(date.getDate() + time)
			document.cookie = name + "=" + value + ";expires=" + date
		}
		setcookie("car" + $(this).attr("data-id"), "car" + $(this).attr("data-id"), 7);
		window.location.href = "http://localhost/XiJi/html/car.html"
	})
});