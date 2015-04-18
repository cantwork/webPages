$(function () {
    $(".myOrder").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    })
    $(".homePage").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    })

    $(".foot-tab").click(function () {
        $(this).css({ "color": "#fff", "background": "#E4393C" });
        $(".rest-tab").css({ "color": "#000", "background": "#fff" });
    })
    $(".rest-tab").click(function () {
        $(this).css({ "color": "#fff", "background": "#E4393C" });
        $(".foot-tab").css({ "color": "#000", "background": "#fff" });
    })

    $(".footType li a").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    })
    $(".footType li a").click(function () {
        $(this).addClass("selected");
        $(this).parent().nextAll().children().removeClass("selected");
        $(this).parent().prevAll().children().removeClass("selected");
    })

    $(".chooseFilter a").click(function () {
        $(this).find(".checkbox").toggleClass("checked");
        $(this).find(".txt").toggleClass("checked");
    })

    $(".prices").hover(function () {
        $(".pricesDrop").show();
    }, function () {
        $(".pricesDrop").hide();
    })

    $(".restaurantAreaInner li").hover(function () {
        $(this).addClass("restaurantHover");
        $(this).find(".rest-bar").addClass("rest-barHover");
        $(this).find(".rest-like").show();
    }, function () {
        $(this).removeClass("restaurantHover");
        $(this).find(".rest-bar").removeClass("rest-barHover");
        $(this).find(".rest-like").hide();
    })
    $(".restaurant").click(function () {
	window.location="restaurant.html"
    })
    $(".register").click(function () {
	window.location="register.html"
    })
    $(".rest-like").hover(function () {
        $(this).addClass("rest-likeHover");
        $(".i-heart").addClass("rest-likeHover");
    }, function () {
        $(this).removeClass("rest-likeHover");
        $(".i-heart").removeClass("rest-likeHover");
    })


})