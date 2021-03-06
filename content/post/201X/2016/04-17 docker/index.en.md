---
title: Setting up Docker on Ubuntu 15.10
date: 2016-04-17T17:02:43+00:00
lastmod: 2020-02-14T00:14:09+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - ubuntu
---
For the next five days, I will be on an _innovation week_, as my company calls it. I will be away from the daily business and dig into one topic of my own choice, but of course related to current challenges within the company. And since service-oriented architecture is something that moves us in the moment, I chose service scalability as my topic. But for that to work, I need a quick way to set-up services within their own context, making it possible to add more service nodes when needed. And after a quick research, I will use <a href="https://www.docker.com/" title="Docker" target="_blank">docker</a>, another hot topic in the web industry. 

As a working environment, I will use the current version of <a href="http://www.ubuntu.com/" title="Ubuntu" target="_blank">Ubuntu Linux</a>, which has the big advantage, that it supports containerization on the operating system level. And I know the system for quite some time, having a dual-boot system with Linux and Windows on my home computer since ages. For this current challenge, I updated to the current version (15.10) and installed docker. That turned out to be not so easy, so I wished I had known this video before, which describes it all in a very elaborated English and with amply detail. 

I have not spent too much thoughts on the actual application design, but the set-up suggested in the <a href="https://github.com/docker/docker-birthday-3#challenge" title="GitHub - docker birthday challenge" target="_blank">docker birthday challenge</a> seems quite interesting and sufficing.