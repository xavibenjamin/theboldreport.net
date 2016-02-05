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
