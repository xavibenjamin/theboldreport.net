---
layout: post
title: Signed Git Commits with Tower by Aaron Parecki
categories: link
custom_type: link
link_url: https://aaronparecki.com/2016/07/29/10/git-tower
tags:
  - development
  - git
date: 2016-09-13 10:38
---
Aaron Parecki:

> My favorite Git client is [Tower](https://www.git-tower.com/). I wanted to find a way to sign my git commits despite that [not being a supported feature](https://twitter.com/gittower/status/751065612517044224) of Tower. Turns out it only took a couple configuration options to make it work.

I also happen to love Tower, so setting things up so that I could do signed commits easily is very nice. However, there’s no way—that I know of—to automatically sign git tags so you’ll have to do that from the command line.

```shell
# First you’ll sign the tag
$ git tag -s v.1.1.0

# Then you’ll verify the tag
$ git tag -v v1.1.0
```

To be honest though, the difficulty with GPG signing from Tower has made me use the command line more. I hope they add this feature because switching back and forth to do this is cumbersome.
