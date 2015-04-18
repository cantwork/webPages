$(function(){
	$(".logoMain").hover(function(){
		$(this).addClass("activeA");
		$(this).next().next().addClass("activeB");
	},function(){
		$(this).removeClass("activeA")
		$(this).next().next().removeClass("activeB");
	});
	$(".logoRight").hover(function(){
		$(this).addClass("activeA");
		$(this).prev().prev().addClass("activeB");
	},function(){
		$(this).removeClass("activeA")
		$(this).prev().prev().removeClass("activeB");
	});

	/*$(".search-left").click(function(){
		$(this).next().next().slideDown();
	});
	*/
	/*搜索bar点击下拉*/
	$(document).bind("click",function(e){ 
    	var target  = $(e.target); 
    	if(target.closest(".search-left").length == 0){ 
    	    $(".search-drop").slideUp(200); 
   		 } 
   		 else 
   		 { 
  	 	     $(".search-drop").slideDown(200); 
   		 } 
	});
	/*点文件夹show和hide*/
	$(".folder-title").click(function(){
		$(this).next().toggle();
		$(this).find(".folder-icon").toggleClass("folder-icon2");
	});
	$(document).bind("click",function(e){ 
    	var target  = $(e.target); 
    	if(target.closest(".creat-folder").length == 0 && target.closest(".NewFolder").length == 0){ 
    	    $(".NewFolder").hide(); 
   		 } 
   		 else 
   		 { 
  	 	     $(".NewFolder").show(); 
   		 } 
	});

	/*侧边栏hover*/
	$(".body-left").hover(function(){
		$(this).children().next().children().find(".folder-icon").show();
	},function(){
		$(this).children().next().children().find(".folder-icon").hide();
	});

	$(".recived-msg").click(function(){
		$(this).parent().find(".list").removeClass("current");
		$(this).addClass("current");
	});
	$(".junk-msg").click(function(){
		$(this).parent().find(".list").removeClass("current");
		$(this).addClass("current");
	});
	$(".draft").click(function(){
		$(this).parent().find(".list").removeClass("current");
		$(this).addClass("current");
	});
	$(".sent-msg").click(function(){
		$(this).parent().find(".list").removeClass("current");
		$(this).addClass("current");
	});
	$(".deleted-msg").click(function(){
		$(this).parent().find(".list").removeClass("current");
		$(this).addClass("current");
	});

	/*msg-list*/
	

	$(".msg-list ul li").hover(function(){
		$(this).children().find(".set-msg-icon1").removeClass("zhiding");
		$(this).children().find(".set-msg-icon1").addClass("zhidingH");
		$(this).children().find(".set-msg-icon2").addClass("shanchu");
		$(this).children().find(".set-msg-icon3").addClass("weidu");
	},function(){
		$(this).children().find(".set-msg-icon1").removeClass("zhidingH");
		$(this).children().find(".set-msg-icon1").addClass("zhiding");
		$(this).children().find(".set-msg-icon2").removeClass("shanchu");
		$(this).children().find(".set-msg-icon3").removeClass("weidu");
	});
	$(".set-msg-icon1").hover(function(){
		$(this).removeClass("zhidingH");
		$(this).addClass("zhidingHH");
	},function(){
		$(this).removeClass("zhidingHH");
		$(this).addClass("zhidingH");
	});
	$(".set-msg-icon2").hover(function(){
		$(this).removeClass("shanchu");
		$(this).addClass("shanchuH");
	},function(){
		$(this).removeClass("shanchuH");
		$(this).addClass("shanchu");
	});
	$(".set-msg-icon3").hover(function(){
		$(this).removeClass("weidu");
		$(this).addClass("weiduH");
	},function(){
		$(this).removeClass("weiduH");
		$(this).addClass("weidu");
	});

	$(".top-control input").click(function(){
		$(".msg-list ul li input").click();
		$(this).parent().parent().parent().prev().find(".work").find(".work-list").addClass("work-show");
	});

	$(".msg-list ul li input").click(function(){
		$(this).parent().toggleClass("msg-listbackColor");
		$(this).parent().parent().parent().parent().parent().prev().find(".work").find(".work-list").addClass("work-show");
		$(this).next().find(".sent-people-level").toggleClass("sent-people-level-icon");
		$(this).next().find(".sent-people-level").toggleClass("sent-people-level-iconHover");
	});

	$(".deleteMsg").click(function(){
		$(this).parent().parent().parent().next().find(".body-mid").find(".msg-list").children().find(".msg-listbackColor").remove();
		$(this).parent().parent().find(".work-show").addClass("work-s");
	});

	$(".current").hover(function(){
		$(this).css("background-color","#d5d5d5");
	},function(){
		$(this).css("background-color","#d5d5d5");
	});
});