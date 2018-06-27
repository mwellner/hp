---
title: Progressive Web Apps
date: 2016-05-22T23:04:24+00:00
lastmod: 2018-06-28T00:22:00+00:00
author: Mathias Wellner
categories:
  - software
---
Einen Ausblick auf zukünftige Web-Applikationen gab es bei der Entwicklerkonferenz <a href="https://events.google.com/io2016/" title="Google I/O 2016" target="_blank">Google I/O 2016</a> 
zu sehen. Die Konferenz ist natürlich zentriert auf Technologien, die bei Google entwickelt werden, wobei es aber auch um grundlegende Entwicklungsmuster geht, die auch mit anderen 
Frameworks umzusetzen sind. 

Das grundlegende Problem vieler Web-Applikationen ist ihre schlechte Performance, sie brauchen zu lange beim Laden oder beim Interagieren. Das ist vor allem auf mobilen 
Geräten hinderlich, die keine gute Bandbreite haben. Eine perfekte Applikation würde initial schnell laden, dann im Hintergrund weitere Resourcen holen, damit bei weiteren 
Interaktionen schnelle Reaktionszeiten möglich sind, sie würde sich verhalten wie eine native Applikation. 

In dieser Präsentation stellt <a href="https://twitter.com/kevinpschaaf" title="Kevin Schaaf (@kevinpschaaf) on twitter" target="_blank">Kevin Schaaf</a> 
die Grundzüge von progressiven Web-Applikationen vor. Technologisch basiert das auf 
<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements" title="Custom Elements" target="_blank">HTML Custom Elements</a>, 
<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports" title="HTML Imports" target="_blank">HTML Imports</a>, 
<a href="https://en.wikipedia.org/wiki/HTTP/2" title="HTTP/2" target="_blank">HTTP/2</a> und 
<a href="https://developer.mozilla.org/de/docs/Web/API/Service_Worker_API" title="Service Worker API" target="_blank">Service Workers</a>. 
Leider werden diese nur zum Teil von den heute im Umlauf befindlichen Browsern unterstützt. Aber alle Browser-Hersteller arbeiten daran, so 
dass man in ein-zwei Jahren auf eine breitere Unterstützung bauen kann. In der Zwischenzeit kann man aber einige Ideen mit Polyfills oder anderen Frameworks umsetzen. 

Jedenfalls würde damit ein großes Problem der meisten aktuellen Webseiten gelöst, die beim ersten Laden alle benötigten CSS-Stile und JavaScript-Framework-Dateien 
laden müssen. Bei mwellner.de sind das immerhin 2&thinsp;MB JavaScript und 600&thinsp;kB CSS. Und davon wird ganz sicher nicht alle benötigt, um die Startseite 
darzustellen. Mit einer wirklich gut gelösten Komponentenstruktur würden anfangs nur die Resourcen geladen, die für die Darstellung unbedingt gebraucht werden. 
Und eines Tages wird dann auch diese Homepage deutlich schneller werden und in ungeahnte Ranking-Höhen aufsteigen.