---
title: A Simple Use of CSS Grid
subtitle: You might've heard of CSS Grid, now let's get our feet wet
custom_type: post
tags: [CSS, development, grid layout]
date: 2017-01-23 12:50
---
You might've heard awesome people like [Rachel Andrew](https://www.rachelandrew.co.uk/archives/2017/01/18/css-grid-one-layout-method-not-the-only-layout-method/) and Jen Simmons advocating for the use of CSS Grid. If you haven't, I recommend you follow [Jen][6765-0001] and [Rachel][6765-0002] on Twitter. You should [watch this talk](https://youtu.be/Felq4z_rdPQ), and [this one too](https://youtu.be/PZPPwxumEzs).

But, you might also feel that you don't know where to get started. How do you learn it? Well, [Rachel has made this great series of screencasts on Grid](http://gridbyexample.com/). But once you know some of the basics, it may be difficult to decide where to use it. Well, I was playing around the other day, and came across a pretty simple and easy example.

Let's say you want two columns. I was working on basic two column layout for my resume on my site. The layout for that is essentially this:

{% figure extendout /uploads/2017/01/column-layout.jpg "Pretty simple right? A main column and a sidebar." %}

Till now, we've used hacks using Float and even Flexbox to make this layout possible. Funnily enough, even Flexbox isn't the ideal solution for this layout, it's actually Grid. Using Flexbox, you'd have to code it up something like this:

```html
<div class="wrapper">
  <section class="main-column">
    Your content here.
  </section>

  <aside class="sidebar">
    Your sidebar content here.
  </aside>
</div>
```

And the CSS would be something like this:

```css
.wrapper {
  display: flex;
}

.main-column {
  width: 70%;
  /* Let's get around the box-model and use padding */
  padding-right: 2rem;
}

.sidebar {
  width: 30%;
}
```

This is the barebones stuff. This solution needs 10 lines of code for the basics of our layout. Now let's do it with Grid with 3 lines.

```css
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 2rem;
}
```

That's it. Grid looks intimidating, but it's simplicity and versatility will become an amazing tool for us. Now, since Grid's support is behind browser flags right now, let's rewrite this with a fallback.

```css
/* If the browser supports Grid, it'll use this */
@supports (display: grid) {
  .wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-gap: 2rem;
  }
}

/* If the browser does not support Grid, it'll use this */
@supports not (display: grid) {
  .wrapper {
    display: flex;
  }

  .main-column {
    width: 70%;
    padding-right: 2rem;
  }

  .sidebar {
    width: 30%;
  }
}
```

Pretty cool huh? If you have any questions or would like to discuss it further, [send me an email](mailto:tim@theboldreport.net).

[6765-0001]: https://twitter.com/jensimmons
[6765-0002]: https://twitter.com/rachelandrew
