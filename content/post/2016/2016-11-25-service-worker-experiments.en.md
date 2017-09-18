---
title: Service Worker Experiments
date: 2016-11-25T15:54:04+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - ajax
  - fetch
  - hide
  - ignore
  - request
  - service worker
  - url
  - visibility
---
I am currently experimenting with service workers (see 
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers" target="_blank">Using 
Service Workers</a> or <a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers" target="_blank">Service 
Workers: an Introduction</a>). One scenario is to provide mock data when no connection to an external service is available. 
And by theory, service workers should be able to intercept any request made by the website. 

But there is one exception. If you fetch data with <a href="http://api.jquery.com/jquery.ajax/" target="_blank">jQuery.ajax()</a> 
function and use _async: false_, the service worker will not be able to intercept any of those requests. I am not quite sure 
about the underlying cause, but wanted to share my findings.