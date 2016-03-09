---
layout: post
title: Expressive Type for Copy Blocks | Cognition
categories: link
custom_type: link
link_url: http://cognition.happycog.com/article/expressive-type-for-copy-blocks
tags:
  - Development
  - CSS
date: 2016-03-09 09:07
---
Mark Huot tells the story of overriding poorly written defaults:

> When overriding everything we find ourselves writing markup such as `.product-meta p` or, worse yet, `.product-meta p, .product-meta ul, .product-meta ol, .product-meta` omg…. This is all so that we can take our system defaults and tailor them to this very specific implementation. The downside here is that our overrides are only as generic as we allow them to be. If we forget to put `blockquote` in our list of overrides then you can forget about using a blockquote in your `.product-meta` element. This is less than ideal and inevitably causes 11th-hour “fixes” to support additional markup patterns you maybe didn’t consider during design and/or development.