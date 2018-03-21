function move(obj, json, callback) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var onOff = true;
		for(var attr in json) {
			if(attr == "opacity") {
				var iNow = getStyle(obj, attr) * 100
			} else {
				var iNow = parseInt(getStyle(obj, attr))
			}
			var speed = (json[attr] - iNow) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(iNow != json[attr]) {
				onOff = false;
			}
			if(attr == "opacity") {
				obj.style[attr] = (iNow + speed) / 100
				obj.style.filter = "alpha(opacity=" + iNow + speed + ")"
			} else {
				obj.style[attr] = iNow + speed + "px"
			}
		}
		if(onOff) {
			clearInterval(obj.timer);
			if(callback) callback();
		}
	}, 30)

	function getStyle(ele, attr) {
		if(ele.currentStyle) {
			return ele.currentStyle[attr];
		} else {
			return getComputedStyle(ele, false)[attr];
		}
	}
};


function setcookie(name,value,time){
	var date = new Date();
	date.setDate(date.getDate()+time)
	document.cookie = name+"="+value+";expires="+date
}

function getcookie(name){
	var str = document.cookie;
	if(str == ""){
		return "";
	}else{
		var str1 = str.split("; ")
		var arr = [];
		for(i=0;i<str1.length;i++){
			arr.push(str1[i].split("="))
		}
		for(i=0;i<arr.length;i++){
			if(name == arr[i][0]){
				return arr[i][1];
			}
		}
	}
}
function removecookie(name){
	setCookie(name,123,-1)
}
