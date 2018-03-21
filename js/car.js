$.ajax({
	url: "http://localhost/XiJi/data/json.json",
}).then(function(res) {
	var str = document.cookie.split("; ")
	var arr = []
	for(i = 0; i < str.length; i++) {
		arr.push(str[i].split("="))
	}
	var str = ""
	for(k = 0; k < arr.length; k++) {
		for(let i in res) {
			for(j = 0; j < res[i].length; j++) {
				if("car" + res[i][j].index == arr[k][0]) {
					str +=
						`<li>
						<span>
							<img src="${res[i][j].img}"/>
						</span>
						<span>${res[i][j].tit}</span>
						<span>${res[i][j].xj}</span>
						<span>${res[i][j].market}</span>
						<span>${res[i][j].self}</span>
						<span date-id="${'car'+res[i][j].index}">${res[i][j].shipping}</span>
						<span><input type="button" value="删除" class="delete"/></span>
					</li>`
				}
			}
		}
	}
	if(str != "") {
		$(".banner").find("ul").eq(1).html(str)
	}
	$(".banner").find(".delete").on("click", function() {
		$(this).parent().parent().remove();
		var d = new Date();
		d.setDate(d.getDate() - 10);
		document.cookie = $(this).parent().prev().attr("date-id") + "=admin;expires=" + d;
	})
});