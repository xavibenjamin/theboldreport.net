var $doc            = $(document),
    $search_input   = $('#search-query'),
    $search_popover = $('.popover--search');

$search_input.on('keyup', function() {
  $search_popover.addClass('is-open');
  $doc.bind('focusin.popover click.popover',function(e) {
    if ($(e.target).closest('.popover, #search-query').length) return;
    $doc.unbind('.popover');
    $search_popover.removeClass('is-open');
  });
});
