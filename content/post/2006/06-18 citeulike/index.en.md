---
title: Correcting CiteULike when Using with Natbib, sed
date: 2006-06-18T21:12:47+00:00
lastmod: 2018-07-09T23:20:02+00:00
author: Mathias Wellner
categories:
  - latex
---
Using [CiteULike](http://www.citeulike.org) for administrating my paper bibliographic information is quite nice. I have all the information I need for citing the sources in papers, as CiteULike provides export capability for BibTeX.

The problem with this approach and the package _natbib_ is that URL addresses, ISSN numbers and DOI stuff is used for creating the bibliography, looking nasty in my opinion. Therefore I used the powerful stream editor [sed](https://de.wikipedia.org/wiki/Sed_%28Unix%29) to delete these lines from my BibTeX file and also adding curly braces around capital letters in the title.

**CorrectCiteULike.sed**
  
`<br />
# Correcting Mistakes of CiteULike BibTeX Export Tool<br />
# delete URL lines (look nasty with natbib)<br />
/url =/ d<br />
# delete ISSN lines (look nasty with natbib)<br />
/issn =/ d<br />
# delete DOI lines (look nasty with natbib)<br />
/doi =/ d<br />
# create curly braces around capital letters in titles<br />
/\ttitle = {[^{]/  s/[A-Z]/{&}/g<br />
` 

**Makefile**

All you have to do now is to include the sed command in your Makefile, right in front of the bibtex command.
  
`<br />
sed -i -f correctCiteULike.sed exported_bibtex_file.bib<br />
`