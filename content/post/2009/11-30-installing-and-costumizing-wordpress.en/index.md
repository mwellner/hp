---
title: Installing and Customizing WordPress
date: 2009-11-30T00:00:00+00:00
lastmod: 2017-10-02T14:48:53+00:00
author: Mathias Wellner
categories:
  - weblog
tags:
  - wordpress
---
It's been a week since I moved my Weblog from [ETH Weblog services](http://blogs.ethz.ch) to my own server. This move has been a great success so far. In this post I would like to share some initial problems and how I overcame them and which plugins I decided to use.

**Installation**

Although WordPress claims it has a 5 Minute installation, this took much longer for me. The reason was that I had to install the MySQL database and the PHP support for MySQL on our server. But that was still not enough, the webserver had to be restarted for these changes to take effect. This is the complete list of commands for our server (Debian-Linux, Apache), be aware that you need sudo rights to do all of these operations.

`<br />
<strong>user@server:~$</strong> sudo apt-get install mysql-client<br />
<strong>user@server:~$</strong> sudo apt-get install php5-mysql<br />
<strong>user@server:~$</strong> sudo /etc/init.d/apache2 restart<br />
` 

After these preparations, the actual installation was easy and fast. I downloaded the most recent WordPress version, unpacked it and copied it in my server&#8217;s www directory. Then I opened the wp-admin/install.php script with a web browser and it worked in five minutes from there.

**Selecting a theme**

The first thing I really wanted was a cool theme. I wanted to have at least a two-column design with different backgrounds for the posts and the sidebar(s). The sidebar needed to be costumizable with widgets. And it should look cool, of course! After trying a lot of promising themes, I ended up with [eos](http://wordpress.org/extend/themes/eos) by [sebastianrs](http://www.srssolutions.com/en/).

**Experimenting with plugins**

The real power of WordPress are the many plugins, developed by a committed community. As in Firefox and Thunderbird, you can easily add and configure plugins for all sorts of functionality. I think that plugins are a major advantage of those programs which use it, because it gives users the ability to add forgotten functions.

[Akismet](http://wordpress.org/extend/plugins/akismet/)

This pre-installed plugin protects your weblog from comment spam. Just like spam emails, spam comments can be automatically inserted in your post comments to advertise websites. And of course you don&#8217;t want that. For me, Akismet did a wonderful job at the old ETH weblog, catching thousands of comments with spam. A must have!

[All in One SEO Pack](http://wordpress.org/extend/plugins/all-in-one-seo-pack/)

SEO means search engine optimization. This plugin does a number of optimizations to make your website easier to access for search engines. If you want to be found, this makes sense.

[Broken Link Checker](http://wordpress.org/extend/plugins/broken-link-checker/)

This plugin looks for broken links or images and produces a list of them for convenient link fixing. Due to a problem while importing my old posts, most links did not work any more. So this list was about 500 entries long! Luckily I could fix most links with the _Search and Replace_ plugin, but I still had to go through loads of posts to fix them all.

[flickrpress](http://wordpress.org/extend/plugins/flickrpress/)

Flickrpress lets you integrate flickr images in posts or as widget in the sidebar. You get a frame around the image and an image caption in that frame. Navigation in the flickr stream is also intuitive, you can select a set, tag or just search for a term and all matching images are displayed for selection.

[Google Integration Toolkit](http://wordpress.org/extend/plugins/google-integration-toolkit/)

This makes your webpage ready for [Google Analytics](http://www.google.com/analytics/) to get detailed statistics, [Google Webmaster Tools](http://www.google.com/webmasters/tools/) to see how your page is indexed by Google and other services.

[Google XML Sitemaps](http://wordpress.org/extend/plugins/google-sitemap-generator/)

This plugin generates XML sitemaps which also makes it easier for you to be found by search engines.

[Podcasting](http://wordpress.org/extend/plugins/podcasting/)

Some of you may enjoy listening to posts instead of reading them on the computer. I am planning to record some of the more elaborate posts and provide them as podcast.

[Search & Replace](http://wordpress.org/extend/plugins/search-and-replace/)

This really saved me a lot of time when I had to correct a huge number of incorrectly imported links. The plugin searches in the database for a string and replaces it with another string. Needless to say that this is a very powerful feature, which could mess things up.

[Sociable](http://wordpress.org/extend/plugins/sociable/)

If you use social software like del.icio.us, twitter or facebook, you can easily refer to posts there by clicking on the appropriate button. So you can share interesting content with them.

WordPress.com Stats

This gives you a selection of usage stats on your dashboard.

[wp-Typography](http://wordpress.org/extend/plugins/wp-typography/)

This plugin improves typography by hyphenation, space control and other stuff. Your text will look better afterwards.

[Yet Another Related Posts Plugin](http://wordpress.org/extend/plugins/yet-another-related-posts-plugin/)

This plugin automatically generates a list of related posts at the end of each post. That is a nice feature if readers want to read something similar. The algorithm works pretty well from my experience, but it can be improved by extensive tagging.