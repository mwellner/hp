---
title: LaTeX problem with apacite
date: 2007-07-18T19:23:15+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - latex
---
After spending 2 hours in searching an error in my publication draft, I would like to share my gained knowledge. The problem was, that using the _apacite_ package caused an error, the second citation command would not have the correct number of parameters. It turned out, that the _babel_ package was the problem, more exactly the order of _usepackage_ commands. First the _babel_ package, afterwards the _apacite_ package &#8211; that was the solution.