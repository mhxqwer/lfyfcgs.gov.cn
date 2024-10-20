/**
 * @namaspace:
 * @description:
 * @author:lanyf
 * @update:Created by lanyf on 2019-10-16 .
 * @version: 1.0
 */
$(function () {
    var domain = document.domain;
    $('#wzaBtn').click(function () {
        $('.gxzf-wza').toggle();
    });
    $('.tab-wza>div').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    var scale =  1
    $('#btnBig').click(function () {
        scale +=  0.1;
        if(scale < 2){
            $('body').css({
                "transform": "scale("+scale+")"
            })
        }
    });
    $('#btnSmall').click(function () {
        scale -=  0.1;
        if(scale>0.5){
            $('body').css({
                "transform": "scale("+scale+")"
            })
        }
    });


    //换肤功能
    var skin = 'gxzf_skin';
    var skinValue = $.cookie(skin);
    var dataHref = $('#wzaBtn').attr('data-href')?$('#wzaBtn').attr('data-href'):'/cssq/';
    //console.log(dataHref);

    if(skinValue){
        
        $('#skin').attr('href',dataHref+skinValue+'.css');
        $('#skinGroup>div').removeClass('active');
        $('#'+skinValue).parent().addClass('active');
    }
    $('#blue').click(function () {
        var href = 'blue';
        skinFun(skin,href,dataHref);
    });
    $('#yellow').click(function () {
        var href = 'yellow';
        skinFun(skin,href,dataHref);
    });
    $('#white').click(function () {
        var href = 'white';
        skinFun(skin,href,dataHref);
    });
    $('#black').click(function () {
        var href = 'black';
        skinFun(skin,href,dataHref);
    });
    $('#noskin,.i-reset').click(function () {
        $('#skin').attr('href','');
        $.cookie(skin, '', { expires: 360, path: '/', domain: domain});
        $('#skinGroup>div').removeClass('active');
        $('#noskin').parent().addClass('active');
        $('.help-line-horizontal,.help-line-vertical').remove();
        if(!$('#helpLine').hasClass('i-close')){
            $('#helpLine').addClass('i-close');
        }
        $('body').css({
            "transform": "scale(1)"
        })
    });
    $('#noskin').click(function () {
        $('#skin').attr('href','');
        $.cookie(skin, '', { expires: 360, path: '/', domain: domain});
        $('#skinGroup>div').removeClass('active');
        $('#noskin').parent().addClass('active');
    });

    //辅助线
    $('#helpLine').click(function () {
        if($(this).hasClass('i-close')){
            $(this).removeClass('i-close');
            $('body').append('<div class="help-line-horizontal"></div><div class="help-line-vertical"></div>');
            $('body').mousemove(function(e) {
                var pageX=e.pageX;
                var pageY=e.pageY;
                var width = $(window).width();
                var height = $(document).height();

                $('.help-line-horizontal').css({
                    'width':width,
                    'top':pageY+8
                });
                $('.help-line-vertical').css({
                    'height':height,
                    'left':pageX+8
                });
            });
        }else{
            $(this).addClass('i-close');
            $('.help-line-horizontal,.help-line-vertical').remove();
        }
    });


    function skinFun(skin,href,dataHref) {
        $('#skin').attr('href',dataHref+href+'.css');
        $.cookie(skin, href, { expires: 360, path: '/', domain: domain });
    }

});
