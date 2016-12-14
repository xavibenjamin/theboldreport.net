---
layout: post
title: Heroku Redirects with rack-rewrite
categories: articles best
custom_type: post
tags: [Development, Jekyll, Jekyll on Heroku]
subtitle: Moved this blog to Heroku, now what?
---
A month ago, [I moved this blog over to Heroku](/2015/06/hosting-a-jekyll-site-on-heroku/), and I’ve been really happy. It’s made writing and deploying a lot easier. But I needed a way to redirect the feeds to FeedPress and display my nice 404 page, which I had no idea how to do.

I did some digging and found out I could use `Rack::Rewrite`. Understanding how exactly to get this to work took me longer than I would’ve liked, but I finally figured it out.

## Installation
First you’ll need to add the `Rack::Rewrite` gem to your `Gemfile`:

```ruby
# Gemfile
source "https://rubygems.org"
gem 'rack-rewrite'
```

Once you run `bundle install` it’s time to write our rules:

```ruby
# config.ru
require 'rack/rewrite'
use Rack::Rewrite do
  r302 '/atom.xml', 'http://feedpress.me/theboldreport', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
  r302 '/atom.articles.xml', 'http://feedpress.me/theboldreport-articles', :if => Proc.new { |rack_env|
    rack_env['HTTP_USER_AGENT'] != 'FeedPress'
  }
end
```

The code above redirects the atom feed to the FeedPress feed unless the User Agent is FeedPress.[^1] It’s important to note, that you want to put your redirects at the top of your file.[^2]

## Now, for the 404 Page
For this, we’ll use a Rack middleware called `Rack::NotFound`. First we need to add the `rack-contrib` gem to our `Gemfile`. If you followed the steps from my move to Heroku, you already have this gem installed.

```ruby
# Gemfile
source "https://rubygems.org"
gem 'rack-contrib'
```

Run `bundle install` and we’ll add two more lines to our `config.ru` file.

```ruby
# config.ru
require 'rack/contrib/not_found'
run Rack::NotFound.new('/path/to/your/404/index.html')
```

What took me a few weeks to figure out, is actually quite simple to do. You can check out the [Rack::Rewrite project page](https://github.com/jtrupiano/rack-rewrite) for documentation. The `rack-contrib` documentation is kind of non-existent, but [it’s also on GitHub](https://github.com/rack/rack-contrib) if you want to read through it. Hope you find this helpful!

[^1]: FeedPress still needs access to the original feed, or else it becomes a never ending loop of redirects and the feed would be blank.

[^2]: I honestly don’t know if this makes a difference, but I had them lower in the file and they weren’t working so… I don’t know.
