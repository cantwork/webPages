$(function(){
	/*搜索bar点击下拉*/
	$(document).bind("click",function(e){ 
    	var target  = $(e.target); 
    	if(target.closest(".search input").length == 0){ 
    	    $(".search-drop").hide(); 
   		 } 
   		 else 
   		 { 
  	 	     $(".search-drop").show(); 
   		 } 
	});
	$(".msgDiv").hover(function(){
		$(this).parent().find(".msg-drop").show();
		$(this).find(".m2").css({"background-color":"#fff"},{"border-bottom:":"0"});
	},function(){
		$(this).parent().find(".msg-drop").hide();
		$(this).find(".m2").css({"background-color":"#000"});
	});

	$(".current").hover(function(){
		$(this).css("background-color","#fafafa");
	},function(){
		$(this).css("background-color","#fafafa");
	});

	//实现滚动，好友圈fixed
	$(window).scroll(function () { 
		var top = $(this).scrollTop(); 
		if (top - 750 < 0) {
		$(".mm-L2").removeClass("fixed");
		} 
		else { 
		$(".mm-L2").addClass("fixed");

		
		} 
	}); 

	$(".mm-L2-2").hover(function(){
		$(this).children().children().next().find(".hovershow").show();
	},function(){
		$(this).children().children().next().find(".hovershow").hide();
	});

	$(document).bind("click",function(e){ 
    	var target  = $(e.target); 
    	if(target.closest(".search-people").length == 0){ 
    	    $(".search-people").css("border-color","#d9d9d9");
   		 } 
   		 else 
   		 { 
  	 	     $(".search-people").css("border-color","#ffa00a"); 
   		 } 
	});

	$(".blog-detail").hover(function(){
		$(this).children().next().next().children().next().find(".jubao").show();
		$(this).children().find(".nick-name").css("color","#0a8cd2");
	},function(){
		$(this).children().next().next().children().next().find(".jubao").hide();
		$(this).children().find(".nick-name").css("color","#000");
	});

	$(".repeat").hover(function(){
		$(this).children().next().find(".repeat-line-A").css("color","#0a8cd2");
	},function(){
		$(this).children().next().find(".repeat-line-A").css("color","#333");
	});

	$(".comment").click(function(){
		$(this).parent().parent().next().toggleClass("active");
	});

	$(".publish-input").click(function(){
		$(this).next().find(".btn-publish").removeClass("btn-publish1");
		$(this).next().find(".btn-publish").addClass("btn-publish2");
	});

	$(".btn-publish").click(function(){
		var html="";
		html+='<div class="small-blog sb-1">';
		html+='	<div class="head-photo">';
		html+='		<img class="head-face" src="image/mypic.jpg">';
		html+='		<div class="follow-btn">';
		html+='			<div class="jia">+</div>';
		html+='			<div class="guanzhu">关注</div>';
		html+='		</div>';
		html+='	</div>';
		html+='	<div class="blog-detail">';
		html+='		<div class="blogger">';
		html+='			<div class="nick-name">霸道总裁爱上市</div>';
		html+='			<a class="V" href=""></a>';
		html+='			<a class="level" href=""></a>';
		html+='			<a class="daka" href=""></a>';
		html+='		</div>';
		html+='		<div class="blog-content">';
		html+='			<div class="content-word">'+$(".publish-input").val()+'</div>';
		html+='			<img class="content-pic" src=""> ';
		html+='		</div>';
		html+='		<div class="blog-ft">';
		html+='			<div class="blog-ft-R">';
		html+='				<div class="icon_like"></div>';
		html+='				<a class="like">(131291)</a>';
		html+='				|';
		html+='				<a class="republish" >转发(5717)</a>';
		html+='				|';
		html+='				<a class="favorite">收藏</a>';
		html+='				|';
		html+='				<a class="comment" > 评论(28148)</a>';
		html+='			</div>';
		html+='			<div class="blog-ft-L">';
		html+='				<div class="publish-time">今天 00:14</div>';
		html+='				<span>来自</span>';
		html+='				<div class="publish-from">Android客户端  </div>';
		html+='				<div class="jubao">举报</div>';
		html+='			</div>';
		html+='		</div>';
		html+='	</div>';
		html+='</div>';
		$(".blog-area").append(html);
	});
	
	$(".repeat-btn").click(function(){
		var html="";
		html+='<div class="repeat-one">';
		html+='	<div class="repeat-L">';
		html+='		<img src="image/mypic.jpg">';
		html+='	</div>';
		html+='	<div class="repeat-R">';
		html+='		<div class="repeat-nick">霸道总裁爱上市</div>';
		html+='		 <a>:'+$(".repeat-box-input").val()+'(今天 00:16)</a>';
		html+='		<div class="repeat-ft">';
		html+='			<a class="huifu" >回复</a>';
		html+='			<div class="re-repeat-line">|</div>';
		html+='			<a class="like">(131291)</a>';
		html+='			<a class="icon_like"></a>';
		html+='		</div>';
		html+='	</div>';
		html+='</div>';
		$(".repeat-list").append(html);
	});

	/*$(".comment").click(function(){
		var html="";
		html+='<div class="repeat active">';
		html+='	<div class="repeat-box">';
		html+='		<input class="repeat-box-input">';
		html+='		<div class="repeat-bar">';
		html+='			<div class="repeat_icon_face"></div>';
		html+='			<input type="checkbox">';
		html+='			<a>同时转发到我的微博</a>';
		html+='			<div class="repeat-btn">评论</div>';
		html+='		</div>';
		html+='	</div>';
		html+='	<div class="repeat-line">';
		html+='		<a class="repeat-line-F">全部</a>';
		html+='		|';
		html+='		<a class="repeat-line-A">热门</a>';
		html+='		|';
		html+='		<a class="repeat-line-A">认证用户</a>';
		html+='		|';
		html+='		<a class="repeat-line-A">关注的人</a>';
		html+='		<a class="repeat-line-T">共28517条</a>';
		html+='	</div>';
		html+='	<div class="repeat-list">';
		html+='		<div class="repeat-one">';
		html+='			<div class="repeat-L">';
		html+='				<img src="image/10.jpg">';
		html+='			</div>';
		html+='			<div class="repeat-R">';
		html+='				<div class="repeat-nick">何呵呵2</div>';
		html+='				：所以你发这条微博是为了什么 (今天 00:16)';
		html+='				<div class="repeat-ft">';
		html+='					<a class="huifu" >回复</a>';
		html+='					<div class="re-repeat-line">|</div>';
		html+='					<a class="like">(131291)</a>';
		html+='					<a class="icon_like"></a>';
		html+='				</div>';
		html+='			</div>';
		html+='		</div>';
		html+='	</div>';
		html+='</div>';
		$(".blog-detail").append(html);
	});*/
});