---
title: How to add logos to all your pages with LaTeX
date: 2008-01-18T17:11:04+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - science
tags:
  - latex
---
Given the problem that you want to put one or several logos in your document header, I found the following solution. All the lines have to be inserted in the document preamble, meaning before the \begin{document} line. You will need your logos in the appropriate format (in most cases EPS, pdflatex requires PDF, PNG, or JPG) in your document folder. I will assume logo1.eps and logo2.eps are the file names for the two logos. You will also need the graphicx package to actually include your graphic files.

<pre name="code" class="latex">\usepackage{fancyhdr}
\addtolength{\headheight}{1.5cm} % make more space for the header
\pagestyle{fancyplain} % use fancy for all pages except chapter start
\lhead{\includegraphics[height=1.3cm]{logo2}} % left logo
\rhead{\includegraphics[height=1.3cm]{logo1}} % right logo
\renewcommand{\headrulewidth}{0pt} % remove rule below header
</pre>