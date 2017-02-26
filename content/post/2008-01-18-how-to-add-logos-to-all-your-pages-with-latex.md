---
id: 782
title: How to add logos to all your pages with LaTeX
date: 2008-01-18T17:11:04+00:00
author: Mathias Wellner
layout: post
guid: http://blogs.ethz.ch/mwellner/2008/02/02/how-to-add-logos-to-all-your-pages-with-latex/
permalink: /2008/01/18/how-to-add-logos-to-all-your-pages-with-latex/?lang=en
podPressPostSpecific:
  - 's:264:"s:255:"a:6:{s:15:"itunes:subtitle";s:15:"##PostExcerpt##";s:14:"itunes:summary";s:15:"##PostExcerpt##";s:15:"itunes:keywords";s:17:"##WordPressCats##";s:13:"itunes:author";s:10:"##Global##";s:15:"itunes:explicit";s:7:"Default";s:12:"itunes:block";s:7:"Default";}";";'
tags:
  - header
  - LaTeX
  - logo
  - page
---
Given the problem that you want to put one or several logos in your document header, I found the following solution. All the lines have to be inserted in the document preamble, meaning before the \begin{document} line. You will need your logos in the appropriate format (in most cases EPS, pdflatex requires PDF, PNG, or JPG) in your document folder. I will assume logo1.eps and logo2.eps are the file names for the two logos. You will also need the graphicx package to actually include your graphic files.

<pre name="code" class="latex">\usepackage{fancyhdr}
\addtolength{\headheight}{1.5cm} % make more space for the header
\pagestyle{fancyplain} % use fancy for all pages except chapter start
\lhead{\includegraphics[height=1.3cm]{logo2}} % left logo
\rhead{\includegraphics[height=1.3cm]{logo1}} % right logo
\renewcommand{\headrulewidth}{0pt} % remove rule below header
</pre>