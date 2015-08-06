---
layout: post
title: ‘Dynamic Web Typography with Typekit’
categories: link
custom_type: link
link_url: http://www.iamtomnewton.com/blog/dynamic-typography/
date: '2015-08-06 10:25:46'
excerpt: This makes so much sense. Why download the whole glyph set when you’re most likely not using it all?
---
Tom Newton talking about a new Typekit feature:

> When your Dynamic Kit JavaScript loads in the browser it detects the characters you’re using and requests that only the used characters are sent. For example, say you’re using a typeface to set a homepage h1 to read “Betty’s Buttery Bakery” then instead of the font-file containing all of it’s glyphs, it will only contain B-E-K-R-S-T-U-Y-‘ in a smaller (much faster loading) font file.

This makes so much sense. Why download the whole glyph set when you’re most likely not using it all? With more attention then ever on performance, this is a big win.

Via *[CSS Tricks](https://css-tricks.com/dynamic-web-typography-with-typekit/)*.