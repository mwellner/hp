---
title: Buchhaltung mit ledger
date: 2011-09-08T22:29:26+00:00
lastmod: 2017-09-18T22:28:53+00:00
author: Mathias Wellner
categories:
  - technik
tags:
  - Aktiva
  - Aufwendungen
  - buchhaltung
  - Kasse
  - Konten
  - Konto
  - ledger
  - verein
---
Für unseren Theaterverein wollte ich mir nach Abschluss der letzten Produktion einen Überblick über die Finanzen verschaffen. Die existierende Lösung mit einer Excel-Tabelle erschien mir nicht optimal, weshalb ich mich nach anderen Lösungen umschaute. Ich testete [GnuCash](http://www.gnucash.org/) und [ledger](http://ledger-cli.org/), letzteres stellte sich für mich als die beste Lösung heraus. In diesem Artikel möchte ich den Entscheidungsprozess und meine ersten Schritte mit _ledger_ darstellen. 

**Anforderungen**

Eine Theaterproduktion ist ein zeitlich begrenztes Projekt und hat typischerweise Einnahmen (Eintrittsgelder, Sponsoren, Verkauf von Getränken) und Ausgaben (Druck von Flyern und Plakaten, Bühnenbild, Requisiten, Technik, Fahrtkosten, Raummiete). Außerdem bezahlen die Vereinsmitglieder die Ausgaben in der Hoffnung, ihre Auslagen später wieder zu erhalten. Im Gegensatz zu Firmen ist das eine recht geringe Komplexität.

Ein Buchhaltungswerkzeug sollte über die folgenden Qualitäten verfügen:

  * Open Source
  * [Doppelte Buchführung](http://de.wikipedia.org/wiki/Buchf%C3%BChrung#Doppelte_Buchf.C3.BChrung_.E2.80.93_Grundlagen)
  * Buchungs-Konten
  * Trennung von Datenbestand (Buchungen) und Auswertung (Berichte, Bilanz)
  * Variable Berichte je nach Anforderungen

**Entscheidung**

Das Problem einer Excel-Tabelle ist, dass sie keine Trennung zwischen den einzelnen Buchungen und dem Bericht erlaubt. Meist ist sie als Einnahmen/Ausgaben-Bericht konzipiert, die einzelnen Buchungen hängen unten dran und werden durch gewagte Summierungen in den Bericht eingebunden. Insgesamt ist das fehleranfällig und erlaubt auch nur eine Form des Berichts. 

_GnuCash_ ist ein mächtiges grafisches Werkzeug zur Buchführung, welches man auch in einem Unternehmen einsetzen könnte. Es ist mit mehr als 300&thinsp;MB recht groß und war mir zu umständlich. Schon das Anlegen der Konten erforderte Expertenwissen, denn man musste den Typ des Kontos kennen und untergeordnete Konten waren davon abhängig und konnten nur noch bestimmte Typen haben. Ich konnte in einer geschlagenen Stunde keine korrekte Buchung hinkriegen. Vielleicht war die Buchung sogar korrekt und ich nur durch die Vorzeichen verwirrt. Aber am Ende erschien mir _GnuCash_ eine Nummer zu groß. 

_ledger_ präsentiert sich als leichtgewichtige Kommandozeilen-Lösung (knapp 2&thinsp;MB). Das bedeutet leider, dass ein Großteil der Windows- und Mac-Nutzer damit wenig anfangen kann. Eine Textdatei enthält jede Buchung in einem definierten Format im Sinn der doppelten Buchführung. Das Programm erzeugt nun Berichte nach den Vorgaben des Benutzers, basierend auf den erfassten Buchungen. 

**Installation**

Unter ubuntu ist die Installation denkbar einfach.

<pre>$ sudo apt-get install ledger</pre>

**Beispiel**

Zum besseren Verständnis ein kleines Beispiel. Zuerst brauchen wir eine Konten-Struktur. Aktiva sind die Vermögenswerte des Vereins (Bankkonten, Kasse). Aufwendungen beschreiben, wo das Geld hinfließt, Erträge, wo es herkommt. Unter Verbindlichkeiten merken wir uns die Auslagen der Leute. 

Zuerst also die einzelnen Buchungen (Datei beispiel.txt). Adam hat die Raummieten und den Einkauf im Baumarkt ausgelegt, Julia die Miete für die Tonanlage. Die 25 Eintritte gingen in eine Kasse. 

<pre>2011-01-01 Raummiete Januar
        Aufwendungen::Raummiete                 EUR 50.00
        Verbindlichkeiten::Adam

2011-02-01 Raummiete Februar
        Aufwendungen::Raummiete                 EUR 50.00
        Verbindlichkeiten::Adam

2011-03-01 Raummiete März
        Aufwendungen::Raummiete                 EUR 50.00
        Verbindlichkeiten::Adam

2011-03-09 Einkauf Baumarkt für Bühnenbild
        Aufwendungen::Bühnenbild                EUR 139.35
        Verbindlichkeiten::Adam

2011-03-12 Miete Tonanlage
        Aufwendungen::Ton                       EUR 100.00
        Verbindlichkeiten::Julia

2011-03-15 Einnahmen Eintritt 25x
        Aktiva::Kasse                           EUR 500.00
        Erträge::Eintritt
</pre>

Mit _ledger_ lassen wir uns jetzt den aktuellen Stand ausgeben (balance), einmal nur die Hauptkonten, danach mit allen Unterkonten (Option -s):

<pre>$ ledger -f beispiel.txt balance
          EUR 500.00  Aktiva
          EUR 389.35  Aufwendungen
         EUR -500.00  Erträge
         EUR -389.35  Verbindlichkeiten
$ ledger -f beispiel.txt -s balance
          EUR 500.00  Aktiva::Kasse
          EUR 389.35  Aufwendungen
          EUR 139.35    Bühnenbild
          EUR 150.00    Raummiete
          EUR 100.00    Ton
         EUR -500.00  Erträge::Eintritt
         EUR -389.35  Verbindlichkeiten
         EUR -289.35    Adam
         EUR -100.00    Julia
</pre>

So sieht man auf einen Blick, was der aktuelle Stand ist. Wichtig bei der Darstellung ist noch, dass sich immer alle Summen zu Null addieren. Die Erträge sind deshalb negativ, weil Geld aus der Allgemeinheit abfließt. Die Aufwendungen sind nach der gleichen Logik positiv, Geld fließt in die Allgemeinheit zurück. Beide Konten sind für die Produktionsbilanz nicht relevant. Die Verbindlichkeiten gehören zum Vereinsvermögen, sie müssen von den Aktiva abgezogen werden, um eine vereinsinterne Bilanz zu ziehen. 

Die Kommandozeile mag für viele abschreckend wirken, jedoch stellt sie eine einfache und vielseitige Möglichkeit für Berichte dar. Man sieht alles Wichtige auf einen Blick, mehr wollte ich nicht.