---
title: Code Smells in CSS Revisited by Harry Roberts
custom_type: link
link_url: https://csswizardry.com/2017/02/code-smells-in-css-revisited/
tags: [CSS, development]
---
Harry Roberts:

> Way back in 2012, I wrote a post about potential CSS anti-patterns called [Code Smells in CSS](https://csswizardry.com/2012/11/code-smells-in-css/). Looking back on that piece, I still agree with all of it even four years later, but I do have some new things to add to the list. Again, these aren’t necessarily always bad things, hence referring to them as code smells: they might be perfectly acceptable in your use case, but they still smell kinda funny.

Lots to learn here. I feel horrible saying this, but **I'm guilty**. I'm guilty of *at least* two of these. I know, embarrassing. But hey! Can't let it get me down, we're all trying to improve. 

A real easy one to get better with is minimizing the amount of shorthand syntax you use. Harry focuses on `background`, but `margin` and `padding` should be avoided too unless you're doing it intentionally.

```scss
// Don't do this!
.class-name {
  background: #fff;
  margin: 0 0 10px;
  padding: 0 0 0 5px;
}

// Do this!
.class-name {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px 10px; // You're doing something specific with this one.
}
```

Something small like this can save so much time. Really though, all of Harry's tips will save you, your co-workers, or whoever else maintains the code you write, a lot of time.