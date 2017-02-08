---
title: CSS Grid Layout Terminology, Explained by Ire Aderinokun
custom_type: link
link_url: https://bitsofco.de/css-grid-terminology/
tags: [CSS, grid layout, development]
date: 2017-02-08 14:58
---
Ire Aderinokun:

> CSS Grid Layout introduces a lot of new concepts; there are 17 new properties to learn, and many more new terms to understand. This can make getting started with CSS Grid Layout difficult, as new terms reference other terms and you can get into a spiral of confusion. So, here are the basic concepts and terminology of CSS Grid Layout, explained.

Yep, the learning curve might be steep to learn this, but it's important to do it. As Ire goes through the different properties, it's easy to see how amazing CSS Grid is, and how much it will simplify our life. Don't wait till "it's more widely supported." Learn it now, and the investment will be worth it. [CSS Grid is coming](http://caniuse.com/#feat=css-grid).

This next part confused me, but after thinking about it more, it made sense.

```scss
.outlined {
  grid-area: outlined;
  border: 2px solid purple;
}

.grid-container {
  display: grid;
  grid-template-areas: "outlined outlined ."
                       "outlined outlined ." 
                       ". . ."; // The last one is empty because it's not part of the outlined grid area.
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

Each `outlined` corresponds to the first and second column, and the first and second row thereby creating a 200px&times;200px square. I've created a CodePen if you want to play around with it.

<p data-height="314" data-theme-id="0" data-slug-hash="ggBYzE" data-default-tab="css,result" data-user="timothybsmith" data-embed-version="2" data-pen-title="ggBYzE" class="codepen">See the Pen <a href="http://codepen.io/timothybsmith/pen/ggBYzE/">ggBYzE</a> by Tim Smith (<a href="http://codepen.io/timothybsmith">@timothybsmith</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>