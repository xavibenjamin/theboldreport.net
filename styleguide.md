---
layout: page
title: Style Guide
exclude_from_search: true
permalink: /styleguide/
---
{% figure small__right /uploads/2013/09/tim_680x510.jpg "Use the <code>.small__right</code> class for this particular styling." %}

This page exists to show the different components and pieces of *The Bold Report*. More than anything, I maintain it because I think style guides are interesting.

This website is currently set in Freight Text Pro for most main text, and Freight Sans Pro for headings and secondary text.

## Heading Two
Secondary headings are used to separate portions of text. I don't ever use links in headings unless it's a link post. Primary headings are only used once in the page title or post title. Links in regular text look like [this](/styleguide).

{% figure extendout /uploads/2014/01/sonos-top_view.jpg "This image style can be used with the <code>.extendout</code> class." %}

As normal, you've got styles for `inline code`, *italics*,  and **bold text**. Inline code is used when the code isn't multi-line. Italics are used for emphasis, and bold is hardly used but when it is, it's used for the necessary visual contrast.

- This is an unordered list.
- Second list item
	- Here's a second-level list item
- I sometimes use lists in articles, but quite rare. Every once in a while, I use a list item that has a paragraph in it which has a little more information.

{% figure alignright /uploads/2013/10/1p4-mac-create-new-vault.png "Use the <code>.alignright</code> class for this image styling. Use of images is encouraged." %}

##### Heading Five
Level five headings are not used often, but are used to list articles of further reading. When that's the case, we [display the link](/styleguide) — then give a bit of context to the article separated by an em dash.

I use horizontal rules for separating ideas in an article.

---

1. Here's a numbered list
2. I don't use these much either, except for the annual review.
  1. This is an indented list
  2. another item on this list
3. **Here's a Goal Title**     
For the annual review, I use the list items to write goals and then write a little bit about them.

{% figure alignleft /uploads/2013/10/1p4-mac-1p-mini-item-details.png "For this image styling, use the <code>.alignleft</code> class. I like to use captions for the most part, not required though." %}

Here's a `blockquote` for you. These are mostly used in link posts to quote writing from elsewhere. They're usually preceded by the person who said or wrote the quote.

Ben Brooks on *The Brooks Review*:

> There’s a lot of good looking options out there, but I wanted to be able to test something affordable for a change. So I reached out to Tom Bihn and asked if I could stop by to test out a few different bags, and possibly swipe one for a while to test out.

<figure class="photo-grid">
  <img src="{{ site.url }}/uploads/2016/01/eiffel-tower.jpg" alt="" class="grid-thirds" />
  <img src="{{ site.url }}/uploads/2016/01/deannda-posing.jpg" alt="" class="grid-thirds" />
  <img src="{{ site.url }}/uploads/2016/01/paris-pastry.jpg" alt="" class="grid-thirds" />
  <img src="{{ site.url }}/uploads/2016/01/kelly-punching.jpg" alt="" class="grid-half" />
  <img src="{{ site.url }}/uploads/2016/01/europe-group-on-the-bus.jpg" alt="" class="grid-half" />
  <figcaption>Use a <code>figure</code> with the class of <code>.photo-grid</code>. Then, each image has their own class to determine size within the grid. I've got <code>.grid-thirds</code> and <code>.grid-half</code> at my disposal.</figcaption>
</figure>

I use Github Flavored Markdown for code blocks. In other words, I use three back ticks. I always declare the language that's being  in the code block.

```yaml
# _config.yml
markdown: redcarpet
markdown_ext:  markdown,mkdown,mkdn,mkd,md

redcarpet:
  extensions: ["tables", "autolink", "strikethrough", "space_after_headers", "with_toc_data", "fenced_code_blocks", "no_intra_emphasis", "footnotes", "smart"]
```

```scss
// _type.scss

/*
INLINE TYPE ------------------------------------------- */

strong {
	font-weight: 700;
  em {
   font-weight: 700;
   font-style: italic;
  }
}
```

## Let's Test That Fluid Type
Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.

And that's it. Oh wait… I forgot something.[^1]

[^1]: Yep. These are footnotes, and this is what they look like. Not a huge deal, but sometimes very necessary.
