---
title: LabVIEW revisited
date: 2011-05-19T22:01:07+00:00
lastmod: 2019-09-09T23:48:50+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - labview
  - programming
---
In the early days of my time as PhD student, I had the forced pleasure to work with [LabVIEW](http://de.wikipedia.org/wiki/LabVIEW). In contrast to text-based programming languages (the vast majority), LabVIEW uses a graphical approach, pleasing the aesthetic mind, but looking extremely crammed and confusing for larger projects. 
<!--more-->

In my recent project, LabVIEW caught me again. Luckily we use it in combination with a scripting language, which implements the device logic, while LabVIEW is confined to the user interface. This makes it bearable, but very repetitive. And repetitive means mouse clicks and movements &ndash; a lot of mouse clicks and movements. 

The event structure caused me also a lot of pain. Back in 2005 I really wanted it, a piece of code that is only executed when the user clicks a button or changes a setting. The alternative is polling, asking for the value of the user control again and again. Anyways, they introduced the event structure, but you can&#8217;t place it just somewhere. It made my program block, it didn&#8217;t work at all, was never executed &ndash; all that kind of problems you run into as programmer. But I solved it and made it work.