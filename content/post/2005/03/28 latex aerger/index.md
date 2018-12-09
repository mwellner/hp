---
title: LaTeX-Ärger, ein Punkt zuviel
date: 2005-03-28T00:00:00+00:00
lastmod: 2018-12-09T20:56:07+00:00
author: Mathias Wellner
categories:
  - latex
tags:
  - nummerierung
  - überschriften
  - latex
---
Bislang habe ich stets über Word-User gelächelt, wenn sie kurz vor Abgabe noch vor irgendwelchen obskuren Problemen standen. Nun hat es mich als passionierten LaTeX-User auch mal erwischt. Der aufgetretene Fehler ist zwar nicht weiter schlimm, aber dennoch nervig.
<!--more-->

Die Überschriften-Nummerierung soll laut Vorschrift ohne Punkt abschließen, also in der Art _2.3.4_ und **nicht** als _2.3.4_**.** Und genau das trat auf, sämtliche Nummerierungen wiesen diese Unart auf, die standardmäßig auch nicht vorgesehen ist. Nach langem Testen bemerkte ich, dass ein kleiner, unscheinbarer Befehl Quell allen Übels war, nämlich "\appendix". Der ist aber wichtig, um den Anhang mit neu beginnender Buchstaben-Nummerierung von den normalen Kapiteln zu trennen. Also einfach auskommentieren ist nicht. Und selbst die manuelle Methode versagte, der ins Auge springende Punkt trat wieder auf.

Nachtrag: Die Lösung für alle KOMA-Script-Klassen ist die Option **pointlessnumbers**, welche als optionales Argument der Dokumentklasse übergeben wird. Die neue Variante wäre **numbers=noenddot**.