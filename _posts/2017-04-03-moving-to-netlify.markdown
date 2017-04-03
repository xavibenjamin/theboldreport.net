---
title: Moving to Netlify
subtitle: My time hosting Jekyll sites on Heroku draws to a close
custom_type: post
tags: [development, jekyll, jekyll on heroku, jekyll on netlify]
date: 2017-04-03 11:33
---

In June 2015, I set out on a bold journey. One where no one had gone before. If you're thinking of space, hell yea that would be amazing, but no. I set out to host my Jekyll site on Heroku.

I'd been paying money for my static site to be deployed. There had to be a better way. I searched what felt like every corner of the internet to find a way to do this. Heroku could build my site straight from git. That would be amazing!

After hours of reading blog posts and comments on all types of web forums (those still exist by the way), I found what I needed. As is often the case, finding the solution took way more time than actually implementing it. In just a few minutes I had deployed my site to Heroku and it was building directly from the latest commit on GitHub.

Heroku has been an excellent home for my Jekyll sites. I've even [dedicated a series on how to do it](https://theboldreport.net/topics/#jekyll-on-heroku). It's been a lot of fun to figure out different issues I've run into and then write about them. Also, hosting with Heroku is what's allowed me to [publish easily from iOS](https://theboldreport.net/2016/01/publishing-to-jekyll-from-ios/).

But the time has come to move on.

## Oh So Melodramatic

It isn't so much of a complete move as it is living in two places. Heroku is still very great with sites I manage. I'm mostly moving my Jekyll projects over to Netlify which I seem to have more and more of. [I *love* Jekyll](https://theboldreport.net/topics/#jekyll).

Here are some of the reasons I moved:

1. **One Click SSL**  
Holy moly. No, *seriously*. It's *one* click. You click a button and the certificate is issued and uploaded to Netlify. This is how easy SSL *should* be everywhere.
2. **HTTP 2.0**  
For some reason, Heroku hasn't implemented HTTP/2 yet. I don't know why or when it's going to happen, but Netlify automatically enables it on HTTPS sites.
3. **Post Processing**  
Netlify gzips, minifies javascript, and performs lossless image compression if you want it to. Pretty cool.
4. **Static Site Welcoming**  
With Heroku, static sites are definitely not what it's built for. Heroku is built to handle applications and getting Jekyll to build and work involved a lot of research. On Netlify, all I need is to have my `Gemfile` and give it the build command. It takes care of the rest. Hosting a static site on Netlify doesn't feel like a hack like it did on Heroku.

There are a few other reasons like easy deployment from GitHub, deploy previews which allow you to view a pull request on a dev server, snippet injection, and form handling. If you want to read about all these features, I encourage you to [read the docs](https://www.netlify.com/docs/).

The people over at Netlify are doing a pretty great job. It seems very smart to me to design and build for the needs of people building static sites. I'm sure that number is growing and will continue to do so. Also, I'd be remiss not to mention how well designed the UI is. The experience has been very well thought through. Kudos to [Rafael Conde](https://rafaelconde.net/).

If you've been looking to make a move for your static sites, you should definitely consider [Netlify](https://www.netlify.com/). If you have further questions, you can always [email me](mailto:tim@theboldreport.net).
