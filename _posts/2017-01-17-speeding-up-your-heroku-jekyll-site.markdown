---
title: Speeding Up Your Heroku Jekyll Site
custom_type: post
subtitle: Cache the hell out of all the things
tags: [development, jekyll, jekyll on heroku]
date: 2017-01-17 08:03
---

This post is part of a series on [hosting Jekyll with Heroku](/topics/#jekyll-on-heroku).

---

Something I missed about hosting my site on an Apache server, was how easy it was to turn on compression and caching. I finally spent an afternoon a few months ago to figure out how to do that on Heroku. It's actually pretty simple. In fact, it's easier than Apache, it's just that the unknown can be scary sometimes.

## config.ru Is Where the Magic Happens
Open up your `config.ru`, that's where we'll be putting the code. First thing we'll do is to enable `Rack::Deflater`.

```ruby
# config.ru

require 'rack'
use Rack::Deflater
```

This part of the file enables compression on our assets. We'll make that work in the next part.

```ruby
#config.ru

use Rack::TryStatic,
  :gzip => true,
  header_rules: [
    [:all, {'Cache-Control' => 'public, max-age=86400', 'Vary' => 'Accept-Encoding'}],
    [['css', 'js'], {'Cache-Control' => 'public, max-age=604800'}]
  ]
```

The `gzip` part lets us use the compression we enabled earlier, and `header_rules` caches the hell out of everything, so that people don't have to re-download resources.

That's it! With only a few lines of code, you can drastically speed up your site on Heroku.
