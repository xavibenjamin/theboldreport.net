---
layout: post
title: You're Doing the Mac Dock Wrong | Snazzy Labs
categories: links
custom_type: link
link_url: https://www.youtube.com/watch?v=ZaxkqlRE-NI
tags: [macOS, Nerdiness]
date: 2016-10-03 12:51
---

I found this great YouTube video to change the animation speed of the dock on macOS. Hiding the dock is great for screen real estate, but the animation is slow. Thankfully you can easily fix this with two commands in the terminal. I figured I'd write it out here so it's easier for you to copy paste.

Open your terminal and paste the following command:

```sh
$ defaults write com.apple.dock autohide-time-modifier -int 0
```

This command allows you to enter an integer altering the speed of the animation. It can be any number. Experiment with it until you find the speed you like.

To restart the dock and see the new animation speed, enter this:

```sh
$ killall Dock
```

That's it! Hope you find this useful!