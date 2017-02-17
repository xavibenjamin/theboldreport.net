---
title: Creating a Microblog with Jekyll
custom_type: post
tags: [microblogging with jekyll, jekyll, development]
date: 2017-02-16 21:21
---

*This post is part of a series on [Microblogging with Jekyll]({{ site.url }}/topics/#microblogging-with-jekyll)*.

---

I wanted to get away from Twitter. If you don't get why, that's ok. It's not the point of this post. I want to talk about creating a microblog. What's a microblog? In essence, it's a place where you write small tweet-like posts, except the content lives on a server you pay for. You are in control.

[Jekyll][6056-0001] makes it easy to setup a microblog. [I recently created my own microblog](https://ttimsmith.com/microblog/), and made videos about it. There's a [part one](https://youtu.be/-B0BOxXnmOc) and [part two](https://youtu.be/ZdRurBOmZLs). I thought I'd show you how I made mine. It's not the only way, it's just one way. Let's get started. 

[6056-0001]: http://jekyllrb.com/

## Create the Collection

First, we'll create a collection to hold all of our microblog posts.

```yaml
# _config.yml

collections:
  microblog:
    output: true
    permalink: /microblog/:year/:month/:slug/
```

This bit of code declares our new `microblog` collection, outputs the documents we put in it, and defines our permalink structure to use the `:slug` instead of the `:title` since our microblog posts won't have a `:title`.

## Create a Page for the Microblog

Now we'll create a page to display our posts. We'll call it `microblog.html`.

```html
---
layout: page
title:  Microblog
permalink: /microblog/
---
{% raw %}<section class="microblog-posts">
  {% for post in site.microblog reversed %}
    <div class="microblog-post">
      {{ post.content }}
      <footer class="microblog-post__footer">
        <small><time datetime="{{ post.date | date_to_xmlschema }}"><a href="{{ post.url }}" title="Permalink to Microblog post">{{ post.date | date: "%a, %b %d, %Y at %I:%M%P" }}</time></a></small>
      </footer>
    </div>
  {% endfor %}
</section>{% endraw %}
```

Our microblog posts will now display in reverse chronological order (newest at the top), with the date displayed like this: {{ site.time | date: "%a, %b %d, %Y at %I:%M%P" }}. Sweet.

## Create Layout for Each Microblog Post

Now we'll create a layout for our individual posts. We'll name it `microblog-post.html` in the `_layouts` folder. As with all of these names, you can choose to call them whatever you'd like.

```html
---
layout: default
---

{% raw %}<div class="microblog-post--single">
  {{ content }}
  <footer class="microblog-post__footer">
    <small><time datetime="{{ page.date | date_to_xmlschema }}"><a href="{{ page.url }}" title="Permalink to Microblog post">{{ page.date | date: "%a, %b %d, %Y at %I:%M%P" }}</time></a> by Timothy B. Smith</small>
  </footer>
</div>{% endraw %}
```

I wanted to display each microblog post with large text and in the center of the page. The `.microblog-post--single` class will allow us to do just that.

## Write Styles for the Posts

Now let's create a new SCSS file for our microblog styles called `microblog.scss`.

```scss
// -------------------------------
// MICROBLOG
// -------------------------------

.microblog-post:not(:last-of-type) {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  p:last-of-type {
    margin: 0;
  }
  img {
    margin: 1rem 0;
    max-width: 450px;
  }
}

.microblog-post--single {
  margin: 6rem auto 0;
  max-width: 1000px;
  text-align: center;
  p {
    font-size: 2rem;
    line-height: 1.4;
    margin: 0;
  }
  img {
    margin: 1rem auto;
    max-width: 450px;
  }
}

.microblog-post__footer {
  color: lighten(#555, 20%);
  font-size: .9rem;
  padding-top: .5rem;
  a {
    color: inherit;
  }
}
```

This will style our list of microblog posts, the date that we published them on, and the individual permalink pages of each post. If you want to see these styles in action, [take a look at my microblog](https://ttimsmith.com/microblog).

## Creating the Feed

Now let's make an RSS feed so people can subscribe to our microblog. It's just like any other RSS feed, except each entry doesn't have a `<title>`. We'll call it `microblog.xml`.

```xml
---
---
{% raw %}<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <link rel="hub" href="https://pubsubhubbub.appspot.com"/>
  <title>Tim Smith’s Microblog</title>
  <subtitle>By Timothy B. Smith</subtitle>
  <link href="https://ttimsmith.com/microblog"/>
  <link type="application/atom+xml" rel="self" href="https://ttimsmith.com/microblog.xml"/>
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <rights>Copyright © 2008–{{ site.time | date: "%Y" }} Timothy B. Smith</rights>
  <id>https://ttimsmith.com</id>
  <author>
    <name>Timothy B. Smith</name>
    <uri>https://ttimsmith.com</uri>
    <email>smith@ttimsmith.com</email>
  </author>
  {% for post in site.microblog reversed %}

  <entry>
    <id>https://ttimsmith.com{{ post.id }}</id>
    <link type="text/html" rel="alternate" href="http://ttimsmith.com{{ post.url }}"/>
    <title></title>
    <published>{{ post.date | date_to_xmlschema }}</published>
    <updated>{{ post.date | date_to_xmlschema }}</updated>
    <author>
      <name>Timothy B. Smith</name>
      <uri>http://ttimsmith.com</uri>
    </author>
    <content type="html">
      <![CDATA[
        {{ post.content }}
      ]]>
    </content>
  </entry>
  {% endfor %}
</feed>{% endraw %}
```

## Things I Haven't Figured Out Yet

### Cross-Posting Efficiently

The way posts appear on other social media is inconsistent. If I use an inline link, it won't appear elsewhere. Also, since I'm using [FeedPress](https://feed.press/) to do the cross-posting, it's not immediate.

### Automate the Creation of Files

I want to easily create a new post with the right file name format, and have it auto-increase the number. For example, I could automatically create a post called `2017-02-16-01.md` with the next one being `2017-02-16-02.md` and so one. This is simple to do on my mac, but how would you do this on iOS? Problems like this are what come about with database-less systems.

### Publishing from iOS

This is really tough. Jekyll has no API that I can hook into to publish posts and upload images. I almost feel that this completely disqualifies Jekyll as a viable solution for the microblog, but I'm giving it a shot for now. I may have to… use… WordPress. 😱

## Conclusion

This is one of the ways to create a basic microblog. I'm sure there are things I haven't thought of yet, which I'll have to address down the road. Are you microblogging? What are you using for yours? Have you solved some of the problems I haven't fixed yet? I'd love to hear all about it! [Send an email to tim@theboldreport.net](mailto:tim@theboldreport.net).