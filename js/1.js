var i = 1;
var j = 0;
$(function() {
	pmwidth=window.innerWidth;
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("#collimg").css("height", "50%");
	} 
		if(pmwidth>1300){
			pmsize=pmwidth-1300+700;
			pmsises="-"+pmsize+"px";
			pmsiser=pmsize-950;
			pmsiser="-"+pmsiser+"px";
			$("#left").css("margin-left",""+pmsises+"");
			$("#right").css("margin-right",""+pmsiser+"");
		}
	function show() {
		if (i != 6)
			$("#collimg").css("background", "url(images/sys/" + i + ".jpg)");
			$("#collimg").css("background-size", "100% 100%");
		i++;
		if (i == 6)
			i = 1;
		$("#pagesum").text("" + i + "/5");
	}
	setInterval(show, 4000);
	$("#left").click(function() {
		for (;i== 1;) i = 6;
		i--;
		$("#collimg").css("background", "url(images/sys/"+i+".jpg)");
		$("#collimg").css("background-size", "100% 100%");
	});
	$("#pagesum").text(""+i+"/5");
	$("#right").click(function() {
		i++;
		for (;i== 6;) i= 1;
		$("#collimg").css("background", "url(images/sys/"+i+".jpg)");
		$("#collimg").css("background-size", "100% 100%");
	});

	function gundong() {
		j++;
		if (j == 1)
			$(".zixunkuang2").text("平昌冬运会服务器被黑");
		if (j == 2)
			$(".zixunkuang2").text("智能时代安全领域将有巨变");
		if (j == 3)
			$(".zixunkuang2").text("安全技术和投资的方向标来了|RSA");
		if (j == 4)
			$(".zixunkuang2").text("网络安全公司华顺信安全完成新一轮融资");
		if (j == 4)
			j = 0;
	}
	setInterval(gundong, 7000);
});
$(function() {
	$("#fuwulist1").mouseover(function() {
		$("#fuwulist1").css("width", "35%");
		$("#fuwulist1").css("height", "30%");
	});
	$("#fuwulist1").mouseout(function() {
		$("#fuwulist1").css("width", "30%");
		$("#fuwulist1").css("height", "25%");
	});
	$("#fuwulist2").mouseover(function() {
		$("#fuwulist2").css("width", "35%");
		$("#fuwulist2").css("height", "30%");
	});
	$("#fuwulist2").mouseout(function() {
		$("#fuwulist2").css("width", "30%");
		$("#fuwulist2").css("height", "25%");
	});
	$("#fuwulist3").mouseover(function() {
		$("#fuwulist3").css("width", "35%");
		$("#fuwulist3").css("height", "30%");
	});
	$("#fuwulist3").mouseout(function() {
		$("#fuwulist3").css("width", "30%");
		$("#fuwulist3").css("height", "25%");
	});
	$("#fuwulist4").mouseover(function() {
		$("#fuwulist4").css("width", "35%");
		$("#fuwulist4").css("height", "30%");
	});
	$("#fuwulist4").mouseout(function() {
		$("#fuwulist4").css("width", "30%");
		$("#fuwulist4").css("height", "25%");
	});
	$("#fuwulist5").mouseover(function() {
		$("#fuwulist5").css("width", "35%");
		$("#fuwulist5").css("height", "30%");
	});
	$("#fuwulist5").mouseout(function() {
		$("#fuwulist5").css("width", "30%");
		$("#fuwulist5").css("height", "25%");
	});
	$("#fuwulist6").mouseover(function() {
		$("#fuwulist6").css("width", "35%");
		$("#fuwulist6").css("height", "30%");
	});
	$("#fuwulist6").mouseout(function() {
		$("#fuwulist6").css("width", "30%");
		$("#fuwulist6").css("height", "25%");
	});
	$("#fuwulist7").mouseover(function() {
		$("#fuwulist7").css("width", "35%");
		$("#fuwulist7").css("height", "30%");
	});
	$("#fuwulist7").mouseout(function() {
		$("#fuwulist7").css("width", "30%");
		$("#fuwulist7").css("height", "25%");
	});
	$("#fuwulist8").mouseover(function() {
		$("#fuwulist8").css("width", "35%");
		$("#fuwulist8").css("height", "30%");
	});
	$("#fuwulist8").mouseout(function() {
		$("#fuwulist8").css("width", "30%");
		$("#fuwulist8").css("height", "25%");
	});
	$("#fuwulist9").mouseover(function() {
		$("#fuwulist9").css("width", "35%");
		$("#fuwulist9").css("height", "30%");
	});
	$("#fuwulist9").mouseout(function() {
		$("#fuwulist9").css("width", "30%");
		$("#fuwulist9").css("height", "25%");
	});
	$("#fuwulist10").mouseover(function() {
		$("#fuwulist10").css("width", "35%");
		$("#fuwulist10").css("height", "30%");
	});
	$("#fuwulist10").mouseout(function() {
		$("#fuwulist10").css("width", "30%");
		$("#fuwulist10").css("height", "25%");
	});
	$("#fuwulist11").mouseover(function() {
		$("#fuwulist11").css("width", "35%");
		$("#fuwulist11").css("height", "30%");
	});
	$("#fuwulist11").mouseout(function() {
		$("#fuwulist11").css("width", "30%");
		$("#fuwulist11").css("height", "25%");
	});
	
});