---
layout: post
title: 'Using Portly for Local Development'
categories: articles
custom_type: post
tags: development
date: '2013-10-02 09:52:41'
---
My friend, [Adam Stacoviak](http://adamstacoviak.com/), pointed me to a tool called [Portly](https://getportly.com/). Portly allows you to display your local web server, publicly. 

If you look at the Portly site, you can tell that the applications of this menubar app, are many. I've been using it to do local device testing without the need for a staging server. This a very basic usage of this powerful app, but it's been a huge timesaver for me.

I *always* develop sites locally.[^1] One problem I constantly ran into, is that I wasn't able to easily test sites on my different devices. Sure, you can use a bookmarklet, resize your browser, or sign up for something like BrowserStack, but I like to test from the comfort of my couch.[^2]

![Portly Preferences](/uploads/2013/10/portly-screenshot.png "Portly Preferences")

This is where Portly comes in. I simply add a tunnel in the app, point it to my local connection string,[^3] turn on the tunnel,  and go to the subdomain on my iPad or iPhone.

Now, I know there are other ways to do this, but I just wasn't nerdy enough to implement them. Portly is easy, and [starting at $2.99/month](https://getportly.com/plans), a very good deal. You should definitely check it out. If you need help or have questions, ping me on [Twitter](https://twitter.com/ttimsmith) or [email me](mailto:tim@theboldreport.net).


[^1]: If you're working on a live server, stop that.
[^2]: I've found that QA is much more enjoyable—and effective—when I'm relaxed and comfortable. I turn on the TV for background noise, sit back on the couch, and browse every single page of the site. I find things I need to fix and assign myself GitHub issues. This ritual is often accompanied by a cup of coffee as well.
[^3]: For example, <http://localhost:4000>.