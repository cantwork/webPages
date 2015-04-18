$(function(){
	$(".importantNewsTitle").mouseover(function(){
		$(this).addClass("currentContent");
		var nextA = $(this).next();
		$(nextA).removeClass("currentContent");
		$(this).parent().parent().next().next().hide();
		$(this).parent().parent().next().show();
	});
	$(".jiangsuNewsTitle").mouseover(function(){
		$(this).addClass("currentContent");
		var prevA = $(this).prev();
		$(prevA).removeClass("currentContent");
		$(this).parent().parent().next().hide();
		$(this).parent().parent().next().next().show();
	});
	


	$(".todayPlayT").mouseover(function(){
		$(this).addClass("currentContent");
		var nextB = $(this).next();
		$(nextB).removeClass("currentContent");
		$(this).parent().next().next().hide();
		$(this).parent().next().show();
	});
	$(".movieTvT").mouseover(function(){
		$(this).addClass("currentContent");
		var prevB = $(this).prev();
		$(prevB).removeClass("currentContent");
		$(this).parent().next().hide();
		$(this).parent().next().next().show();
	});



	$(".lm2R3T11").mouseover(function(){
		$(this).next().show();
	});

});