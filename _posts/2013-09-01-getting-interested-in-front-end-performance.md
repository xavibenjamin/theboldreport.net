---
layout: post
title: Getting Interested in Front-end Performance
categories: links
custom_type: link
custom_url: http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/
date: "2013-09-01 16:17:44"
excerpt: It’s hard, if not impossible, to deny that performance is by far one of the most critical aspects of any decent web project, be it a small portfolio site, a mobile-first web app, right through to a full-scale ecommerce project.
---
Harry Roberts:

>It’s hard, if not impossible, to deny that performance is by far one of the most critical aspects of any decent web project, be it a small portfolio site, a mobile-first web app, right through to a full-scale ecommerce project.

This is an area I've been dabbling into more recently. As a wanna-be front-end developer, I've tried to do more research into how I can do my job better, and make the sites I create faster. 

This article is quite the extensive guide on various things you could do to make your sites faster. The obvious ones are things like minimizing http requests, and minifying files. Yet, one technique I hadn't heard of before was using `rel="dns-prefetch"`. On this site, I put this in the head:

{% highlight html %}
<link rel="dns-prefetch" href="//engine.carbonads.com">
<link rel="dns-prefetch" href="//static.carbonads.com">
<link rel="dns-prefetch" href="//use.typekit.net">
{% endhighlight %}

Essentially this does exactly what you think it would do. You can prefetch a hostname's DNS with the code above. This is helpful when you need assets from an external source.

If you're building sites of any kind, check out the article, very helpful.

##### Further Reading
[Web Performant WordPress by Dave Rupert](http://daverupert.com/2010/06/web-performant-wordpress/) - A really great article if you're running on WordPress. It is from 2010, so take the advice with a grain of salt.