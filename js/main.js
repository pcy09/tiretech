// PC버전
$('.navbar_gnb,.sub_shadow').on('mouseenter mouseleave',function(aa){
    if($(window).width()>1169){
        if(aa.type == 'mouseenter'){
            $('.sub').stop().slideDown();
            $('.sub_shadow').stop().fadeIn();
        }else{
            $('.sub').stop().slideUp(200,function(){
                $('.sub').removeAttr('style');
            });
            $('.sub_shadow').stop().fadeOut(200,function(){
                $(this).removeAttr('style');
            });
        }
    }
});

// mouseenter/mouseleave
// mouseover/mouseout


// 모바일버전
const $mainBtn = $('.navbar_gnb>li>a'); //메인메뉴
$mainBtn.click(function(){
    if($(window).width()<1170){
        if($(this).parents('li').hasClass('on')){
            $(this).siblings('.sub').slideUp();
            $(this).parents('li').removeClass('on');
        }else{
            $('.sub').slideUp();
            $(this).siblings('.sub').slideDown();
            $('li').removeClass('on');
            $(this).parents('li').addClass('on');
        }
    }
});


// 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
        $('.gnb').animate({'right':0},400);
        $('.header_container').animate({left:-250},400);
    }else{
        $('.gnb').animate({'right':-250},400);
        $('.header_container').animate({left:0},400);
    }
});

// 윈도우 사이즈가 바뀔 때 스타일 초기화
$(window).resize(function(){
    if($(window).width()>1169){
        $('.sub').removeAttr('style');
        $('.navbar_gnb>li').removeClass('on')
        $('.gnb').animate({'right':-250},0);
        $('.header_container').animate({left:0},0);
        $('.trigger').removeClass('open');
    }
});

