$(function () {
    $(".payUntil").click(function () {
        $(this).addClass("selected");
        $(".payOnline").removeClass("selected");
    })
    $(".payOnline").click(function () {
        $(this).addClass("selected");
        $(".payUntil").removeClass("selected");
    })
})