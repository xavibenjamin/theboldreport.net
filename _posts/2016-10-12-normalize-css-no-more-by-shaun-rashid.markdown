---
layout: post
title: "Normalize (CSS) No More by Shaun Rashid"
categories: link
custom_type: link
link_url: http://shaunrashid.com/2015/09/15/normalize-css-no-more/
tags: [CSS, Development]
date: 2016-10-12 10:49
---
Shaun Rashid:

> Like many web developers, I have used a reset/normalize style sheet in a variety of projects with the intention of having a common starting point for all browsers when it comes to styling CSS. It’s been useful. It works great for setting a baseline to create web pages that are pixel-perfect reproductions of mockups from designs.
>
> However, as I work with building responsive websites where the widening array of devices has changed the way that we design websites, I have fallen back to the age-old statement that answers the question of whether a [website needs to look exactly the same in every browser](http://dowebsitesneedtolookexactlythesameineverybrowser.com/). With the answer to that question, I have found that the reset/normalize stylesheet has become unnecessary.

Such a short article, but an excellent point. I'll be removing the reset/normalize from this site and my personal site soon. Although [I agree with Chris Coyier](https://css-tricks.com/normalize-css-no/), I can't live without this:

```css
* {
box-sizing: border-box;
}
```