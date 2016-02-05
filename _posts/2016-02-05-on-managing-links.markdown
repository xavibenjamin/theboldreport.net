---
layout: post
title: On Managing Links
categories: articles
custom_type: post
date: 2016-02-05 07:33
---
Managing links has been a huge problem… until recently. Here's my new-ish workflow that fixed it.

First off, let's just acknowledge how #firstworldproblem-sy this is. They're just links right? But I come across a lot of stuff on the web, and there's some of it that I need to categorize. Links usually fall into one of two categories:

1. **Link's I want to write about and/or archive**     
A lot of the content here on *The Bold Report* are link posts. The link posts are always ones that I find interesting, and in many respects I use it as an archival system.

2. **Link's I need to come back to on my Mac**     
Most of my reading is done on my iPad, so I needed a better way than flooding my email with a ton of links.

So what's my system? I use [Pocket](https://getpocket.com/) and [IFTTT](https://ifttt.com). Let me explain.

## Links I'm Going to Write About
When I've read something interesting and want to write about it, I save the link to Pocket and tag it `link`. IFTTT watches Pocket for items marked `link`, and creates a text file in Dropbox with all the YAML front matter it needs. Here's what the recipe looks like: 

{% figure extendout /uploads/2016/02/pocket-to-dropbox.jpg "Pocket to Dropbox IFTTT Recipe" %}

The beauty of this system is that these links are accessible from any device. If all I have is my iPad, I can write. If all I have is my phone, I can still write. The setup leaves me no excuse not to write… unless I haven't seen anything interesting of course. And recently, [when I figured out how to publish from iOS](/Publishing-To-Jekyll-From-iOS/), I've ended up writing more and publishing sooner.

It also saves a lot of time. In the past, I'd email the link to myself. This cluttered my inbox, and sometimes I'd forget about the link. This new workflow drops a file with all the info I need into my writing folder, so at anytime, I can check the folder and see what links to write about. At any given time, I usually have about five to seven links in there. I have a solid writing pipeline, and it usually doesn't run out.

## Links I Want to Come Back To
Again, Pocket and IFTTT do the heavy lifting here. I save the link to Pocket and tag it `mac`. IFTTT then watches for that tag, and adds the item to an email digest that's emailed daily at 7am. If there are no new links, no email is sent. Here's what the recipe looks like:

{% figure extendout /uploads/2016/02/pocket-to-email.jpg "Pocket to Email Digest Recipe." %}

Sure, someone might not want yet another email, but I honestly don't get much. Instead of just having a barrage of emails with links to myself, I have one email with all the links from the night before.

## That's All Folks
That's my workflow. It saves me time, keeps my links organized, and gives me no excuse not to write. If you have questions about the setup, you know where to find me.