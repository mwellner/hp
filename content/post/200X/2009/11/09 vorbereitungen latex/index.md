---
title: Kleine Helferlein für das wissenschaftliche Schreiben mit LaTeX
date: 2009-11-09T00:03:32+00:00
lastmod: 2020-01-13T21:38:49+00:00
author: Mathias Wellner
categories:
  - latex
tags:
  - latex
---
Das Textsatzsystem [LaTeX](https://de.wikipedia.org/wiki/LaTeX) eignet sich hervorragend für wissenschaftliches Schreiben. Aber welche Komponenten braucht man genau? In diesem Artikel möchte ich beschreiben, wie man auf einem [Ubuntu-Linux](http://www.ubuntu.com/)-System die notwendigen Programme und Pakete installiert, um seine Publikationen bequem schreiben zu können. Windows-Nutzer können die Schritte genau so ausführen, müssen aber an einigen Stellen abweichend vorgehen. 
<!--more-->

**Anforderungen, Voraussetzungen**

  1. Ich möchte [VIM](http://de.wikipedia.org/wiki/Vim) als Editor benutzen.
  2. Das Resultat soll eine PDF-Datei sein.
  3. Nach Änderungen am Manuskript sollen alle notwendigen Verarbeitungsschritte (latex, bibtex) automatisch durch eine Aktion (Mausklick oder Eingabe) erfolgen.
  4. Ich möchte nach dem [APA-Stil](http://www.apastyle.org/) zitieren. Das ist von der Zeitschrift meiner Wahl so vorgeschrieben.

**Texteditor VIM**

VIM ist ein sehr mächtiges Werkzeug zum Bearbeiten von Texten. Auf den meisten Linux-Systemen ist dieses Programm bereits installiert. Zur besseren Integration von LaTeX-Dokumenten gibt es die [VIM-LateX-Suite](http://vim-latex.sourceforge.net/).
  
`<br />
any_directory$ sudo apt-get install vim<br />
any_directory$ sudo apt-get install vim-latexsuite<br />
` 

Bei mir gab es ein Problem, die LateX-Suite wurde nicht aktiviert. Das lag daran, dass im normalen VIM-Verzeichnis schon ein file type plugin für LaTeX existiert. Dieser war dann aus unerklärlichen Gründen weiter oben auf der Suchliste als vim-latexsuite. Abhilfe schaffte bei mir die direkte Installation in meinem Home-Verzeichnis. Das ist zwar nicht die optimale Lösung, denn damit ist dieses Programm von Aktualisierungen ausgenommen, jedoch fiel mir erstmal nichts besseres ein. 

**latexmk**

Das Perl-Script latexmk ist äußerst praktisch, um alle notwendigen Verarbeitungsschritte automatisch auszuführen. Es ermittelt die Abhängigkeiten (eingeschlossene Bilder, Bibliografie), prüft den Status aller Dateien im Projekt und führt dann genau die Schritte aus, welche notwendig sind. Wenn man das nicht hat, muss man sehr häufig die Einzelschritte (die Programme latex und bibtex) ausführen, um bei Änderungen im Dokument ein wirklich aktuelles PDF zu erhalten. 

Installieren muss man Perl (wenn es noch nicht vorhanden ist) und das Skript selbst. Windows-Nutzer sollten [Active Perl](http://www.activestate.com/activeperl/) installieren.
  
`<br />
any_directory$ sudo apt-get install perl<br />
any_directory$ sudo apt-get install latexmk<br />
` 

Die Anwendung von latexmk sieht dann für PDFs so aus:
  
`<br />
project_directory$ latexmk -pdf dokument.tex<br />
` 

**biblatex**

Obwohl es zur Zeit noch nicht für die Allgemeinheit veröffentlicht ist (beta-Stadium), hat mir die Mächtigkeit des Pakets [biblatex](http://www.ctan.org/pkg/biblatex) so imponiert, dass ich es für meine Referenzen gern verwende. Ursprünglich brauchte ich eine saubere Lösung für nach Kapiteln aufgeteilte Referenzen in meiner Dissertationsschrift, aber biblatex kann weit mehr und macht den Umgang mit Referenzen viel einfacher als vorher. Denn bislang musste man aus einer unüberschaubaren Vielfalt von Paketen auswählen, wenn man mit dem Minimalstandard von BibTeX nicht zufrieden war. Nun braucht man also nur noch ein Paket &#8212; biblatex.
  
`<br />
any_directory$ sudo apt-get install biblatex<br />
` 

Im Gegensatz zum normalen Zitieren muss man sich an ein paar neue Befehle gewöhnen. Ein indirektes Zitat in Klammern, welches bei uns Ingenieuren das häufigste ist, erhält man mit _\parencite{key}_. Der Befehl _\printbibliography_ erstellt genau an dieser Stelle ein Referenzverzeichnis (Bibliographie) mit allen zitierten Quellen. Das Aussehen der Bibliographie und der Zitate im Text richtet sich nach dem Zitierstil, den man beim Laden des Paketes mit angeben kann.
  
`<br />
\usepackage[style=apa]{biblatex}<br />
\bibliography{bibfile_name}<br />
` 

Den [APA-Zitierstil](http://www.ctan.org/pkg/biblatex-apa) kann man leider nur manuell installieren (siehe Dokumentation). Danach muss man aber noch die LaTeX-Installation aktualisieren.
  
`<br />
any_directory$ sudo texconfig rehash<br />
` 

Ein Problem war dann noch, dass das [csquotes-Paket](http://www.ctan.org/tex-archive/macros/latex/contrib/csquotes/) veraltet war. Auch da musste ich manuell die Dateien an die richtige Stelle kopieren und mit _texconfig rehash_ die LaTeX-Installation aktualisieren. 

**Fazit**

Etwas Aufwand ist das schon, dafür steht mir jetzt wieder ein komplettes System zur Verfügung, mit dem ich an meiner dritten Publikation feilen kann.