var $body = $('body'),
    $scroll_class = 'scrolled',
    $header_height = $('.site__header').height(),
    $main_height = $('.content__main-content').height(),
    $footer_height = $('.site__footer').height(),
    $offset_val = $header_height + $main_height;

function stickyBug() {
  if (window.pageYOffset > 1000){
    $body.addClass($scroll_class);
  } else {
    $body.removeClass($scroll_class);
  }

  if (window.pageYOffset > $offset_val - 700) {
    $body.removeClass($scroll_class);
  }
}

window.addEventListener('scroll', stickyBug, false);
