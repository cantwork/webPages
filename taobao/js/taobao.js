$(function(){
	/*顶部下拉菜单*/


	$(".navRight").hover(function(){
	 	$(this).find(".menuC").show();	
		
	},function(){
		$(this).find(".menuC").hide();
	});

	$(".menuCA").hover(function(){
		$(this).find(".menuCAA").css({"background-color":"#f5f5f5","color":"#666"});
	},function(){
		$(this).find(".menuCAA").css({"background-color":"","color":""});
	});
	//实现窗口滚动，搜索框不滚动 
	$(window).scroll(function () { 
		var top = $(this).scrollTop(); 
		if (top - 36 < 0) { 
		//浮动搜索框隐藏，淡入效果 
		$("#topScroll").hide();
		} 
		else { 
		$("#topScroll").fadeIn();

		$(".topScrolldrop").hover(function(){
			$(this).children().find(".topScrolldroplist").show();
		},function(){
			$(this).children().find(".topScrolldroplist").hide();
		});

		top = top + 40; 
		$("#topScroll").css("top",top);
		} 
	}); 
	/*关闭二维码*/
	$(".close-qr").click(function(){
		$(this).parent().parent().hide();
	});
	/*lm1右侧选项卡*/
	$("#publicNoticeT").mouseover(function(){
		$(this).parent().parent().next().children().find("publicNoticeC").show();
		$(".NoticeT ul li").removeClass("currentLable");
		$(this).addClass("currentLable");
	});
	$("#ruleT").mouseover(function(){
		$(this).parent().parent().next().children().find("ruleC").show();
		$(".NoticeT ul li").removeClass("currentLable");
		$(this).addClass("currentLable");
	});
	/*lm1右下图片跳动*/
	$(".j-mod").hover(function(){
			$(this).addClass("element-animation");
	},function(){
			$(this).removeClass("element-animation");
	});
	/*lm3右侧Hover显示下拉*/
	$(".faxian-goods-main").hover(function(){
		$(this).children().next().slideDown(200);
	},function(){
		$(this).children().next().slideUp(200);
	});
	/*lm3右侧换一批试试变色*/
	$(".change-others").hover(function(){
		$(this).children().addClass("change-s");
	},function(){
		$(this).children().removeClass("change-s");
	});

    /*lm3右下图片hover改变*/
    /*$(".wall-item img").hover(function(){
    	$(this).hide();
    	$(this).next().show();
    },function(){
    	$(this).next().hide();
    	$(this).show();
    });*/
	
	/*lm4hover事件*/
	$(".lm4-item-mid").hover(function(){
		$(this).children().children().next().find("en").addClass("enhover");
	},function(){
		$(this).children().children().next().children().removeClass("enhover");
	});





	/*幻灯片2*/
        $(".flashCButtonB").click(function(){
			contral2 = $(this).attr("picNumB");
			showImg2();
		});
		$(".lm1RCFlash2").hover(function(){
			clearInterval(flashOpen2);
		},function(){
			flashOpen2=setInterval("showImg2()",3000);
		});
		flashOpen2=setInterval("showImg2()",3000);

	/*幻灯片1*/
        var $banner=$('.banner');
        var $banner_ul=$('.banner-img');
        var $btn=$('.banner-btn');
        var $btn_a=$btn.find('a')
        var v_width=$banner.width();
        
        var page=1;
        
        var timer=null;
        var btnClass=null;

        var page_count=$banner_ul.find('li').length;//把这个值赋给小圆点的个数
        
        var banner_cir="<li class='selected' href='#'><a></a></li>";
        for(var i=1;i<page_count;i++){
                //动态添加小圆点
                banner_cir+="<li><a href='#'></a></li>";
                }
        $('.banner-circle').append(banner_cir);
        
        var cirLeft=$('.banner-circle').width()*(-0.2);
        $('.banner-circle').css({'marginLeft':cirLeft});
        
        $banner_ul.width(page_count*v_width);
        
        function move(obj,classname){
                //手动及自动播放
	        if(!$banner_ul.is(':animated'))
	        {
		                if(classname=='prevBtn')
		                {
		                    if(page==1)
		                    {
		                       $banner_ul.animate({left:-v_width*(page_count-1)});
		                       page=page_count; 
		                       cirMove();
		                    }
		                    else{
		                       $banner_ul.animate({left:'+='+v_width},"slow");
		                       page--;
		                       cirMove();
		                    }        
		                }
		                else
		                {
		                   if(page==page_count)
		                	{
		                      $banner_ul.animate({left:0});
		                      page=1;
		                      cirMove();
		                   	}
		                   else
		                   	{
		                      $banner_ul.animate({left:'-='+v_width},"slow");
		                      page++;
		                      cirMove();
		           			}
		                }
	        }
        }
        
        function cirMove(){
                //检测page的值，使当前的page与selected的小圆点一致
                $('.banner-circle li').eq(page-1).addClass('selected').siblings().removeClass('selected');
        }
        
        $banner.mouseover(function(){
                $btn.css({'display':'block'});
                clearInterval(timer);
                                }).mouseout(function(){
                $btn.css({'display':'none'});                
                clearInterval(timer);
                timer=setInterval(move,3000);
                                }).trigger("mouseout");//激活自动播放

        $btn_a.mouseover(function(){
                //实现透明渐变，阻止冒泡
                        $(this).animate({opacity:0.6},'fast');
                        $btn.css({'display':'block'});
                         return false;
                }).mouseleave(function(){
                        $(this).animate({opacity:0.3},'fast');
                        $btn.css({'display':'none'});
                         return false;
                }).click(function(){
                        //手动点击清除计时器
                        btnClass=this.className;
                        clearInterval(timer);
                        timer=setInterval(move,3000);
                        move($(this),this.className);
                });
                
                $('.banner-circle li').click(function(){
                	move();
                });
        $('.banner-circle li').live('click',function(){
                   var index=$('.banner-circle li').index(this);
                   $banner_ul.animate({left:-v_width*index},'slow');
                   page=index+1;
                   cirMove();
                });	

	

        

        
});




		var contral2 = 6;
    	function showImg2(){
			$(".lm1RCFlash2").css("background-image",'url("image/'+contral2+'.png")');
			$(".flashCButtonB").removeClass("chose");
			$("#fc"+contral2).addClass("chose");
			contral2++;
			if(contral2==12){
				contral2=6;
			}
		}
	




















