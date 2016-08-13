$(function() {
  $('#search-query').lunrSearch({
    indexUrl: '../js/index.json',
    results:  '#search-results',
    entries:  '.search-results-list',
    template: '#search-results-template'
  });
});

$(document).ready(function() {
  var searchButton = $('.js-search-toggle');
  var searchWrapper = $('.site__search-form');
  var searchInput = $('#search-query');
  var isOpen = false;
  searchButton.click(function() {
    if(isOpen === false) {
      searchWrapper.addClass('js-search-open');
      searchInput.focus();
      isOpen = true;
    }
    else {
      searchWrapper.removeClass('js-search-open');
      searchInput.focusout();
      isOpen = false;
    }
  });
});
