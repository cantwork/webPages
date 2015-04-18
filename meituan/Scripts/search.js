$(document).ready(function () {
    $(function () {
        $("body").append("<div id='main_bg'/>");
        $("#main_bg").append("<img src='../image/search/bg.jpg' id='bigpic'>");
        cover();
        $(window).resize(function () {
            cover();
        });
    });
    function cover() {
        var win_width = $(window).width();
        var win_height = $(window).height();
        $("#bigpic").attr({ width: win_width, height: win_height });
    }
    
});