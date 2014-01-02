---
layout: post
title: 'Modification to Main RSS Feed'
categories: articles
custom_type: post
date: '2014-01-02 12:10:36'
---
I made a small modification to the main RSS feed. And I wanted to take a second to tell you about it.

This site publishes both articles, and link posts. Up until this point, if you were subscribed to the main RSS feed, or [follow *The Bold Report* on Twitter](https://twitter.com/theboldreport), there was really no way of distinguishing the difference without clicking on the link, or reading the post. If it was frustrating to me, I'm sure some of you felt the same.

Now, all articles have the ♨ symbol before the title, and those that don't, are links. How did I do this? It's actually quite simple.

{% highlight xml %}

{% raw %}
{% for post in site.posts %}
  {% if post.custom_type == 'post' %}
    <entry>
      <id>http://theboldreport.net{{ post.id }}</id>
      <link type="text/html" rel="alternate" href="http://theboldreport.net{{ post.url }}"/>
      <title>♨ {{ post.title }}</title>
      <published>{{ post.date | date_to_xmlschema }}</published>
      <updated>{{ post.date | date_to_xmlschema }}</updated>
      <author>
        <name>Tim Smith</name>
        <uri>http://ttimsmith.com/</uri>
      </author>
      <content type="html">{{ post.content | xml_escape }}</content>
    </entry>

  {% elsif post.custom_type == 'link' %}
    <entry>
      <id>http://theboldreport.net{{ post.id }}</id>
      <link type="text/html" rel="alternate" href="http://theboldreport.net{{ post.url }}"/>
      <title>{{ post.title }}</title>
      <published>{{ post.date | date_to_xmlschema }}</published>
      <updated>{{ post.date | date_to_xmlschema }}</updated>
      <author>
        <name>Tim Smith</name>
        <uri>http://ttimsmith.com/</uri>
      </author>
      <content type="html">{{ post.content | xml_escape }}</content>
    </entry>
  {% endif %}
{% endfor %}
{% endraw %}
{% endhighlight %}

Let me know if you have any questions. If you'd like to see the whole `atom.xml`, [here's the source code](https://github.com/ttimsmith/theboldreport.net/blob/master/atom.xml). I hope this improves the reading experience ever so slightly.
