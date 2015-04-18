$(function () {
    $(".contentInput").focus(function () {
        $(this).addClass("focus");
        $(this).removeClass("blur");
        $(this).next().hide();
    });
    $(".contentInput").blur(function () {
        $(this).removeClass("focus");
        $(this).addClass("blur");
        var inputContent = $(this).val();
        if (inputContent == "") {
            $(this).next().show();
        }
        else if (inputContent != "") {
            var mobileInputLength = $("#mobileInput").val().length;
            var mobileInput = $("#mobileInput").val();
            if (mobileInput != "" && (mobileInputLength < 11 || mobileInputLength > 11 || isNaN(mobileInput))) {
                //$("#mobileInput").next().show();
                $("#mobileInput").next().show();
                $("#mobileInput").next().text("请输入正确的11位手机号码");
            }
            else {
                $("#mobileInput").addClass("right");
                $("#mobileInput").next().hide();
            }

            var smsCodeInputLength = $("#smsCodeInput").val().length;
            var smsCodeInput = $("#smsCodeInput").val();
            if (smsCodeInput != "" && (smsCodeInputLength < 6 || smsCodeInputLength > 6)) {
                //$("#smsCodeInput").next().show();
                $("#smsCodeInput").next().show();
                $("#smsCodeInput").next().text("输入错误，请重新输入");
            }
            else {
                $("#smsCodeInput").addClass("right");
                $("#smsCodeInput").next().hide();
            }

            var createPwdLength = $("#createPwd").val().length;
            var createPwd = $("#createPwd").val();
            if (createPwd != "" && createPwdLength < 6) {
                //$("#createPwd").next().show();
                $("#createPwd").next().show();
                $("#createPwd").next().text("密码太短，至少6个字符");
            }
            else {
                $("#createPwd").addClass("right");
                $("#createPwd").next().hide();
            }

            var confirmPwd = $("#confirmPwd").val();
            if (confirmPwd != "" && confirmPwd != createPwd) {
                //$("#confirmPwd").next().show();
                $("#confirmPwd").next().show();
                $("#confirmPwd").next().text("两次输入的密码不一致，请重新输入");
            }
            else {
                $("#confirmPwd").addClass("right");
                $("#confirmPwd").next().hide();
            }
        }
    });
    $("#createPwd").keyup(function () {
        var createPwdLength = $("#createPwd").val().length;
        var createPwd = $("#createPwd").val();
        if (createPwdLength > 0 && createPwdLength <= 6) {
            $(".pwdBar").addClass("pwdBar-label-weak");
            $(".pwdBar").removeClass("pwdBar-label-normal");
            $(".pwdBar").removeClass("pwdBar-label-strong");
        }
        else if (createPwdLength > 6 && createPwdLength <= 8) {
            $(".pwdBar").addClass("pwdBar-label-normal");
            $(".pwdBar").removeClass("pwdBar-label-strong");
        }
        else if (createPwdLength > 9) {
            $(".pwdBar").addClass("pwdBar-label-strong");
        }
        else {
            $(".pwdBar").removeClass("pwdBar-label-weak", "pwdBar-label-strong", "pwdBar-label-normal");
        }
    })
})