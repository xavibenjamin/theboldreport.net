$('.search-input').on('focus', function() {
  $('.popover--search').addClass('is-open');
  $(document).bind('focusin.popover click.popover',function(e) {
    if ($(e.target).closest('.popover, #search-query').length) return;
    $(document).unbind('.popover');
    $('.popover--search').removeClass('is-open');
  });
});
