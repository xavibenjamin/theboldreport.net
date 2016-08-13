# The Bold Report

[![Code Climate](https://codeclimate.com/github/ttimsmith/theboldreport.net/badges/gpa.svg)](https://codeclimate.com/github/ttimsmith/theboldreport.net)

*The Bold Report* is powered by [Jekyll](http://jekyllrb.com/). Feel free to browse the code and report any issues.

You're free to use whatever you'd like, **however**, posts found in the `_drafts` or `_posts` folder are copyright of Timothy B. Smith, and may not be used without proper attribution. Of course, the logo is also my copyright… you know what you can copy/paste and what you shouldn't. Be nice.

## Getting Started

```
$ git clone git@github.com:smithtimmytim/theboldreport.net.git
$ cd theboldreport.net
$ bundle install
$ bundle exec jekyll serve -w -o
```

Voilà!

## Contributing

Here are some guidelines for contributing to *The Bold Report*. First time contributors can open Pull Requests, once you’ve written a few times, I’ll add you as a contributor to this repo.

### Writing CSS

Run the CSSComb profile in each (S)CSS file to make sure it's written according to guidelines. Other than organization of rules, selectors are written in the BEM syntax.

### Writing Posts

Posts are written in two major formats: links and articles. You can distinguish them easily by using the YAML front matter.

```yaml
---
layout: post
title: Apple iPhone Touchscreen Faster than Android Devices

# the category is either “links” or “articles”
categories: links

# custom type is either “link” or “post”
custom_type: link

# this is only needed on link posts
link_url: http://venturebeat.com/2013/09/19/apples-iphone-5-touchscreen-is-2-5-times-faster-than-android-devices/

date: '2013-09-23 14:17:25'
tags: Apple
---
``` 

The first line of an article post is formatted as a subheader, so keep that in mind when writing out your article. You can [reference this post](https://theboldreport.net/2016/06/pull-list-for-june0816/) to see what that looks like.

#### Code Samples
Code is written with GitHub Formatted Markdown. 

#### Images
Write them using the custom function.

```liquid
{% figure classname path/to/image.png “Caption Goes Here“ %}
```

#### Everything Else

If you need anything else, you can [check the styleguide](https://theboldreport.net/styleguide/). It’ll give you a good feel for how I use different components on the site.
