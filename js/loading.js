(function() {
	$(".loading").find(".login-list").find("li").on("click", function() {
		$(this).addClass("active").siblings().removeClass("active")
		$(".loading").find(".user").css({
			display: "none"
		})
		$(".loading").find(".user").eq($(this).index()).css({
			display: "block"
		})
	})
})();

(function() {
	var onoff = true;
	$(".loading").find("form").children("p").on("click", function() {
		for(i = 0; i < $(".loading").find("form").children("p").length; i++) {
			if($(".loading").find("form").children("p").eq(i).children(".x-input").val() == "") {
				$(".loading").find("form").children("p").eq(i).children(".x-input").css({
					border: "solid 1px #e4e4e4"
				}).next().animate({
					top: 17
				}, 200)
			}
		}
		onoff = true;
		if(onoff) {
			$(this).children(".x-input").css({
				border: "solid 1px red"
			}).next().animate({
				top: -7
			}, 200)
		}
		$(".loading").find("form").children("p").on("mouseleave", function() {
			onoff = false;
		})
	})

	$("body").on("click", function() {
		if(!onoff) {
			for(i = 0; i < $(".loading").find("form").children("p").length; i++) {
				if($(".loading").find("form").children("p").eq(i).children(".x-input").val() == "") {
					$(".loading").find("form").children("p").eq(i).children(".x-input").css({
						border: "solid 1px #e4e4e4"
					}).next().animate({
						top: 17
					}, 200)
				}
			}
		}
	})
})()

$(".loading").find("form").children("p").children(".yanzheng").on("click", function() {
	var num = "";
	for(i = 0; i < 6; i++) {
		num += Math.round(Math.random() * 9)
	}
	$(this).parent().children(".x-input").val(num)
})

$(".loading").find(".zhanghao").children("p").children(".load").on("click", function() {
	$.ajax({
		type: "post",
		url: "http://datainfo.duapp.com/shopdata/userinfo.php",
		data: {
			status: "login",
			userID: $(".zhanghao").find(".username").val(),
			password: $(".zhanghao").find("input[type=password]").val(),
		},
		dataType: "json",
		success: function(a) {
			if(typeof a == "object") {
				alert("登录成功")
				window.location.href="http://localhost/XiJi/index.html"
			} else if(a == 0) {
				alert("用户名不存在")
			} else if(a == 2) {
				alert("用户名密码不符")
			}
		},
	});
})

$(".loading").find(".zhanghao").find(".zidong").on("click", function() {
	if($(".zhanghao").find(".username").val() != "" && $(".zhanghao").find(".password").val() != "") {
		setcookie("use", $(".zhanghao").find(".username").val(), 7)
		setcookie("pass", $(".zhanghao").find(".password").val(), 7)
	}
})
$(".zhanghao").find(".username").val(getcookie("use"))
$(".zhanghao").find(".password").val(getcookie("pass"))

$(".loading").find(".phone").children("p").children(".load").on("click", function() {
	$(".loading").find(".phone").find(".weizhuce").on("click", function() {
		$.ajax({
			type: "post",
			url: "http://datainfo.duapp.com/shopdata/userinfo.php",
			data: {
				status: "register",
				userID: $(".loading").find(".phone").find(".username").val(),
				password: $(".loading").find(".phone").find(".password").val(),
			},
			success: function(a) {
				if(a == 0) {
					alert("用户名重名")
				}
				if(a == 1) {
					alert("注册成功");
				}
				if(a == 2) {
					alert("数据库报错")
				}
			},
		});
	})
	$.ajax({
		type: "post",
		url: "http://datainfo.duapp.com/shopdata/userinfo.php",
		data: {
			status: "login",
			userID: $(".loading").find(".phone").find(".username").val(),
			password: $(".loading").find(".phone").find(".password").val(),
		},
		dataType: "json",
		success: function(a) {
			if(typeof a == "object") {
				alert("登录成功")
				window.location.href="http://localhost/XiJi/index.html"
			} else if(a == 0) {
				alert("用户名不存在")
			} else if(a == 2) {
				alert("用户名密码不符")
			}
		},
	});
})

$(".loading").find(".phone").find(".zidong").on("click", function() {
	if($(".phone").find(".username").val() != "" && $(".phone").find(".password").val() != "") {
		setcookie("usephone", $(".phone").find(".username").val(), 7)
		setcookie("passphone", $(".phone").find(".password").val(), 7)
	}
})
$(".phone").find(".username").val(getcookie("usephone"))
$(".phone").find(".password").val(getcookie("passphone"))

for(i = 0; i < $(".loading").find("form").children("p").length; i++) {
	if($(".loading").find("form").children("p").eq(i).children(".x-input").val() != "") {
		$(".loading").find("form").children("p").eq(i).children(".x-input").css({
			border: "solid 1px red"
		}).next().animate({
			top: -7
		}, 200)
	}
}