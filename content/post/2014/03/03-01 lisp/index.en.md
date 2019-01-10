---
title: First Steps with Scheme and Git
date: 2014-03-01T11:17:47+00:00
lastmod: 2018-06-30T22:29:06+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - git
  - lisp
---
Today, I installed [Git](http://en.wikipedia.org/wiki/Git_%28software%29), joined [github.com](http://github.com) and published my first two code snippets in [Scheme](http://en.wikipedia.org/wiki/Scheme_%28programming_language%29) ([Lisp](http://en.wikipedia.org/wiki/Lisp_programming_language) dialect). 

The main reason to study Scheme is the book [Structure and Interpretation of Computer Programs](http://mitpress.mit.edu/sicp/), a computer science classic. And the authors use Scheme to illustrate the concepts throughout the book. The language has a very strange syntax. To illustrate this, I present proudly my first programming exercise, an implementation of [Newton&#8217;s method](http://en.wikipedia.org/wiki/Newton%27s_method) to iteratively determine the cube root of a number (also available with syntax highlighting [on github](https://github.com/mwellner/lisp/blob/master/cbrt.scm)). 

You want to determine the cube root of _x_, the variable _guess_ will be modified until it&#8217;s third power is pretty close to _x_.

<pre name="code" class="c#">; Newton method to determine cubic root

(define (cbrt-iter guess x)
  (if (good-enough? guess x)
    guess
    (cbrt-iter (improve guess x) x)))

(define (improve guess x)
  (/ (+
       (/ x (square guess))
       (* 2 guess))
     3))

(define (good-enough? guess x)
  (&lt; (abs (- (* guess (square guess)) x))
    0.00001))

(define (cbrt x)
  (cbrt-iter 1.0 x))
</pre>

Basically, brackets are everything. The expression (+&nbsp;1&nbsp;1) adds 1 and 1. With _define_, you can declare a variable or function. It takes some time to get used to. But twisting my brain is a good exercise and hopefully will help me to understand also some higher-level concepts. 

The second part of this evening session was installing Git and setting it up to work with my github account. With Ubuntu and some good tutorials, this was easy. It all came down to a few _apt-get install_ commands. My Linux machine is really a good working environment for these kind of tasks.