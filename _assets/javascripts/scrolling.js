var $body = $('body'),
    $scroll_class = 'scrolled',
    $header_height = $('.site__header').height(),
    $main_height = $('.content__main-content').height(),
    $offset_val = $header_height + $main_height;

function stickyBug() {
  if (window.pageYOffset > 50){
    $body.addClass($scroll_class);
  } else {
    $body.removeClass($scroll_class);
  }

  if (window.pageYOffset > $offset_val - 300) {
    $body.removeClass($scroll_class);
  }

  console.log($header_height);
  console.log($main_height);
  console.log($offset_val);
}

window.addEventListener('scroll', stickyBug, false);
