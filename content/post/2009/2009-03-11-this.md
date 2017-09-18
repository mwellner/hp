---
title: This!
date: 2009-03-11T21:52:24+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - wissenschaft
tags:
  - diss
  - dissertation
  - latex
  - matlab
  - wissenschaft
---
Ich schreibe. An meiner Diss. Ich habe sie **This!** genannt, das klingt so wie Diss und erinnert mich an Peter Gabriels Album [So](http://petergabriel.com/discography/release/So/), ein Weihnachtsgeschenk meiner Schwester.

Ich schreibe. Über die Ergebnisse der Ruderstudie mit Wettbewerbern. Teilnehmer 1 hat reagiert, und das deutlich. Man sieht es an den Graphen, den Prunkstücken dieses Kapitels. Es lässt sich so viel aussagen mit einem Graphen. Dann brauche ich auch weniger zu schreiben. Es springt dem Leser dann ins Auge. Aber nur, wenn der Graph gut gemacht ist und in sich das Studiendesign, die Einzelergebnisse, die Durchschnittswerte pro Block mit Standardabweichungen und am besten noch die Schlussfolgerungen in sich vereint und dabei nicht unübersichtlich wird.

Ich schreibe. Ein [Matlab](http://de.wikipedia.org/wiki/Matlab)-Skript zum Zeichnen eines Graphen. Es wird immer länger, Zeile um Zeile kommt hinzu. Zuerst waren da nur die blauen Datenpunkte, etwas chaotisch zeigten sie den Wert einer Variablen (zum Beispiel der Maximalkraft) für jeden Ruderschlag an, und das für die gesamte Rennstrecke von 2000&thinsp;m. Aber das reicht nicht, man muss noch die Blöcke sehen. Die neutralen Blöcke, in denen die Gegner nichts machen und die Gegner-Blöcke, in denen die gegnerischen Boote attackieren oder zurückfallen. Senkrechte rote Linien für die Blockgrenzen, das ist schon mal ein Anfang. Aber wie kann man die Gegner-Blöcke noch durch eine andere Hintergrundfarbe hervorheben? Zuerst versuche ich es mit dem Befehl patch, damit kann man beliebige Polygone zu einem Graphen hinzufügen. Aber dieser verdeckt die Randlinien. Die Lösung bringt dann der Befehl [image](http://www.mathworks.com/access/helpdesk/help/techdoc/ref/image.html), ein entsprechend den Blöcken definiertes Bild dient als Hintergrund des Graphen. Blaue Punkte auf dezent hervorgehobenen Blöcken, getrennt durch vertikale rote Linien. Schön wäre noch, bei jedem Block den Mittelwert der Variablen und die Standardabweichung einzuzeichnen. Mit horizontalen, schwarzen, dicken Linien kommen die Mittelwerte hinzu, mit dünneren Linien, die sich nach oben und unten strecken, die Standardabweichungen. Jetzt noch zuschneiden auf die richtige Größe, damit es ohne weitere Verarbeitung in die Diss eingefügt werden kann.

Ich schreibe. Mit [LaTeX](https://de.wikipedia.org/wiki/LaTeX)-Befehlen füge ich die Graphen ein. Und beschrifte noch die Blöcke, damit klar ist, welche neutral und welche durch Aktivitäten der Gegner geprägt sind. Dies in allen Graphen. Diese Wiederholung einer ähnlichen Aufgabe, in der sich nur die Reihenfolge der Konditionen verändert, schreit nach einem Makro. So weit ist es mit mir gekommen, das Dokument hat sich in eine Struktur verwandelt, welche stets verbessert werden kann. Ich sehe überall Struktur, die Ähnlichkeit von Abschnitten, die Möglichkeit, etwas eleganter zu lösen, mit weniger Redundanzen.

Ich schreibe. 85 Seiten ist **This!** jetzt stark. Es ist nicht mehr viel, das Ziel ist in Sicht. Dann wird die erste Fassung vollendet sein.