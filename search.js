---
---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts %}
index.add({
  title: {{post.title | jsonify}},
  category: {{post.categories | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );
// builds reference data
var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "date": {{ post.date | date: '%a, %b %d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search

$(document).ready(function() {
  var searchCallback = function() {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<h3><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><small class="pubdate">'+store[ref].date+'</h3>';
      resultdiv.append(searchitem);
    }
  };

  $('#search-query').on('keyup', searchCallback);

  // Set up some variables
  var split;
  var qObj = {};

  // Get query string
  var qs = window.location.search;
  qs = qs.split('?')[1];

  // If there is a query string
  if (qs) {
    // Split on the ampersand seperator
    qs = qs.split('&');

    // Iterate over number of items in qs
    for (var i = 0; i < qs.length; i++) {
      // Split the item
      split = qs[i].split('=');

      // Add the item to the qObj
      qObj[split[0]] = split[1];
    }
    // Check for q param
    if (qObj.q) {
      // Set the value of the input
      $('#search-query').val(decodeURIComponent(qObj.q)
        .replace('+', ' '))
        .trigger('keyup');
    }
  }
});
