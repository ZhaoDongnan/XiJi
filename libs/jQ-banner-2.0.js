;
(function($) {
	"use strict";
	$.fn.banner = function(options) {
		this.LOCAL = {
			iPrev: options.img.length - 1,
			index: 0,
			width: options.width
		}
		var that = this;
		if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0) {
			options.left.on("click", () => {
				this.LOCAL.changeIndex("left");
				this.LOCAL.Move(this.LOCAL.index, this.LOCAL.iPrev, -1);
				this.LOCAL.active(this.LOCAL.index);
			})
			options.right.on("click", () => {
				this.LOCAL.changeIndex("right");
				this.LOCAL.Move(this.LOCAL.index, this.LOCAL.iPrev, 1);
				this.LOCAL.active(this.LOCAL.index);
			})
		}
		this.LOCAL.changeIndex = (dir) => {
			if(dir == "left") {
				if(this.LOCAL.index == 0) {
					this.LOCAL.index = options.img.length - 1
					this.LOCAL.iPrev = 0
				} else {
					this.LOCAL.index--;
					this.LOCAL.iPrev = this.LOCAL.index + 1
				}
			}
			if(dir == "right") {
				if(this.LOCAL.index == options.img.length - 1) {
					this.LOCAL.index = 0
					this.LOCAL.iPrev = options.img.length - 1
				} else {
					this.LOCAL.index++;
					this.LOCAL.iPrev = this.LOCAL.index - 1
				}
			}
		}
		this.LOCAL.Move = function(inow, iprev, num) {
			options.img.eq(inow).stop().animate({
				opacity:1,
				zIndex:2
			}).end().eq(iprev).stop().animate({
				opacity:0,
				zIndex:1
			})
		}
		this.LOCAL.active = (index) => {
			options.items.eq(index).css({
				background: "rgba(51,51,51,1)",
				color:"rgb(255,252,245)"
			}).parent().siblings().find("a").css({
				background: "rgba(232,231,231,1)",
				color:"black"
			})
		}
		if(typeof options.items == "object" && options.items.length != 0) {
			options.items.eq(0).css({
				background: "rgba(51,51,51,1)",
				color:"rgb(255,252,245)"
			})
			options.items.on("mouseenter", function() {
				that.LOCAL.iNext = $(this).parent().index();
				if(that.LOCAL.index > that.LOCAL.iNext) {
					that.LOCAL.Move(that.LOCAL.iNext, that.LOCAL.index, -1)
					that.LOCAL.index = that.LOCAL.iNext
				}
				if(that.LOCAL.index < that.LOCAL.iNext) {
					that.LOCAL.Move(that.LOCAL.iNext, that.LOCAL.index, 1)
					that.LOCAL.index = that.LOCAL.iNext
				}
				that.LOCAL.active(that.LOCAL.index);
			})
		}
		if(options.autoPlay == true || options.autoPlay == undefined) {
			this.LOCAL.timer = setInterval(() => {
				options.right.trigger("click")
			}, 2000)
			this.hover(() => {
				clearInterval(this.LOCAL.timer)
			}, () => {
				this.LOCAL.timer = setInterval(() => {
					options.right.trigger("click")
				}, 2000)
			})
		}
	}
})(jQuery)