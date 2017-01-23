---
title: Browser Support for Evergreen Websites by Rachel Andrew
custom_type: link
link_url: http://www.rachelandrew.co.uk/archives/2017/01/12/browser-support-for-evergreen-websites/
tags: [CSS, Development, Industry Issues]
date: 2017-01-23 11:25
---
Rachel Andrew:

> If I built a site today that uses shape-outside to curve text around an image, Firefox users are going to see squared off text around that floated image. Chrome users will get the curved shape. As Firefox are currently [implementing Shapes](https://groups.google.com/forum/#!topic/mozilla.dev.platform/PhG4Upk4Mo4), at some point in the near future Firefox users will find their browser has updated underneath them, my website will suddenly look that little bit more finessed to them, yet I won’t have shipped any code.

Rachel makes an excellent point. Unfortunately, we sometimes get scared to use CSS that isn't widely supported yet. Even worse, some depend on frameworks and their fallbacks for CSS. It's *completely* understandable, the web is moving so fast! But I think Rachel's advice is sound:

> Also, remember that you don’t need to throw everything out and *only* use a very new layout method such as Grid or even Flexbox. Start small, finesse your forms or navigation with these methods, add some little touches. Not every site needs all the new shiny throwing at it, most will benefit from some elements from newer specifications. You can learn just as much about Grid by using it to tighten up a floated UI, as you can by turning your whole site over to it.

I recently started to play around with Grid, and using `@supports` allows me to define a Flexbox fallback that most people won't even notice working under the hood. We might not know about *all* the new stuff, but I think pushing our comfort zone will only lead to better things.