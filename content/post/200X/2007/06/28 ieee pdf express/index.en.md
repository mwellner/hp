---
title: IEEE PDF Express
date: 2007-06-28T21:45:23+00:00
lastmod: 2018-12-09T20:49:11+00:00
author: Mathias Wellner
categories:
  - science
tags:
  - pdf
---
In the past I very often had the impression that most of my friends believe I have an easy life as scientist. And I must admit, most things are cool being a PhD student here in Zurich. But some are not. And one of the most detestable ordeals on my way to scientific achievement is the IEEE pdf express tool. Because you need to get past that to submit a paper for the conference proceedings.
<!--more-->

Imagine you spent weeks and months on something like a optimization or extensive study of a new virtual environment feedback strategy. You worked out all the problems, cheered up your despaired students, tracked down cryptic C++ Compiler errors, spent night after night in the lab to just solve that _last_ problem, kept your boss informed and amused, and finally you have got the graphs and all the knowledge that you want to share with the scientific world. So you select a nice conference (in our field the most important conferences are sponsored by [IEEE](http://www.ieee.org)), and write down your dearly bought knowledge. You even used a template to rule out your inadequate wisdom on the fonts, sizes, margins, and such things. And this is what _pdf express_ sends to you:

{{<blockquote>}}
Dear Mathias Wellner,<br>
<br>
The following PDF has failed the PDF Check:<br>
<br>
Filename: Filename.pdf<br>
<br>
Title: Great Results in Rehabilitation Robotics<br>
<br>
Paper ID: 4491<br>
<br>
Please see the attached report for a list of the specific problem areas.
{{</blockquote>}}

And these are the problems, that the report revealed:

  * Document contains Link annotation(s)
  * Bookmarks found in document
  * Document structure is compressed
  * Font TimesNewRomanPS-BoldMT is not embedded (25x)
  * Font TimesNewRomanPS-ItalicMT is not embedded (76x)
  * Font TimesNewRomanPS-BoldItalicMT is not embedded
  * Font ArialMT is not embedded (35x)
  * Font Arial-ItalicMT is not embedded (4x)
  * Font Helvetica is not embedded (28x)

And the worst thing is, I was not even aware, that I have _links_ in this Word document, let alone _bookmarks_. Is this HTML or a web browser? And all this font embedding crap. I told Distiller to **embed all fonts**. Really all of them, so why doesn't it just listen to me? And in these moments I feel absolutely powerless and insignificant.

Trust me -- being a PhD student is not easy!

Note: I finally found a way to get rid of those error messages. Instead of Word, I used IEEEs LaTeX template and created a PDF that passed this test. Yet, embedding fonts still proved problematic, as fonts of included eps figures were not embedded. I used ps2pdf with the option _prepress_ to get what I wanted. And now it is all neatly integrated in my Makefile.