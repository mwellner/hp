---
title: Little Helpers for Scientific Writing with LaTeX
slug: scientific-writing-latex
date: 2009-11-11T00:49:04+00:00
lastmod: 2018-10-21T13:13:13+00:00
author: Mathias Wellner
categories:
  - latex
---
The document preparation system [LaTeX](http://en.wikipedia.org/wiki/LaTeX) is well-suited for scientific writing. But which additional components are required? In this article, I will describe how to install all the necessary programs and packages on a [Ubuntu-Linux](http://www.ubuntu.com/) system to write publications conveniently. The tutorial equally applies to Debian systems, Windows users have to modify the installation procedures accordingly. 
<!--more-->

**Requirements, Prerequisites**

  1. I would like to use [vim](http://www.vim.org/) as edi­tor.
  2. The result should be a PDF file.
  3. After changes to the manuscript, all necessary processing steps (calling latex, bibtex) shall be triggered automatically with one command. 
  4. I would like to cite my references using [APA Style](http://www.apastyle.org/). That is required by the journal of my choice.

**Text­ Edi­tor VIM**

VIM is a strong tool for editing text. You will find a version on most Linux systems. The [VIM-​​LaTeX-​​Suite](http://vim-latex.sourceforge.net/) is a handy tool for a better integration of LaTeX.
  
{{<highlight bash>}}
$ sudo apt-get install vim
{{</highlight>}}
  
Although there is a vim-latexsuite package, I advise not to use it. Rather install the package directly in your home directory.

**latexmk**

The Perl script latexmk is very useful to automate the document generation. It determines the dependencies (included images and bibliography), checks the status of all files and runs all necessary steps. Without latexmk you have to repeatedly execute the single steps (calling latex, bibtex) to get an output which reflects all changes. 

You have to install Perl (if not already available on your system) and the script itself. Windows users should install [Active Perl](http://www.activestate.com/activeperl/).
  
{{<highlight bash "linenos=table">}}
$ sudo apt-get install perl
$ sudo apt-get install latexmk
{{</highlight>}}
  
Using latexmk for PDF output looks like this:
  
{{<highlight bash>}}
project/directory$ latexmk -pdf dokument.tex
{{</highlight>}}

**bibla­tex**

Although the biblatex package is still beta, I liked the sheer power of it and have used it for my references. Originally I was looking for a solution to use chapter-wise references, but biblatex can do much more and makes reference handling much easier as before. It combines the functionality of a variety of packages.
  
{{<highlight bash>}}
$ sudo apt-get install biblatex
{{</highlight>}}
  
There are new macros for citing references. To make an indirect quote, which is most common for engineers, you would use _\parencite{key}_. The macro _\printbibliography_ creates the list of all cited references. The appearance of the quotes and bibliography is determined by citation styles.
  
{{<highlight latex "linenos=table">}}
\usepackage[style=apa]{biblatex}
\bibliography{bibfile_name}
{{</highlight>}}
  
The APA style is available for biblatex but has to be installed manually. After copying the style files you have to update your texmf tree.
  
{{<highlight bash>}}
$ sudo texconfig rehash
{{</highlight>}}
  
One problem at this stage was an outdated csquotes package. I had to correct that manually as well. 

**Conclusion**

After some work I have a complete system ready for editing my third publication.