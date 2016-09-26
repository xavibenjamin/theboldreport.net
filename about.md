---
layout: page
title: About
exclude_from_search: true
permalink: /about/
excerpt: Find out more about The Bold Report.
---

*The Bold Report* is designed and developed by me, [Tim Smith](http://ttimsmith.com), in beautiful St. Paul, Minnesota. This publication covers a whole range of things including, but not limited to: design, development, technology, Geek culture, and Apple.

## Tools

Most writing is done on my Macbook Pro in [iA Writer](https://ia.net/writer). I also write and publish from iOS in [Editorial](http://omz-software.com/editorial/). If you'd like to learn how I do that, [I wrote about it](/2016/01/publishing-to-jekyll-from-ios/).

The site is designed and developed in [Sublime Text](http://www.sublimetext.com/), with the exception of the logo. That was done in Adobe Illustrator. I won't link to that one because if you've never heard of it, you've probably lived a better life. It's all hosted by [Heroku](https://www.heroku.com), and powered by [Jekyll](http://jekyllrb.com). If you're wondering how to do that, [I wrote about how to deploy a Jekyll site to Heroku](/2015/06/hosting-a-jekyll-site-on-heroku/) too.

## Contact

If you have questions, concerns, feedback, or compliments about *The Bold Report*, please feel free to contact me. You can [find me on Twitter](https://twitter.com/smithtimmytim) or email [tim@theboldreport.net](mailto:tim@theboldreport.net).

---

## Team

<div class="authors">
  {% for author in site.data.authors %}
    <div class="author">
      <img src="//gravatar.com/avatar/{{ author[1].gravatar}}?s=200" alt="Picture of {{ author[1].display_name }}" class="author__picture" height="200" width="200" />
      <div class="author__info">
        <h4 class="author__name">{{ author[1].display_name }} <small class="author__title">{{ author[1].title }}</small></h4>
        {{ author[1].bio | markdownify }}
      </div>
    </div>
  {% endfor %}
</div><!-- /.authors -->
