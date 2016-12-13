---
layout: post
title: CSS Shorthand Syntax Considered an Anti-Pattern by Harry Roberts
categories: link
custom_type: link
link_url: http://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/
tags: [CSS, Development]
date: 2016-12-13 12:42
---
Harry Roberts:

> There’s a very small but surprisingly significant (and even more surprisingly frequent) issue I spot a lot in other peoples’ code, either when working directly with it, refactoring it, or auditing it: the use of shorthand syntax in CSS.
> 
> Typically we would view shorthand syntax as a benefit: fewer keystrokes, fewer lines of code, less data over the wire. Sounds great! However, it comes with a rather troublesome side effect: **it often unsets other properties that we never intended to modify.**

Great read. When I was writing the code guide for ACL, this was one of those things that *had* to be included. Our codebase was already riddled with unnecessary shorthand usage, but if we could prevent future use, that was a win. Here's what we wrote:

> Use shorthand for properties and property values where it makes sense. Avoid using shorthand properties like `background` when you only need to set `background-color`. Using the shorthand automatically overrides any preceeding(sic) longhand declarations and can make unnecessary work for others. This applies to `background`, `border`, `margin`, `padding`, etc.

As Harry makes clear, there are exceptions. But I would argue that if your codebase is large, and has many people working on it, err on the side of not using shorthand. If you work on a design system, I'd almost say to never use it, but that would be ignorant. As with everything, we have to try to think through as many situations we can, and then do our best.