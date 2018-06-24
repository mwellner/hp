---
title: Prototyp-Basteln
date: 2017-04-15T15:52:37+01:00
lastmod: 2018-06-24T22:21:40+00:00
categories:
  - software
tags: 
  - prototyp
---
In den letzten beiden Wochen war ich dienstlich unterwegs, für zwei Wochen implementierten wir mehrere Prototypen bei einem potenziellen Kunden im Rahmen eines [Hackathons](https://de.wikipedia.org/wiki/Hackathon). Die Bedingungen waren ziemlich einschränkend, die Prototypen sollten auf einem Server in Indien laufen, der schon mal deutlich über 100&thinsp;ms Latenz hatte. Außerdem hatten wir nur zwei Laptops mit Serverzugang zur Verfügung. Noch dazu waren die Anforderungen von unterschiedlicher Qualität und die Daten mit ihren vielfältigen Zusammenhängen nicht so klar dokumentiert. 

Aber meine Rolle war auch nicht die des Daten-Analysierers, vielmehr sollte ich dafür sorgen, dass die Web-Applikationen gut funktionierten. Ich setzte in weiser Voraussicht kommender Änderungen eine Basis-Applikation auf und klonte diese jeweils mit [git](https://git-scm.com/) für die einzelnen Anwendungen. Damit konnte ich auch globale Änderungen vollziehen und diese dann allen Anwendungen zur Verfügung stellen. 

Ich erweiterte unsere schon recht umfangreiche [gulp](http://gulpjs.com/)-Konfiguration um einige Schritte, sehr schön fand ich das Paket [gulp-bundle-assets](https://www.npmjs.com/package/gulp-bundle-assets). Damit konnten wir unsere zahlreichen Bibliotheken gut bündeln, was speziell bei einem weit entfernten Server und Maschinen mit Internet Explorer 11 als Standardbrowser nötig war. 

Es war nach etlichen Monaten am Heimatstandort eine gute Abwechslung, wenn auch durch die Arbeitsbedingungen und viele Fahrerei ziemlich anstrengend. Da freue ich mich auf ein paar ruhige Tage jetzt an Ostern. 