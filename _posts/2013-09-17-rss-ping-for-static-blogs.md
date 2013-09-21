---
layout: post
title: RSS Ping for Static Blogs
categories: links
custom_type: link
custom_url: https://github.com/hamstu/static-ping
---
When I moved over to Jekyll, one of things you miss out on is RSS Feed pinging. What the hell is "RSS pinging"? Basically, it's your site letting the internet know that their's fresh content on your feed. WordPress automatically does this when you publish new content.

For this site, I use a service that automatically tweets new headlines to the Twitter and App.net accounts, and without a ping, these things have no idea there's a new post in the feed. 

Anyway, [Hamish Macpherson](http://hami.sh/), came up with a very simple way of making this work. Using a PHP script together with a post-deploy hook, it's automatic once again! 

Personally, I use a Rake task, but I may end up switching for the automation aspect. If you'd like to take a look at my Rake task, you'll find in [the repo for this site](https://github.com/ttimsmith/ttimsmith.com).