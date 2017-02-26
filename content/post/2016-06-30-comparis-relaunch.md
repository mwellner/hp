---
id: 6723
title: Comparis-Relaunch
date: 2016-06-30T20:10:52+00:00
author: Mathias Wellner
layout: post
guid: http://www.mwellner.de/?p=6723
permalink: /2016/06/30/comparis-relaunch/
image: /wp-uploads/2016/06/kk1-150x91.png
categories:
  - www
tags:
  - css
  - Flex
  - Flexbox
  - foundation
  - Grid
  - HTML
  - Webseite
---
Am Dienstag ging ein Teil der Comparis-Seite im neuen Design live. Noch sind wir am Testen, wie gut das bei den Benutzern ankommt, aber schon bald werden auch weitere Applikationen im neuen Kleid erstrahlen. Es ist für Außenstehende vermutlich schwer vorstellbar, welcher Aufwand hinter so einem Relaunch steckt. Gern möchte ich an einem auf den ersten Blick einfachen Beispiel die Komplexität erläutern, die in vielen kleinen Details steckt. 

<div id="attachment_6721" style="width: 904px" class="wp-caption aligncenter">
  <img src="http://www.mwellner.de/wp-uploads/2016/06/kk1.png" alt="Krankenkassenvergleich, Einstiegsseite" width="894" height="545" class="size-full wp-image-6721" srcset="http://www.mwellner.de/wp-uploads/2016/06/kk1.png 894w, http://www.mwellner.de/wp-uploads/2016/06/kk1-350x213.png 350w, http://www.mwellner.de/wp-uploads/2016/06/kk1-246x150.png 246w, http://www.mwellner.de/wp-uploads/2016/06/kk1-150x91.png 150w" sizes="(max-width: 894px) 100vw, 894px" />
  
  <p class="wp-caption-text">
    Krankenkassenvergleich, Einstiegsseite
  </p>
</div>

Wir sehen die Einstiegsseite für den Krankenkassen-Vergleich, zentrales Element sind die drei Kästchen. Die zwei linken in grau lassen eine Auswahl zu, entweder man ist schon versichert in der Schweiz oder man ist damit zum ersten Mal konfrontiert. Der grüne Schaltknopf rechts führt weiter zu den genaueren Eingaben. 

Der interessante Fall tritt dann auf, wenn man einen etwas kleineren Bildschirm hat oder das Fenster verkleinert. Dann hat die linke Box plötzlich zwei Zeilen. Und von den rechten zwei Elementen erwartet man, dass sie die gleiche Höhe haben und die Inhalte vertikal zentriert sind. Das gestaltet sich mit HTML und CSS meist schwierig, erst durch den relativ neuen <a href="https://developer.mozilla.org/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" title="Using CSS flexible boxes" target="_blank">Flexbox-Ansatz</a> wurden derartige Gestaltungsaufgaben einfacher zu bewältigen. Wir nutzen das auch für unser Grid-System (<a href="http://foundation.zurb.com/sites/docs/flex-grid.html" title="Foundation Flex Grid" target="_blank">Foundation Flex Grid</a>). 

Und so beschäftige ich mit seit drei Wochen mit unzähligen Bugs, die von kleinen Layout-Anpassungen bis zu völlig wüstem Erscheinungsbild auf bestimmten Browsern reichen. Viele sind dann bei genauerem Hinschauen recht einfach zu lösen, einige werden uns aber noch länger verfolgen.