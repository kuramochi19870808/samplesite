$(function() {

/* ---------------------------------------- */
// トップに戻る
/* ---------------------------------------- */
var pagetop = $('.pagetop');
$(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
   } else {
        pagetop.fadeOut();
        }
   });
   pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
          return false;
});

/* ---------------------------------------- */
// スクロール
/* ---------------------------------------- */
$('.header-js').click(function(){
  var target = $('header').offset().top;
  $('html,body').animate({
      scrollTop: target
  }, 500); 
  return false;;
});
$('.about-js').click(function(){
  var target = $('.about').offset().top;
  $('html,body').animate({
      scrollTop: target
  }, 500); 
  return false;;
});
$('.menu-js').click(function(){
  var target = $('.menu').offset().top;
  $('html,body').animate({
      scrollTop: target
  }, 500); 
  return false;;
});

$('.access-js').click(function(){
  var target = $('.access').offset().top;
  $('html,body').animate({
      scrollTop: target
  }, 500); 
  return false;;
});
$('.contact-js').click(function(){
  var target = $('.contact').offset().top;
  $('html,body').animate({
      scrollTop: target
  }, 500); 
  return false;;
});

  /* ---------------------------------------- */
// メニュー名　金額
/* ---------------------------------------- */
$('.item-image').on({
  'mouseenter': function(){
    $(this).find('p').stop(true, true).slideDown();
  },
  'mouseleave': function(){
    $(this).find('p').stop(true, true).slideUp();
  }
});

/* ---------------------------------------- */
// メニューカテゴリー
/* ---------------------------------------- */
// ボタンを選択
$("button").click(function(){
  // value属性の値を取得
  var target = $(this).attr("value");

  // 全てのli要素を調べる
  $(".item").each(function(){
    // 一度全て非表示にする
    $(this).animate({"opacity" : 0}, 300, function(){
      $(this).hide();

      // フィルタリングの条件を満たしているか
      if($(this).hasClass(target) || target == "all"){
        // 条件を満たしている場合は再表示
        $(this).show();
        $(this).animate({"opacity" : 1}, 300);
      }
    });
  });
});

});
