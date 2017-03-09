---
title: Another Way to Avoid Writing Unnecessary :last-child's
subtitle: The Lobotomized Owl Selector
custom_type: post
tags: [CSS, development]
date: 2017-03-06 14:53
---

About two weeks ago, I wrote a post on how you [can use `:not` in your CSS to simplify life](https://theboldreport.net/2017/02/css-tip-use-not-to-save-time-and-lines-of-code/). Lots of people really liked the article, and I'm so glad! This method is pretty awesome.

One of our readers, [Miler](http://acidrums4.github.io), wrote in to point me to [this article that talks about the "lobotomized owl selector"](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls). Funny name, but a fascinating approach, and quite honestly, way better.

In short, [Heydon Pickering](http://www.heydonworks.com/) advises the following:

```scss
* + * {
  margin-top: 1.5em;
}
```

This particular approach makes so much sense, and I encourage you to read the full article. Essentially it adds margin only to the elements that have adjacent siblings. Heydon also uses the `em` here (which has its pros and cons) and demonstrates why this particular unit can be the right choice.

If we go back to the original example, each `.post` would already be correctly spaced, but to add our border, we'd do this:

```scss
.posts * + * {
  padding-top: .5rem;
  border-top: 1px solid #eee;
}
```

This only eliminates one line here, but possibly hundreds throughout our codebase.

As always, if you have questions or would like to discuss [send me an email](mailto:tim@theboldreport.net).