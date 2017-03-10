---
title: MacBook Pro Running Hot
author: tjdraper
custom_type: post
tags: [MacBook Pro, heat issues, computer performance]
date: 2017-03-09 21:54
---

I've had an interesting history with my MacBook Pros. Most of them have needed to go in for service and have the logic board replaced under warranty or recall at some point during their lifecycle. Call me naive or whatever, but I've had a big breakthrough in the last few days that may make this a thing of the past.

## Performance Issues

My current MacBook Pro is one generation old since the Touch Bar MacBook Pros were released. I picked it up in late 2015 so it's around a year and a half "young" now. Late last year I started having performance issues with my MacBook. At times it would feel sluggish. Writing code (as I do) was painful. The computer was so sluggish, my text editor couldn't keep up with me. I usually work in an IDE that does a lot of code evaluation and makes me aware of issues or problems, lints my code etc. That was even more painful. Sometimes I'd shut my system down and wait 5 minutes and come back. That would often fix the issue for a bit.

The issues have continued to the point where it's difficult to get work done. One thing I noticed was that this mostly happened when I had an external display plugged in, as I often do.

I began to suspect problems with my GPU and I've been on the verge of taking the computer in to the genius bar. The genius bar is so hit or miss these days though. To top it off, I wasn't confident I could replicate the problem for the technicians.

## Monitoring System Temperature

Finally, last week, through the coaxing of a friend of mine, Derek, I purchased, downloaded, and installed [TG Pro](https://www.tunabellysoftware.com/tgpro/). TG Pro allows me to (among other things) monitor fan speed and temperature of various internal components of my system.

I found that everything was very hot overall. Not overheating, but hot. And, consistently, when the temperature was very high is when things would be sluggish and hard to work with. The system was throttling itself down to protect itself.

I knew prior to installing the software that the fans ran pretty much full blast constantly because I could hear them. In my mind, that's just the way it's always been. It was annoying, but the price I payed for having a system I could take anywhere at any time.

## Cleaning It Out

I thought to myself, why would the system be running so hot? So, with the fans running full blast and the system so hot, I felt around at the airflow intake and exhaust. I couldn't feel much. Not a great sign. I've only had this computer a little over a year, but it must be gummed up with dust and gunk, so I'll just take the bottom plate off and blow it out, right? Wrong. Keep in mind I haven't had the need to take the bottom plate off a MacBook Pro since the systems aren’t user upgradeable anymore. I was more than a little irritated to discover that Apple now uses Pentalobe screws to secure the bottom of the MacBook Pro. Because I'm apparently a bad geek, I don't have a tool to work with these stupid screws. So I [purchased one](https://www.amazon.com/gp/product/B009339VAA/) and waited 2 days for my Amazon Prime order to arrive.

After unpacking the new screwdriver, I removed the bottom of my laptop and was horrified to discover that my laptop was gummed up in a major way.[^majorway] It took me at least ten minutes with an air can and some TLC to get this thing cleaned out. I don't work in dusty or strange environments, but I guess it builds up over time in those small spaces.

## Running Cool(er)

After putting my system back together and running it for a few hours, the difference was astounding. The performance issues I've been struggling with for months were completely gone. The fans hardly ever ran more than about half speed, and I could feel the air moving through the intake and exhaust when they were running. Temps were down a good 15° F.[^temp]

## A Laptop Cooler

Armed with this knowlege and information, I've taken an additional step to increase the life of my system and keep it running cooler. I mostly use my laptop like a desktop, while only occasionally taking it to work offsite, a convention, meeting, or what have you. So I purchased a [CM Storm SF-17 Gaming Laptop Cooler](https://www.amazon.com/gp/product/B00E5AEITU/) for my desk. It's a bit of a beast, but it just sits on my desk, and my computer sits on it. The fan is barely audible, and my system fans hardly ever run now. According to my temperature monitor software, I gained another good 7° F to 10° F cooling.

## Moving Forward

I have a pretty decent GPU in this system. It's a AMD Radeon R9 M370X with 2 GB of VRAM. But, while it's a good GPU, I believe it's prone to running hot. Combined with the gunk in the system, it was all a very bad combination of situations for a bad outcome. I plan to blow the gunk out at least once a month now. Combined with my new laptop cooler, I'm hoping to keep this system around much longer without GPU failure—which has been so common for me with Mac laptops in the past.

The moral of the story? Kids, take the back off your laptop and clean it once in a while. Consider a laptop cooler to keep your laptop running even cooler if you work at your desk a lot—and particularly if you use an external display. I believe you'll increase the lifespan of your system if you do.

[^majorway]: I can only hope I have not done permanent damage or majorly shortened the life of this system—I'm not made of money.

[^temp]: Sorry, I can't think in Celcius. I'm a stupid American.
