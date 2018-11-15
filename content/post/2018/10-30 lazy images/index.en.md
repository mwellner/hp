---
date: "2018-10-30T19:16:21"
lastmod: 2018-10-31T00:31:35+00:00
title: Image Handling with Hugo
author: Mathias Wellner
categories:
  - software
tags:
  - hugo
  - weblog
---
I like photos and use them extensively on this site. But images have a price, as images can be quite large and every image needs to be fetched by a request. And so, image-heavy pages take quite some time to load. In the past weeks, I have introduced lazy-loading images on this weblog and would like to share how I did this. The examples are done in [Hugo](https://gohugo.io/), a static site generator. 
<!--more-->

### Goal

1. Deliver the right image size for each device, ranging from cell phones to high-resolution retina displays
2. Reduce initial loading time
3. Do not load images which are initially invisible

### Approach

I have combined [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) and previews with [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), demonstrated with [hugo](https://gohugo.io/) and JavaScript.

#### Responsive images

Hugo allows the definition of [page resources](https://gohugo.io/content-management/page-resources/), which I have used for all images. Having defined images as page resources, we can pass them to partials, resize them, and convert them to [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs). 

In the front matter section (here with YAML): 
{{<highlight yml "linenos=table">}}
resources:
  - { name: image1, src: image1.jpg, title: Description of the image }
{{</highlight>}}

Within a page or shortcode definition, the image page resource can now be used for a _srcset_ definition. The example shows my responsive image shortcode, which gets a resource name as input. The image _src_ attribute is set to the data URL of the small version (32px). 

{{<highlight html "linenos=table">}}
{{ $image := .Page.Resources.GetMatch (.Get "name") }}
{{ $image32 := $image.Resize "32x" }}
{{ $image320 := $image.Resize "320x" }}
{{ $image800 := $image.Resize "800x" }}
{{ $image1300 := $image.Resize "1300x" }}

<figure>
  <img class="lazy" sizes="100vw" 
    src="data:image/jpeg;base64,{{ $image32.Content | base64Encode }}" 
    data-srcset="{{ $image320.RelPermalink }} 320w, {{ $image800.RelPermalink }} 800w, {{ $image1300.RelPermalink }} 1300w"
    {{ with $image.Title }} alt="{{.}}" {{ end }}
  >
  {{ with $image.Title }}
  <figcaption>{{.}}</figcaption>
  {{ end }}
</figure>
{{</highlight>}}

#### Lazy loading images

I found inspiration in the article [Lazy loading images](https://imagekit.io/blog/lazy-loading-images-complete-guide/). The JavaScript code is from there with some slight modifications. I have added the _srcset_ attribute change and removed the _src_ attribute change, as I am using data URIs for _src_. This is pure JavaScript without any framework included, what makes it usable in any environment. The relatively new [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is only used when available.

{{<highlight js "linenos=table">}}
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.srcset = image.dataset.srcset;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if (lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.srcset = img.dataset.srcset;
                img.classList.remove('lazy');
              }
          });
          if (lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      lazyload();
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })  
{{</highlight>}}

The main advantage of this approach is that small previews are loaded with the the page itself, embedded as data URLs inside of the HTML. The srcset attribute is initially inactive and only triggered for visible images later on, when the JavaScript executes.

### Browser compatibility

There is an issue with Internet Explorer 11, which does not support [Array.prototype.forEach()](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). 