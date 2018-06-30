---
title: WordPress and og:image
date: 2015-10-24T11:50:25+00:00
lastmod: 2018-06-30T20:30:30+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - facebook
  - wordpress
---
My WordPress-powered blog automatically posts new articles to Facebook. However, the article image was somehow lost on the way, leading to rather unattractive Facebook posts. 
<!--more-->

### Digging Into the Issue

It turned out that the problem was a wrong, relative image URL in the og:image meta tag (<a href="http://davidwalsh.name/facebook-meta-tags" title="Facebook Open Graph META Tags" target="_blank">more on Facebook Open Graph META Tags</a>). When sharing a post, Facebook uses these tags to create the post. And since the image was defined with a relative path, it was simply skipped. 

But why does WordPress use a relative image URL? 

Out set-up is a multi-user WordPress installation on Linux. We used the settings _$upload_path_ and _$upload\_url\_path_ in the user-specific settings to specify the location of the WordPress _uploads_ folder. And there is one WordPress setting (complete path to files), that must match the $upload\_url\_path, located in the WordPress admin panel at settings\media. I changed that setting to contain the server URL and everything should be fine now.