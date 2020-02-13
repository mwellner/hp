---
title: Hugo
date: 2017-02-27T22:40:24+01:00
lastmod: 2020-02-14T00:14:09+00:00
categories:
  - software
tags:
  - hugo
---
In den letzten Tagen habe ich meine Homepage von [Wordpress](https://wordpress.org/) auf [Hugo](https://gohugo.io/) migriert. Hauptgrund ist die Sicherheitslage von Wordpress, immer wieder gibt es Lücken im System, welche durch die Popularität auch von etlichen Angreifern genutzt werden können. 

<!--more-->

Aktuell hatte die Version 4.7.0 eine neu eingebaute Lücke, welche erst durch 
Version 4.7.2 behoben wurde. Informiert haben die Wordpress-Entwickler darüber jedoch erst sehr spät 
(siehe [heise-Artikel](https://www.heise.de/newsticker/meldung/WordPress-4-7-2-Entwickler-verschweigen-kritische-Sicherheitsluecke-3616398.html)). Deshalb hat sich unser Systemadministrator entschlossen, Wordpress von unserem gemeinsam genutzten Server zu verbannen. 

Als neues System kommt ein statischer Webseiten-Generator zum Zug. Ein solcher erzeugt mit Hilfe von Templates und Inhalten statische HTML-Seiten. Somit gibt es keine Datenbank und damit so gut wie keine Angriffsfläche für Angriffe. 

Hugo ist der derzeit populärste Website-Generator. Er ist frei verfügbar für die meisten Betriebssysteme. Ich kann jetzt meine Seiten als 
[Markdown](http://daringfireball.net/projects/markdown/) erstellen, mit git zum Server schieben, der Rest passiert automatisch. In den nächsten Tagen werde ich noch ein wenig am Layout feilen, so ganz gefällt mir das rudimentäre Bootstrap-Thema noch nicht. 