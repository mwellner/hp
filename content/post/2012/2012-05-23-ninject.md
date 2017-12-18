---
title: Ninject
date: 2012-05-23T21:45:33+00:00
lastmod: 2017-12-18T22:17:42+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - dependency injection
---
Seit ich meine Brötchen bei einem Ingenieurdienstleister verdiene, sind die beruflichen Einträge recht selten geworden. Somit möchte ich jetzt die Gelegenheit erfreifen, um in allgemeiner und unverfänglicher Art über mein neues Projekt zu berichten. 

Zuerst einmal hat sich mein Arbeitsweg halbiert, vorher war ich in der Nähe von Bern tätig. Das fast tägliche, lange Pendeln hat mich ziemlich angestrengt. Geblieben aus dieser Zeit ist aber noch mein Abo für die 1.&nbsp;Klasse. Im Prinzip brauche ich das nicht mehr, aber irgendwie hänge ich doch noch dran. Und es gibt einfach mehr Platz und damit auch Ruhe in den gelb markierten Wagen der 1.&nbsp;Klasse, nach denen ich jetzt schon gewohnheitsmäßig Ausschau halte. Mein Weg ist deutlich kürzer jetzt und führt durch eine vertraute, schöne Landschaft. 

Aber nun zum technischen Teil. Ich arbeite an einem gigantischen, objektorientierten Software-Projekt in einer späten Phase. Vorbei sind die schönen Zeiten des Architekturentwurfs und des Implementierens, jetzt geht es um das Beseitigen von Fehlern und das hoffentlich fristgemäße Ausliefern. Problematisch sind die vielen Abhängigkeiten zwischen den Modulen. Jedesmal, wenn eine Klasse eine andere verwendet, muss sie deren Implementierung kennen. Dadurch entstand Code, der sich nur schlecht testen lässt. Idealerweise möchte man ein Modul isoliert betrachten und testen. Durch die vielen Abhängigkeiten muss man aber quasi immer alles zugleich testen und kann so keine wirklich gute Aussage machen. 

Eine Lösung dieses Dilemmas bietet [Dependency Injection](http://de.wikipedia.org/wiki/Dependency_Injection). Wir verwenden als [C#](http://de.wikipedia.org/wiki/C-Sharp)-Programmierer das Framework [Ninject](http://www.ninject.org/). Hervorzuheben ist die tolle Webseite dieses Projekts im Ninja-Stil. Und so verbringe ich meine Tage jetzt mit dem _ninjecten_, wie wir das so nennen. Jedes _new_ wird kritisch überprüft, ob man es nicht durch einen Ninject-Ausdruck ersetzen könnte. Am Ende such Ninject automatisch den passenden Konstruktor heraus und kann auch statt der normalen Implementierung ein [Mock-Objekt](http://de.wikipedia.org/wiki/Mock-Objekt) verwenden. 

Damit beschäftige ich mich also momentan täglich, und das mit einem wunderschönen Blick auf die Berge.