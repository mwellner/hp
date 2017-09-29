---
title: The future of JavaScript, ECMA 6
date: 2014-10-15T13:43:17+00:00
lastmod: 2017-09-30T00:02:12+00:00
author: Mathias Wellner
categories:
  - tagebuch
---
This are my notes from the JavaScript Days 2014 in Berlin. The session was focussed on a selection of the new features, which are proposed as the new official standard for JavaScript, ECMA 6. It is not released yet, but all major browsers already support part of the features and there are even ways to use the new features already with a precompile step. Examples are [traceur](https://github.com/google/traceur-compiler) from Google, [TypeScript](http://www.typescriptlang.org/) from Microsoft or [Regenerator](https://facebook.github.io/regenerator/) from Facebook. 

The need for an updated version of JavaScript came with the rise of Ajax and thus wide spread use of JavaScript. This made some of the design inadequacies obvious, after all, JavaScript was designed in just two weeks. The current version, which is ECMA 5, already introduced a number of new features to make life easier for developers. 

But the real problem of this language is, that most developers do not spend a lot of time on design, they are jumping quickly into the implementation. JavaScript is tempting to use quickly for just a little DOM manipulation. But with more and more logic being moved to the client, that quick approach leads to badly written and unmaintainable code. 

But back to the new features of ECMA 6. The most prominent one is the introduction of the **class** keyword. JavaScript is class-less by design, instead using prototypes. But the creation of new objects based on existing ones, or inheritance, is quite difficult to achieve. Only lately, **Object.create()** was introduced for this purpose. And still it takes multiple statements to achieve something, which is done with one line in most other languages. In JavaScript, the definition of an object with inheritance, methods and properties are isolated statements, which are not clearly recognizable as belonging to the same entity. Therefore the new class keyword provides a more readable way to achieve the same thing. 

Another addition to the standard are sets and maps. Sets are simple
  
collections of objects, maps key-value collections. Both can be used with the new **for value of object** statement. 

The new destructuring syntax works similar as the definition of arrays or objects, just the other way round. So you can define variables in a similar notation and assign this to an existing array or object to set the values of multiple variables at once and with optional default values. 

Fat arrow functions are also known in other languages, they can be used to define functions in a concise way and have a different binding behavior. 

In addition to the default function level scope isolation, the new keyword **let** enables block scoping. This may be useful, but could also create a lot of confusion due to the dual existence of two concepts. 

The last bigger block was dedicated to [generator functions](http://en.wikipedia.org/wiki/Generator_(computer_programming)). This kind of function can be paused and return their value later. This can be used for asynchronuous programming, in conjunction with the concept of promises. 

So there are a lot of new features, which can make life easier for developers. But it will take some time until those features are supported natively by all major browsers, probably mid or end 2015. Until then you have to use a precompiler.