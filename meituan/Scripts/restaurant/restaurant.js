$(function () {
    var allPrice = 0;
    $(".i-addBtn").click(function () {
        $(".carMain").removeClass("hide");
        $(".carEmpty").addClass("hide");
        $(".carAmount").removeClass("hide");
        $(".carNeedmore").removeClass("hide");
        var id = $(this).attr("id");
        var newId = "item" + id;
        var foodName = $(this).parent().parent().find(".food-name").text();
        var onePrice = $(this).prev().attr("value");
        var addCount = $(this).attr("value");
        addCount++;
        $(this).attr("value", addCount);
        if (addCount <= 1) {
            var html = "";
            html += '<tr id=' + newId + ' class="item">';
            html += '    <td class="item-name">' + foodName + '</td>';
            html += '    <td class="item-count">';
            html += '        <a class="item-minus">-</a>';
            html += '        <input class="item-countNu"  value=' + addCount + '>';
            html += '        <a class="item-add addNormal">+</a>';
            html += '    </td>';
            html += '    <td class="item-price" value=' + onePrice + '>¥' + onePrice + '/份</td>';
            html += '</tr>';
            $(".car-list").append(html);

        }
        else if (addCount > 1) {
            $("#" + newId).find(".item-count").find(".item-countNu").attr("value", addCount);
        }
//        $(".item-minus").click(function () {
//            var count = $(this).next().attr("value");
//            addCount--;
//            $(this).next().attr("value", addCount);
//        });


        allPrice = parseFloat(allPrice) + parseFloat(onePrice);
        $(".carAmount").html("共" + allPrice + "元");
        var deliveryPrice = $(".delivery-min-fee").attr("value");
        var needMorePrice = deliveryPrice - allPrice;
        if (needMorePrice > 0) {
            $(".carNeedmore").html("还差¥" + needMorePrice + "起送");
        }
        else {
            $(".carNeedmore").addClass("hide");
            $(".carSubmit").removeClass("hide");
        }


        $(".clear-car").click(function () {
            allPrice = 0;
            $(".i-addBtn").attr("value", "0");
            $(".car-list").html("");
            $(".carEmpty").removeClass("hide");
            $(".carMain").addClass("hide");
            $(".carAmount").addClass("hide");
            $(".carNeedmore").addClass("hide");
            $(".carSubmit").addClass("hide");
        });
	$(".carSubmit").click(function () {
	    window.location="order.html"
        });
    });




})
