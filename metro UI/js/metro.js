$(function(){
	
	$(".right").hover(function(){
		$(this).css("right","0px");
	},function(){
		$(this).css("right","-327px");
	});
	$(".hd_right1").click(function(){
		$(this).parent().parent().parent().parent().prev().css("right","0px");
	});
	$(".midA1-li").mouseover(function(){
		num = $(this).attr("num");
		
		showTxt();
	});
	setInterval("showTxt()",1000);
});
var num = 1;
function showTxt(){
		
		$(".midA1-li").removeClass("fade");
		$("#midA1-li"+num).addClass("fade");
		num++;
		if (num==5) {
			num=1;
}