(function() {
	var onoff = true;
	$(".register").find(".country").on("click", function() {
		if(onoff) {
			$(this).children("div").slideDown(300).css({
				border: "solid 1px red"
			}).end().children("i").eq(0).html("&#xe65b;").parent().css({
				border: "solid 1px red"
			}).children("lable").css({
				color: "red"
			})
			onoff = false;
		} else {
			$(this).children("div").slideUp(300).css({
				border: "nomarl"
			}).end().children("i").eq(0).html("&#xe65d;").parent().css({
				border: "nomarl"
			}).children("lable").css({
				color: ""
			})
			onoff = true;
		}
	})
	$(".register").on("mouseleave", function() {
		setTimeout(() => {
			$(this).find(".country").children("div").slideUp(300).css({
				border: "nomarl"
			}).end().children("i").eq(0).html("&#xe65d;").parent().css({
				border: "nomarl"
			}).children("lable").css({
				color: ""
			})
			onoff = true;
		}, 1000)
	})
	$(".register").find(".country").children("div").children("ul").children("li").on("click", function() {
		onoff = false;
		$(this).parent().parent().parent().children("i").html($(this).children("i").html())
		$(this).parent().parent().parent().children("span").html($(this).children("span").html())
		if($(this).parent().parent().parent().children("span").html() != "China") {
			$(".register").find(".otherUser").css({
				display: "block"
			})
			$(".register").find(".chinaUser").css({
				display: "none"
			})
		} else {
			$(".register").find(".chinaUser").css({
				display: "block"
			})
			$(".register").find(".otherUser").css({
				display: "none"
			})
		}
	})
})();

(function() {
	var onoff = true;
	$(".register").find("form").children("p").on("click", function() {
		for(i = 0; i < $(".register").find("form").children("p").length; i++) {
			if($(".register").find("form").children("p").eq(i).children(".x-input").val() == "") {
				$(".register").find("form").children("p").eq(i).children(".x-input").css({
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
		$(".register").find("form").children("p").on("mouseleave", function() {
			onoff = false;
			if($(".register").find(".chinaUser").children("p").eq(0).children(".x-input").val() != "") {
				var phone = $(".register").find(".chinaUser").children("p").eq(0).children(".x-input").val()
				var phonereg = /^[1-9][0-9]{10}$/g;
				if(phonereg.test(phone)) {
					$(".register").find(".chinaUser").children("p").eq(0).children("span").eq(1).css({
						display: "none"
					})
				} else {
					$(".register").find(".chinaUser").children("p").eq(0).children("span").eq(1).css({
						display: "block"
					})
				}
			}
			if($(".register").find(".otherUser").children("p").eq(0).children(".x-input").val() != "") {
				var email = $(".register").find(".otherUser").children("p").eq(0).children(".x-input").val()
				var emailreg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/g
				if(emailreg.test(email)) {
					$(".register").find(".otherUser").children("p").eq(0).children("span").eq(1).css({
						display: "none"
					})
				} else {
					$(".register").find(".otherUser").children("p").eq(0).children("span").eq(1).css({
						display: "block"
					})
				}
			}
		})
	})

	$("body").on("click", function() {
		if(!onoff) {
			for(i = 0; i < $(".register").find("form").children("p").length; i++) {
				if($(".register").find("form").children("p").eq(i).children(".x-input").val() == "") {
					$(".register").find("form").children("p").eq(i).children(".x-input").css({
						border: "solid 1px #e4e4e4"
					}).next().animate({
						top: 17
					}, 200)
				}
			}
			if($(".register").find(".chinaUser").children("p").eq(0).children(".x-input").val() != "") {
				var phone = $(".register").find(".chinaUser").children("p").eq(0).children(".x-input").val()
				var phonereg = /^[1-9][0-9]{10}$/g;
				if(phonereg.test(phone)) {
					$(".register").find(".chinaUser").children("p").eq(0).children("span").eq(1).css({
						display: "none"
					})
				} else {
					$(".register").find(".chinaUser").children("p").eq(0).children("span").eq(1).css({
						display: "block"
					})
				}
			}
			if($(".register").find(".otherUser").children("p").eq(0).children(".x-input").val() != "") {
				var email = $(".register").find(".otherUser").children("p").eq(0).children(".x-input").val()
				var emailreg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/g
				if(emailreg.test(email)) {
					$(".register").find(".otherUser").children("p").eq(0).children("span").eq(1).css({
						display: "none"
					})
				} else {
					$(".register").find(".otherUser").children("p").eq(0).children("span").eq(1).css({
						display: "block"
					})
				}
			}
		}
	})
})()

$(".register").find("form").children("p").children(".yanzheng").on("click", function() {
	var num = "";
	for(i = 0; i < 6; i++) {
		num += Math.round(Math.random() * 9)
	}
	$(this).parent().children(".x-input").val(num)
})

$(".register").find("form").children("p").children("input[type=button]").on("click", function() {
	$.ajax({
		type: "post",
		url: "http://datainfo.duapp.com/shopdata/userinfo.php",
		data: {
			status: "register",
			userID: $(".register").find("form").find(".username").val(),
			password: $(".register").find("form").find(".password").val(),
		},
		success: function(a) {
			if(a == 0) {
				alert("用户名重名")
			}
			if(a == 1) {
				alert("注册成功");
				window.location.href="http://localhost/XiJi/html/loading"
			}
			if(a == 2) {
				alert("数据库报错")
			}
		},
	});
})