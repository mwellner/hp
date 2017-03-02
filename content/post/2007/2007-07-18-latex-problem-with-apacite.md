---
id: 726
title: LaTeX problem with apacite
date: 2007-07-18T19:23:15+00:00
author: Mathias Wellner
layout: post
guid: http://blogs.ethz.ch/mwellner/2007/07/18/latex-problem-with-apacite/
permalink: /2007/07/18/latex-problem-with-apacite/
podPressPostSpecific:
  - 's:264:"s:255:"a:6:{s:15:"itunes:subtitle";s:15:"##PostExcerpt##";s:14:"itunes:summary";s:15:"##PostExcerpt##";s:15:"itunes:keywords";s:17:"##WordPressCats##";s:13:"itunes:author";s:10:"##Global##";s:15:"itunes:explicit";s:7:"Default";s:12:"itunes:block";s:7:"Default";}";";'
---
After spending 2 hours in searching an error in my publication draft, I would like to share my gained knowledge. The problem was, that using the _apacite_ package caused an error, the second citation command would not have the correct number of parameters. It turned out, that the _babel_ package was the problem, more exactly the order of _usepackage_ commands. First the _babel_ package, afterwards the _apacite_ package &#8211; that was the solution.