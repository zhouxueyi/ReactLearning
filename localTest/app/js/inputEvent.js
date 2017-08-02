/**
 * Created by xueyi on 17/7/5.
 */



var submit_btn = $("#register-button");
function checkPhone(value){
    if(!(/^1[34578]\d{9}$/.test(value))){
        return false;
    }
    return true;
}
function checkPassWord(value){
    if(!(/\S{6,}/.test(value))){
        return false;
    }
    return true;
}


var input = $('input');
// var input = document.getElementsByTagName('input');

input.focus(function(event){
    var target = $(event.target);
    target.val("");
    // target.removeClass("warn");
    target.siblings('.warn-icon').hide();
});


input.blur(function(event){

    // debugger;
    var target = $(event.target);
    if(target.val() == ""){
        // target.addClass("warn");
        target.siblings('.warn-icon').show();

        // regist_btn.removeClass("active");
        // regist_btn.attr("disabled");
        return ;
    }else if(target.attr("class") == "tel"){
        if(!checkPhone(target.val())){
            target.siblings('.warn-icon').show();
            target.val("");
            // regist_btn.removeClass("active");
            // regist_btn.attr("disabled");
            return ;
        }
    }else if(target.attr("class") == "pas"){
        if(!checkPassWord(target.val())){
            target.siblings('.warn-icon').show();
            target.val("");
            // regist_btn.removeClass("active");
            // regist_btn.attr("disabled");
            return ;
        }
    }
    // debugger;

    var tel = $('form .tel');
    var pas = $('form .pas');
    var ver = $('form .ver');
    var telver = $('form .telver');
    if(tel.val() && pas.val() && ver.val() && telver.val()){
        submit_btn.addClass("active");
        submit_btn.removeAttr("disabled");
    }
    event.preventDefault();
});


submit_btn.click(function () {
    var form = $("form");
    var input = form.find("input");
    var phone = input.eq(0).val();
    var pas = input.eq(1).val();
    var cap = input.eq(2).val();
    var ver = input.eq(3).val();

    $.ajax({
        url: "http://10.106.165.129:9000/m/register",
        type: "POSt",
        data: {
            phone: phone,
            password: pas,
            capcha: cap,
            verifyCode: ver,
            utm_source: 'h5'
        },
        success: function(){
            alert("success")
        }
    });

});