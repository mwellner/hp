---
title: Modular JavaScript 2
date: 2014-11-12T19:51:05+00:00
lastmod: 2020-01-13T21:38:50+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - javascript
---
On our company website, as on many others, we have a growing JavaScript code base. We are now taking the effort to develop a module system to make it easier to structure the code. 
<!--more-->

Our first decision was to go with a syntax similar to <a href="http://requirejs.org/docs/whyamd.html" title="AMD" target="_blank">Asynchronuous Module Definition</a> (AMD). But in contrast to AMD syntax, we use a synchronuous approach for loading the modules and use a module identifier. We will also provide the option to initialize modules on an event. 

While implementation is still ongoing, I already enjoy the benefit of a much more organised way to use JavaScript. And I am looking forward to the upcoming standard ECMA 6, which will provide module imports and exports as core language features (see article <a href="http://www.2ality.com/2013/07/es6-modules.html" target="_blank">ECMA6Script modules: the future is now</a>).