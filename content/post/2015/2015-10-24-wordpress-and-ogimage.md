---
title: WordPress and og:image
date: 2015-10-24T11:50:25+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - www
tags:
  - facebook
  - meta
  - og:image
  - share
  - social
  - tag
  - Wordpress
---
### The Problem

My WordPress-powered blog automatically posts new articles to Facebook. However, the article image was somehow lost on the way, leading to rather unattractive Facebook posts. 

<div id="attachment_6319" style="width: 524px" class="wp-caption aligncenter">
  <img src="http://www.mwellner.de/wp-uploads/2015/10/Firefox_Screenshot_2015-10-24T09-29-34.857Z.png" alt="Automatic facebook post without wordpress article image" width="514" height="245" class="size-full wp-image-6319" srcset="http://www.mwellner.de/wp-uploads/2015/10/Firefox_Screenshot_2015-10-24T09-29-34.857Z.png 514w, http://www.mwellner.de/wp-uploads/2015/10/Firefox_Screenshot_2015-10-24T09-29-34.857Z-350x167.png 350w, http://www.mwellner.de/wp-uploads/2015/10/Firefox_Screenshot_2015-10-24T09-29-34.857Z-250x119.png 250w, http://www.mwellner.de/wp-uploads/2015/10/Firefox_Screenshot_2015-10-24T09-29-34.857Z-150x71.png 150w" sizes="(max-width: 514px) 100vw, 514px" />
  
  <p class="wp-caption-text">
    Automatic facebook post with missing wordpress article image
  </p>
</div>

### Digging Into the Issue

It turned out that the problem was a wrong, relative image URL in the og:image meta tag (<a href="http://davidwalsh.name/facebook-meta-tags" title="Facebook Open Graph META Tags" target="_blank">more on Facebook Open Graph META Tags</a>). When sharing a post, Facebook uses these tags to create the post. And since the image was defined with a relative path, it was simply skipped. 

But why does WordPress use a relative image URL? 

Out set-up is a multi-user WordPress installation on Linux. We used the settings _$upload_path_ and _$upload\_url\_path_ in the user-specific settings to specify the location of the WordPress _uploads_ folder. And there is one WordPress setting (complete path to files), that must match the $upload\_url\_path, located in the WordPress admin panel at settings\media. I changed that setting to contain the server URL and everything should be fine now.