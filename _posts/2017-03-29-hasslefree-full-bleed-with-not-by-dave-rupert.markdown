---
title: "Hassle-free Full Bleed with *:not() by Dave Rupert"
custom_type: link
link_url: http://daverupert.com/2017/03/full-bleed-with-not/
tags: [CSS, development]
date: 2017-03-29 15:40
---
Dave wrote this the day I went to Vegas and I haven't had time to write about it.

> Let’s say you’re making a blog post layout. Content is entered into a CMS inside a WYSIWYG editor field. You echo that content to the page. You pull it up on a mobile device and notice the paragraphs go edge-to-edge. Yikes, it’s a little uncomfortable. So you add some kind of left/right padding maybe using a `div.container`.
>
> This works great until the client asks for the images and video to go full bleed. Your universal padding solution no longer works well.

Uncle Dave's solution for this is pretty great. Visually, this the same type of effect I wanted for this site. So in an exercise of self-shame, let's [look at the selector that makes it all work](https://github.com/smithtimmytim/theboldreport.net/blob/master/_assets/stylesheets/_layout/_maincontent.scss#L429)!

```scss
h1,
h2,
h3,
h4,
h5,
ol,
ul,
hr,
.post__header,
.post__footer,
.post__entry > p,
.search-results-list > p,
.page__entry > p,
.highlight,
.extendout figcaption,
.footnotes,
.pagination,
.site__footer small,
.author,
.fullwidth,
.page__search {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  @media #{$large-up} {
    width: 65%;
  }
}
```

Ugh! What the hell is this Tim? Gross! How I ever thought this was an elegant solution, I don't know. But going back to what Dave says is perfectly illustrated in the code above. Using `:not()` allows you to only manage exceptions instead of all this. The actual elements that I want to "embiggen" as Dave calls it, are only a few. This selector would only contain around four or five exceptions.

Anyway, I need to put this on the list of things I need to rewrite for the next redesign.