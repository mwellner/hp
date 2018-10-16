---
title: Kleine Helferlein beim wissenschaftlichen Schreiben mit LaTeX
slug: wissenschaftlich-schreiben-latex
date: 2009-11-09T23:09:16+00:00
lastmod: 2017-10-02T14:46:18+00:00
author: Mathias Wellner
categories:
  - latex
---
Das Text­satz­sys­tem [LaTeX](https://de.wikipedia.org/wiki/LaTeX) eig­net sich her­vor­ra­gend für wis­sen­schaft­li­ches Schrei­ben. Aber wel­che Kom­po­nen­ten braucht man genau? In die­sem Arti­kel möchte ich beschrei­ben, wie man auf einem [Ubuntu-​​Linux](http://www.ubuntu.com/)–Sys­tem die not­wen­di­gen Pro­gramme und Pakete instal­liert, um seine Publi­ka­tio­nen bequem schrei­ben zu kön­nen. Windows-​​Nutzer kön­nen die Schritte genau so aus­füh­ren, müs­sen aber an eini­gen Stel­len abwei­chend vorgehen. 
<!--more-->

**Anfor­de­run­gen, Voraussetzungen**

  1. Ich möchte VIM als Edi­tor benutzen.
  2. Das Resul­tat soll eine PDF-​​Datei sein.
  3. Nach Ände­run­gen am Manu­skript sol­len alle not­wen­di­gen Ver­ar­bei­tungs­schritte (latex, bib­tex) auto­ma­tisch durch eine Aktion (Maus­klick oder Ein­gabe) erfolgen.
  4. Ich möchte nach dem [APA-​​Stil](http://www.apastyle.org/) zitie­ren. Das ist von der Zeit­schrift mei­ner Wahl so vorgeschrieben.

**Text­edi­tor VIM**

VIM ist ein sehr mäch­ti­ges Werk­zeug zum Bear­bei­ten von Tex­ten. Auf den meis­ten Linux-​​Systemen ist die­ses Pro­gramm bereits instal­liert. Zur bes­se­ren Inte­gra­tion von LaTeX-​​Dokumenten gibt es die [VIM-​​LateX-​​Suite](http://vim-latex.sourceforge.net/).
  
{{<highlight bash>}}
$ sudo apt-get install vim
{{</highlight>}}
  
Die LaTeX-Suite sollte man lieber von Hand im Home-Verzeichnis installieren, auf der Homepage gibt es eine Anleitung.

**latexmk**

Das Perl-​​Script latexmk ist äußerst prak­tisch, um alle not­wen­di­gen Ver­ar­bei­tungs­schritte auto­ma­tisch aus­zu­füh­ren. Es ermit­telt die Abhän­gig­kei­ten (ein­ge­schlos­sene Bil­der, Biblio­gra­fie), prüft den Sta­tus aller Dateien im Pro­jekt und führt dann genau die Schritte aus, wel­che not­wen­dig sind. Wenn man das nicht hat, muss man sehr häu­fig die Ein­zel­schritte (die Pro­gramme latex und bib­tex) aus­füh­ren, um bei Ände­run­gen im Doku­ment ein wirk­lich aktu­el­les PDF zu erhalten. 

Instal­lie­ren muss man Perl (wenn es noch nicht vor­han­den ist) und das Skript selbst. Windows-​​Nutzer soll­ten [Active Perl](http://www.activestate.com/activeperl/) instal­lie­ren.
  
{{<highlight bash "linenos=table">}}
$ sudo apt-get install perl
$ sudo apt-get install latexmk
{{</highlight>}}
  
Die Anwen­dung von latexmk sieht dann für PDFs so aus:
  
{{<highlight bash>}}
project/directory$ latexmk -pdf dokument.tex
{{</highlight>}}

**bibla­tex**

Obwohl es zur Zeit noch nicht für die All­ge­mein­heit ver­öf­fent­licht ist (beta-​​Stadium), hat mir die Mäch­tig­keit des Pakets bibla­tex so impo­niert, dass ich es für meine Refe­ren­zen gern ver­wende. Ursprüng­lich brauchte ich eine sau­bere Lösung für nach Kapi­teln auf­ge­teilte Refe­ren­zen in mei­ner Dis­ser­ta­ti­ons­schrift, aber bibla­tex kann weit mehr und macht den Umgang mit Refe­ren­zen viel ein­fa­cher als vor­her. Denn bis­lang musste man aus einer unüber­schau­ba­ren Viel­falt von Pake­ten aus­wäh­len, wenn man mit dem Mini­mal­stan­dard von Bib­TeX nicht zufrie­den war. Nun braucht man also nur noch ein Paket — bibla­tex.
  
{{<highlight bash>}}
$ sudo apt-get install biblatex
{{</highlight>}}
  
Im Gegen­satz zum nor­ma­len Zitie­ren muss man sich an ein paar neue Befehle gewöh­nen. Ein indi­rek­tes Zitat in Klam­mern, wel­ches bei uns Inge­nieu­ren das häu­figste ist, erhält man mit \parencite{key}. Der Befehl \print­bi­blio­gra­phy erstellt genau an die­ser Stelle ein Refe­renz­ver­zeich­nis (Biblio­gra­phie) mit allen zitier­ten Quel­len. Das Aus­se­hen der Biblio­gra­phie und der Zitate im Text rich­tet sich nach dem Zitier­stil, den man beim Laden des Pake­tes mit ange­ben kann.
  
{{<highlight latex "linenos=table">}}
\usepackage[style=apa]{biblatex}
\bibliography{bibfile_name}
{{</highlight>}}
  
Den APA-​​Zitierstil kann man lei­der nur manu­ell instal­lie­ren (siehe Doku­men­ta­tion). Danach muss man aber noch die LaTeX-​​Installation aktua­li­sie­ren.
  
{{<highlight bash>}}
$ sudo texconfig rehash
{{</highlight>}}
  
Ein Pro­blem war dann noch, dass das csquotes-​​Paket ver­al­tet war. Auch da musste ich manu­ell die Dateien an die rich­tige Stelle kopie­ren und mit tex­con­fig rehash die LaTeX-​​Installation aktualisieren. 

**Fazit**

Etwas Auf­wand ist das schon, dafür steht mir jetzt wie­der ein kom­plet­tes Sys­tem zur Ver­fü­gung, mit dem ich an mei­ner drit­ten Publi­ka­tion fei­len kann.