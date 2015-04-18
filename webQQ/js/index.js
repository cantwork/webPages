$(function(){
	/*qq面板bar*/
	$(".chat").click(function(){
		$(this).parent().parent().parent().children().removeClass("chose");
		$(this).parent().parent().parent().find("#list-1").addClass("chose");
		$(this).next().children().css("background","linear-gradient(#555,#222)");
		$(this).children().css("background","#333");
		$(this).next().children().find(".icon").css("background-image",'url("image/contact.png")');
		$(this).children().find(".icon").css("background-image",'url("image/chat_chose.png")');
	});
	$(".contact").click(function(){
		$(this).parent().parent().parent().children().removeClass("chose");
		$(this).parent().parent().parent().find("#list-2").addClass("chose");
		$(this).prev().children().css("background","linear-gradient(#555,#222)");
		$(this).children().css("background","#333");
		$(this).prev().children().find(".icon").css("background-image",'url("image/chat.png")');
		$(this).children().find(".icon").css("background-image",'url("image/contact_chose.png")');
	});

	/*联系人bar*/
	$(".memberTab-friend").click(function(){
		$(this).parent().next().children().removeClass("selected");
		$(this).parent().next().find(".memberTabBody-friend").addClass("selected");
	});
	$(".memberTab-group").click(function(){
		$(this).parent().next().children().removeClass("selected");
		$(this).parent().next().find(".memberTabBody-group").addClass("selected");
	});
	$(".memberTab-discuss").click(function(){
		$(this).parent().next().children().removeClass("selected");
		$(this).parent().next().find(".memberTabBody-discuss").addClass("selected");
	});
	/*联系人bar下拉*/
	$(".list-group-title1").click(function(){
		$(this).next().toggleClass("current");
		$(this).toggleClass("list-group-title-click");
	});
	$(".list-group-title2").click(function(){
		$(this).parent().next().children().children().next().removeClass("current");
		$(this).next().toggleClass("current");
		$(this).toggleClass("list-group-title-click");
	});

	/*点击联系人弹出对话窗*/
	$(".list-item").click(function(){
		var memberId =$(this).attr("memberId");
		var chatId ="chat" + memberId;
		if($(this).attr("isOpen") == "true"){
			$(".chatBox").css("z-index","10");
			$("#" + chatId).css("z-index","11");
			return;
		}
		$(this).attr("isOpen","true");
		var memberName = $(this).attr("memberName");
		var html="";
		html +='	<div class="chatBox" id="'+chatId+'">';
		html +='		<div class="boxhead">';
		html +='			<div class="btnMore">';
		html +='				<span class="btnMore-img"></span>';
		html +='			</div>';
		html +='			<div class="memberName">'+memberName+'</div>';
		html +='			<div class="btnClose" memberAId="member'+memberId+'" chatId="'+chatId+'">关闭</div>';
		html +='		</div>';
		html +='		<div class="boxMain">';

		/*html +='			<div class="chat-content-list">';
		html +='				<img src="image/me.jpg">';
		html +='				<p class=chat-nick>腾讯</p>';
		html +='				<p class=chat-content>'+  $(".shuru").val() +'</p>';
		html +='			</div>';*/

		html +='		</div>';
		html +='		<div class="boxBar">';
		html +='			<div class="btnFace"></div>';
		html +='			<textarea class="shuru"></textarea>';
		html +='			<div class="btnSend btnSendToChat">发送</div>';
		html +='		</div> ';
		html +='	</div>';
		$("body").append(html);

		$(".btnClose").click(function(){
		var closeId = $(this).attr("chatId")
		$("#" + closeId).remove();
		var memberAid =$(this).attr("memberAId")
		$("#" + memberAid).attr("isOpen","false");
		});

		$(".btnSend").click(function(){
		var html="";
		html +='		<div class="chat-content-list">';
		html +='			<img src="image/me.jpg">';
		html +='			<p class=chat-nick>腾讯</p>';
		html +='			<p class=chat-content>'+ $(".shuru").val() +'</p>';
		html +='		</div>';	
		
		$(".boxMain").append(html);
		});

		var msgJsId = $(this).children().next().next().attr("msg")
		$(".btnSendToChat").click(function(){
		var html="";
		html +='	'+ $(".shuru").val()+' ';
		$("#msg"+memberId ).append(html);
		
		});
		
		
	});

});