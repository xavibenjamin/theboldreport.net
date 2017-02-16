---
title: "CSS Tip: Use :not to Save Time and Lines of Code"
custom_type: post
tags: [CSS, development]
date: 2017-02-16 15:25
---
I saw [this tweet from Matt Griffin](https://twitter.com/elefontpress/status/832308947054903296):

> Finally started making my life easier by using :not(:last-of-type) rather than overriding with a separate :last-of-type rule. Huzzah!

Mind. Blown.

![mind blown](http://i.giphy.com/5xtDarqXOu5UrURdjgI.gif)

Why didn't I think of this earlier? This small thing saves so much time and lines of code. Let me explain. Let's say you're styling a list of posts.

```html
<!-- This is what your html would look like -->
<ul class="posts">
  <li class="post">
    <a href="/link-to-post/" title="Permalink to post">
  	  <h2>Post Title</h2>
  	  <small>Thurs, Feb 16, 2017<small>
  	</a>
  </li>
</ul>
```

This is how I foolishly *used* to style this. Foolishly I tell you!

```scss
.posts {
  list-style: none;
  margin: 0;
  padding: 0;
}

.post {
  border-bottom: 1px solid #eee;
  margin-bottom: .5rem;
  padding-bottom: .5rem;
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
}
```

Lots of code just to space each post evenly, except for the last one. This is what `:not` was made for!

```scss
.post:not(:last-of-type) {
  border-bottom: 1px solid #eee;
  margin-bottom: .5rem;
  padding-bottom: .5rem;
}
```

We've eliminated *five* lines of code here. Just imagine how much you'd save by using this throughout your code base! I made [a CodePen for you to see this](http://codepen.io/timothybsmith/pen/VPNBdW) in action.

Hope this helps! If you have questions, [send me an email to tim@theboldreport.net](mailto:tim@theboldreport.net).