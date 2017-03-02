---
id: 6452
title: ZURB Foundation
date: 2016-01-08T22:57:47+00:00
author: Mathias Wellner
layout: post
guid: 'http://www.mwellner.de/?p=6452&#038;lang=en'
permalink: /2016/01/08/zurb-foundation/?lang=en
image: /wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2-150x95.jpg
categories:
  - software development
tags:
  - bootstrap
  - foundation
  - framework
  - front-end
  - zurb
---
In the past week, I explored <a href="http://foundation.zurb.com/" title="Foundation" target="_blank">Foundation</a>, the &#8220;most advanced responsive front-end framework in the world&#8221; &ndash; a bold statement. 

<div id="attachment_6455" style="width: 844px" class="wp-caption aligncenter">
  <img src="http://www.mwellner.de/wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2.jpg" alt="Foundation 6" width="834" height="526" class="size-full wp-image-6455" srcset="http://www.mwellner.de/wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2.jpg 834w, http://www.mwellner.de/wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2-350x221.jpg 350w, http://www.mwellner.de/wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2-238x150.jpg 238w, http://www.mwellner.de/wp-uploads/2016/01/foundation-6-released-and-other-javascript-news-496468-2-150x95.jpg 150w" sizes="(max-width: 834px) 100vw, 834px" />
  
  <p class="wp-caption-text">
    Foundation 6
  </p>
</div>

### What is a responsive front-end framework?

A responsive website displays its content on any device size in a meaningful way. Imagine a horizontal navigation menu, which is perfect on a large screen. That same menu would look totally crammed on a mobile phone screen. Therefore the site switches to a compact version of the same menu, e.g. with a button that extends. The same principle goes for textual content, which can be multi-column on large screens and single-column on small screens. 

In the end, front-end frameworks provide a number of building blocks that define the look and feel of a website. There is a big number of such frameworks, <a href="http://getbootstrap.com/" title="Bootstrap" target="_blank">Bootstrap</a> is surely the most popular one, but there are various top-x lists (e.g. <a href="http://www.hotscripts.com/blog/top-10-frontend-development-frameworks/" title="Top 10 Frontend Development Frameworks" target="_blank">Top 10 Front-end Development Frameworks</a>). The choice of a framework is therefore not an easy one. 

I focussed on Foundation, with a short look on Bootstrap on the last day. Both frameworks are sophisticated frameworks with a large community behind. They offer responsive grid classes. 

### Grid system

One of the most common tasks is to define the responsive behaviour by means of grid columns. A grid row contains 12 columns, each grid element can spread over a number of those 12 columns. And with adding prefixes for small, medium or large screens, the responsive behaviour is already defined. 

**Foundation**

<pre name="code" class="html">&lt;div class="row"&gt;
  &lt;div class="small-2 large-4 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
  &lt;div class="small-4 large-4 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
  &lt;div class="small-6 large-4 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
  &lt;div class="large-3 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
  &lt;div class="large-6 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
  &lt;div class="large-3 columns"&gt;&lt;!-- ... --&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

**Bootstrap**

<pre name="code" class="html">&lt;div class="row"&gt;
  &lt;div class="col-xs-12 col-md-8"&gt;.col-xs-12 .col-md-8&lt;/div&gt;
  &lt;div class="col-xs-6 col-md-4"&gt;.col-xs-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;

&lt;div class="row"&gt;
  &lt;div class="col-xs-6 col-md-4"&gt;.col-xs-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-xs-6 col-md-4"&gt;.col-xs-6 .col-md-4&lt;/div&gt;
  &lt;div class="col-xs-6 col-md-4"&gt;.col-xs-6 .col-md-4&lt;/div&gt;
&lt;/div&gt;
</pre>

Although the functionality is very much the same, the Foundation syntax is easier to read and understand than the Bootstrap syntax. 

The Foundation grid also offers more features, namely the block grid. Imagine you need five evenly-spaced columns. That is impossible to achieve with the standard 12-column grid. But using the <a href="http://foundation.zurb.com/sites/docs/grid.html#block-grids" title="Block grids" target="_blank">block grid</a>, this task is quite easy to achieve. In the new version 6, Foundation has introduced the <a href="http://foundation.zurb.com/sites/docs/flex-grid.html" title="Foundation Flex Grid" target="_blank">flex grid</a>, using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" title="Using CSS flexible boxes" target="_blank">flexbox</a> capabilities, which make some alignment scenarios much easier to achieve. Just consider the nightmare of vertical alignment of horizontally aligned items. 

### Navigation

Foundation offers quite some menu versions. The <a href="http://foundation.zurb.com/sites/docs/responsive-navigation.html" title="Responsive navigation" target="_blank">responsive navigation</a> pattern is the most advanced one, but I found it a little difficult to adapt to the needs of the prototype. Just take a look at the markup. 

<pre name="code" class="html">&lt;ul class="vertical menu" data-responsive-menu="drilldown medium-dropdown" style="width: 300px;"&gt;
  &lt;li class="has-submenu"&gt;
    &lt;a href="#"&gt;Item 1&lt;/a&gt;
    &lt;ul class="vertical submenu menu" data-submenu id="m2"&gt;
      &lt;li class="has-submenu"&gt;
        &lt;a href="#"&gt;Item 1A&lt;/a&gt;
        &lt;ul class="vertical submenu menu" data-submenu id="m3"&gt;
          &lt;li&gt;&lt;a href="#"&gt;Item 1A&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Item 1B&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Item 1C&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Item 1D&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Item 1E&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Item 1B&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li class="has-submenu"&gt;
    &lt;a href="#"&gt;Item 2&lt;/a&gt;
    &lt;ul class="vertical submenu menu" data-submenu&gt;
      &lt;li&gt;&lt;a href="#"&gt;Item 2A&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Item 2B&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li class="has-submenu"&gt;
    &lt;a href="#"&gt;Item 3&lt;/a&gt;
    &lt;ul class="vertical submenu menu" data-submenu&gt;
      &lt;li&gt;&lt;a href="#"&gt;Item 3A&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Item 3B&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

So I used just basic <a href="http://foundation.zurb.com/sites/docs/visibility.html" title="Visibility classes" target="_blank">visibility classes</a> to quickly solve the challenge of the prototype. 

### Forms

The form implementation went quite smoothly, as Foundation provides minimal styling for the normal <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" title="<form>" target="_blank">HTML form</a> elements. 

### Conclusion

I enjoyed working with Foundation a lot. It seems to be a well-elaborated, feature-rich and customizable framework. It is surely a matter of personal taste, but I liked it more than Bootstrap.