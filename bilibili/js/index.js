$(function(){
	$(".menuLi").hover(function(){
		
		$(this).find(".menuC").show();
	},function(){
		
		$(this).find(".menuC").hide();
	});

	
});