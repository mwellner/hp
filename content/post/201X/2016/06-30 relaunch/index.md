---
title: Comparis-Relaunch
date: 2016-06-30T20:10:52+00:00
lastmod: 2020-01-13T21:38:50+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - foundation
---
Am Dienstag ging ein Teil der Comparis-Seite im neuen Design live. Noch sind wir am Testen, wie gut das bei den Benutzern ankommt, aber schon bald werden 
auch weitere Applikationen im neuen Kleid erstrahlen. Es ist für Außenstehende vermutlich schwer vorstellbar, welcher Aufwand hinter so einem Relaunch steckt. 

Der interessante Fall tritt dann auf, wenn man einen etwas kleineren Bildschirm hat oder das Fenster verkleinert. Dann hat die linke Box plötzlich zwei Zeilen. 
Und von den rechten zwei Elementen erwartet man, dass sie die gleiche Höhe haben und die Inhalte vertikal zentriert sind. Das gestaltet sich mit HTML und CSS 
meist schwierig, erst durch den relativ neuen 
<a href="https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" title="Using CSS flexible boxes" target="_blank">Flexbox-Ansatz</a> 
wurden derartige Gestaltungsaufgaben einfacher zu bewältigen. Wir nutzen das auch für unser Grid-System 
(<a href="http://foundation.zurb.com/sites/docs/flex-grid.html" title="Foundation Flex Grid" target="_blank">Foundation Flex Grid</a>). 

Und so beschäftige ich mit seit drei Wochen mit unzähligen Bugs, die von kleinen Layout-Anpassungen bis zu völlig wüstem Erscheinungsbild auf bestimmten 
Browsern reichen. Viele sind dann bei genauerem Hinschauen recht einfach zu lösen, einige werden uns aber noch länger verfolgen.