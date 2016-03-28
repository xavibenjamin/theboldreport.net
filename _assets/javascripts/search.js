$(function() {
  $('#search-query').lunrSearch({
    // URL of the `search.json` index data for your site
    indexUrl: '../js/index.json',
    // jQuery selector for the search results container
    results:  '#search-results',
    // jQuery selector for the element to contain the results list, must be a child of the results element above.
    entries:  '.search-results-list',
    // jQuery selector for the Mustache.js template
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
