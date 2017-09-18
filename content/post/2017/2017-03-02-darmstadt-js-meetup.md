---
title: DarmstadtJS Meetup
tags: 
  - javascript
  - typescript
categories: 
  - software
description: "Notizen vom Besuch des Meetups DarmstadtJS"
date: "2017-03-02T23:18:11+01:00"
lastmod: 2017-09-18T22:28:53+00:00
---

Heute war ich zum ersten Mal bei einem Meetup der Gruppe [DarmstadtJS](https://www.meetup.com/DarmstadtJS/). Das Ganze fand in den Büros von [JSperts](https://jsperts.de/) statt, Getränke und Pizzas stellte die Firma netterweise bereit, vielen Dank dafür!

<!--more-->

### Angular-Erfahrungsbericht

Johannes Rudolph von [meshcloud](https://www.meshcloud.io) referierte über seine praktischen Erfahrungen beim Einsatz von [Angular](https://angular.io). Viele Sachen kamen mir sehr bekannt vor, vor allem die leidvollen Erfahrungen bei einigen Aktualisierungen von Angular selbst und auch von [Angular CLI](https://cli.angular.io). Jedes Update stellte da eine Herausforderung dar, weil es mitunter die ganze Applikation zerlegte oder bestehende Praktiken über den Haufen warf. Und so wechselten sich Euphorie über eine sehr mächtige und produktive Plattform mit Frustration wegen des letzten Updates. 

Er empfahl die Verwendung von [yarn](https://www.npmjs.com/package/yarn) statt npm. Das hatte ich sogar mal getestet, problematisch an _yarn_ war, dass es keine Datei-Referenzen versteht, die wir benötigen. 

Um Angular richtig nutzen zu können, empfahl Johannes die Beschäftigung mit [ReactiveX](http://reactivex.io/), einer Bibliothek für die asynchrone Programmierung. Auch damit hatte ich schon reichlich zu tun, es ist eine Umsetzung des [Beobachter-Entwurfsmusters](https://de.wikipedia.org/wiki/Beobachter_(Entwurfsmuster)) für JavaScript. 

Neben vielen Vorteilen nannte er bei Angular noch einige Einschränkungen.
- Modulgrenzen sind nicht strikt vorgegeben
- Dependency Injection kennt nur Singletons
- Debugging ist schwierig wegen zone.js und asynchronem Charakter
- Mangel an Performance Debugging Tools

Hier noch die [Präsentation](https://www.slideshare.net/JohannesRudolph/angular2-a-story-from-the-trenches). 

### Performance-Optimierung

Der zweite Sprecher war Rubens Bridgewater, sein Thema war die Optimierung von laufzeitkritischem JavaScript-Code. Er schränkte sein Thema immer wieder ein, auf keinen Fall solle man Mikro-Optimierungen vornehmen, da diese oft zu schlechter lesbarem Code führten. Und außerdem würde ohnehin ständig die JavaScript-Engine (z.B. [V8](https://de.wikipedia.org/wiki/V8_(JavaScript-Implementierung)) für Chrome, Opera und Node) verbessert. 

In letzter Zeit führten die Sprach-Erweiterungen für [ES2015](http://www.ecma-international.org/ecma-262/6.0/) zu einer Verschlechterung der Code-Ausführung, da viele neue Sprach-Features eingebaut wurden und damit bestehende Optimierungsmuster sogar teilweise entfernt werden mussten. Doch dies wird jetzt Schritt für Schritt verbessert. Er empfahl auf jeden Fall die Verwendung von ES2015-Features, auch wenn sie derzeit etwas langsamer wären. 

Am meisten Potenzial läge immer beim Algorithmus selbst. 