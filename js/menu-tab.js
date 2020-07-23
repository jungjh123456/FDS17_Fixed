// DOM 노드 찾기
var items = $('.menu-item');
var btn = $('.btn-menu')
var panel = $('.board section');
var tab = $('.tab');

// 기능 구현

btn.hover(function (e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

tab.click(function (e) {
  e.preventDefault(); //tab(a링크 href) 이벤트 중지
  panel.removeClass('tab-act'); //siblings-> 형제요소
  $(this).parent().parent().addClass('tab-act');
  
});