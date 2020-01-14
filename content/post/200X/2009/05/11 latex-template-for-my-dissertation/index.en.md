---
title: A LaTeX template for my dissertation
date: 2009-05-11T16:49:25+00:00
lastmod: 2020-01-13T21:38:49+00:00
author: Mathias Wellner
categories:
  - science
tags:
  - latex
---
In the recent weeks I have spent a lot of time to polish the draft of my dissertation with the help of LaTeX. In this article, I would like to share the packages I used. This list of packages comes close to a template, but you must still decide which package you need.
<!--more-->

In general, I wanted to have a [pdfTeX](http://de.wikipedia.org/wiki/PdfTeX)-compliant document.

**1. KOMA Script**

_documentclass[DIV=calc, 11pt, parskip=half]{scrreprt}_

The basis for my dissertation is the _report_ class of KOMA Script. I will change this to _book_ once I come close to printing, but for reviewing _report_ is fine. It is intended for European formats (A4 is the default paper size).

I let LaTeX compute the page margins (DIV=calc). This is the easiest way to guarantee good readability for different font sizes. The basic idea is that a certain number of letters per line is optimal for reading. This leads to rather large margins but good readability. The font size is specified with _11pt_ and _parskip=half_ makes LaTeX separate paragraphs with space between them (indenting is the default).

**2. Language-specific packages**

_usepackage[english]{babel}_ 

The babel package allows you to set the language(s) of the document. This effects a lot of things, hyphenation for instance, but also section headings like _Table of contents_ or _References_, which are changed according to the language specified. You can even have multiple languages in one document.

_usepackage[utf8]{inputenc}_ 

Almost everybody outside of English-speaking countries runs into problems with special characters like the German Umlauts (äöüäöü). To make LaTeX process and display these special characters correctly, you need the **inputenc** package. It takes the document&#8217;s [character encoding](http://en.wikipedia.org/wiki/Character_encoding) as argument.

_usepackage[T1]{fontenc}_ 

This package makes LaTeX load a new, extended fonts with all these European accented characters. So they are displayed nicely.

**3. Graphics**

_usepackage{graphicx}_

If you want to include graphics in your document, you will need one package for this. I use the **graphicx** package, which provides the command _includegraphics_.

_usepackage[small, bf, up, hang]{caption}_ 

The default captions of LaTeX do not look very appealing, since they use the exact same font as the normal text. The **caption** package lets you choose a different layout for captions, as given in the package options. _small_ means that a smaller font size is used, _bf_ refers to the caption label which is made bold faced, _up_ means regular upright font and _hang_ refers to the way how multiple lines are dealt with.

_usepackage[percent]{overpic}_

Another problem is using text with graphs. If you design graphs with a program, you will almost certainly have a different font and &emdash; depending on the figure size &emdash; a different font size compared to the rest of your document. One solution for this is the [PSfrag](http://en.wikipedia.org/wiki/PSfrag) package, with the big disadvantage that it does not work for [pdfTeX](http://de.wikipedia.org/wiki/PdfTeX). The **overpic** package is compatible with pdfTeX, you have to specify the coordinates where LaTeX constructs are inserted. I prefer the _percent_ option, where relative coordinates are used, in case of image scaling.

**4. Maths**

My dissertation does not contain a lot of mathematical formula. But there are some elements to consider.

_usepackage{amsmath}_

The amsmath package provides a lot of commands and environments for maths. Just loading the package makes mathematic terms look nicer.

_usepackage{nicefrac}_

The normal way to typeset fractions is with a horizontal fraction line. This uses a lot of space. The **nicefrac** package provides the _nicefrac_ command, which creates a fraction with diagonal fraction line.

_usepackage{units}_

Most documents use either a full space between number and unit (2.3 N) or no space at all (2.3N). Both looks nasty, a half space is the optically pleasing distance (2.3&thinsp;N). The units package provides the commands unit[2.3]{N} and unitfrac[4.3]{Nm}{s} for nicely set units.

**5. Tables**

Setting large tables with LaTeX is a pain and one area where [WYSIWYG](http://de.wikipedia.org/wiki/Wysiwyg) typesetting programs offer a much more intuitive approach. But it works with LaTeX as well, if you know the tricks.

_usepackage{booktabs}_

Most people tend to draw all conceivable lines in tables. But this is not necessary, as the elements of a table are already aligned. In books, you will therefore find only three horizontal lines per table, one above the heading, one below, and a last one at the bottom of the table. The booktabs package provides these three lines or rules (British English) as _toprule_, _midrule_, _bottomrule_.

_
  
usepackage{multirow}
  
usepackage{rotating}
  
_ 

Sometimes, you will need text which spans multiple rows. Since space is precious, I have used rotated text in these cases, requiring the packages **rotating** and **multirow**. The rotating package provides the _sideways_ environment for the task I described, but you can also easily rotate a whole table by using the _sidewaystable_ instead of the _table_ environment.

**6. Bibliography**

One of the big strengths of LaTeX is the handling of bibliographic data with [BibTeX](http://en.wikipedia.org/wiki/BibTeX). The prerequisite for using BibTeX is to organize your bibliography in a database. There are numerous options available, I used [CiteULike](http://www.citeulike.org), an online solution. It takes some effort to post all your read articles, books, and conference proceedings in there, but the merit is a database which you can easily integrate in any of your publications. All you need to know is a key for each publication, e.g. AuthorYear. But BibTeX has also some drawbacks, therefore, a lot of LaTeX packages exist to provide an easier interface to BibTeX.

_usepackage[style=apa, noremoteinfo,
    
hyperref=auto,
    
bibencoding=inputenc,
    
refsection=chapter]{biblatex}_

One of the more recent developments is the **biblatex** package, which aims to provide a full LaTeX interface to the bibliography. It is compatible with the **hyperref** package, allows section bibliographies and everything else you could ever want. I use the APA style for citations and the bibliography (_style=apa_), the option _noremoteinfo_ prevents LaTeX from printing DOI links and other nasty stuff in the bibliography, _bibencoding=inputenc_ sets the character encoding of the bibliography to the same value as specified in the package **inputenc**, and _refsection=chapter_ automatically creates section-wise bibliographies on the chapter level of the document.

In the document, I use _parencite{key}_ for citations in parenthesis and _textcite{key}_ for citations that are part of the text. And _printbibliography_ prints the bibliography exactly at this place.

**7. Miscallenious**

_usepackage{microtype}_

Without understanding the details of microtypography, just using this package improves certain typographic features of your document (ever heard of character protrusion or font expansion?)

_usepackage{xspace}_

Whenever you define a text macro with _newcommand_, e.g. for typesetting special terms, you will encounter the problem of a missing space after the macro. Therefore, you need an intelligent space (_xspace_) in the macro definition, which occurs in normal text but not at the end of the sentence.