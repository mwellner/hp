---
title: Macht mit bei Email-Verschlüsselung!
date: 2010-08-28T22:08:49+00:00
author: Mathias Wellner
categories:
  - tagebuch
tags:
  - email
  - verschlüsselung
---
**Anlass**

Vor kurzem habe ich meinen Rechner neu aufgesetzt, nun ist [Windows 7](http://de.wikipedia.org/wiki/Microsoft_Windows_7) mein Betriebssystem. [Ubuntu Linux](http://www.ubuntu.com/) läuft nun als virtuelle Maschine mit dem [VMware Player](http://www.vmware.com/de/products/player/). 

<div style="width: 510px" class="wp-caption aligncenter">
  <a href="http://www.flickr.com/photos/mwellner/4935768178/" title="Zutritt verboten by mwellner, on Flickr"><img src="http://farm5.static.flickr.com/4118/4935768178_1a92d6d5f6.jpg" width="500" height="338" alt="Zutritt verboten" /></a>
  
  <p class="wp-caption-text">
    Privatspäre<br />
  </p>
</div>

Im Zuge der Neuinstallation habe ich mir auch Gedanken zum Thema Email-Sicherheit gemacht. Bereits 2003 hatte ich mir ein Schlüsselpaar (der öffentliche Teil des Schlüssels ist auf diversen Key-Servern verfügbar) erzeugt, dieses aber nur gelegentlich genutzt. Das wird sich nun wieder ändern! 

**Warum verschlüsseln?**

Angestoßen durch die Diskussionen über die ständig schrumpfende Privatsphäre möchte ich mir einen Teil meiner Privatsphäre zurückerobern &ndash; private Emails sind da ein wichtiger Bestandteil. Normale Emails sind wie Postkarten, auf allen Servern kann man sie mit den entsprechenden Zugriffsrechten lesen. Die Verschlüsselung ist wie ein Briefumschlag, der den privaten Inhalt vor neugierigen Blicken schützt. Die zunehmende Kommunikation über soziale Netzwerke sehe ich kritisch, da kommerzielle Interessen dort dominieren und die hohen Anfangsinvestitionen irgendwann reinkommen müssen. Gerade Facebook ist durch einige Vorfälle in die Kritik geraten (siehe z.B. [Facebooks unsichtbare Listen](http://www.zeit.de/2010/35/Facebook) in der ZEIT). 

Im unternehmerischen Umfeld ist das Verschlüsseln von Daten noch wichtiger, da man wichtige Dokumente ungern an Dritte weiterreichen würde. Dass dies heute nur sehr wenige Firmen machen, ist für mich kaum nachvollziehbar. Verträge, technische Dokumente oder Software werden so quasi als Postkarte versendet, Industriespionage erheblich vereinfacht. 

**Öffentlicher und geheimer Schlüssel beim RSA-Verfahren**

Technisch beruht die Verschlüsselung von Emails auf dem [RSA-Kryptosystem](http://de.wikipedia.org/wiki/RSA-Kryptosystem). Mit einem geeigneten Programm könnt ihr euch ein Schlüsselpaar erzeugen, welches aus einem geheimen und einem öffentlichen Schlüssel besteht. Den öffentlichen Schlüssel könnt ihr herumschicken, mit ihm kann ich auch Nachrichten an euch verschlüsseln, die ihr nur mit eurem geheimen Schlüssel entschlüsseln könnt. Das Signieren von Nachrichten ist eine andere Sache, dafür nehmt ihr euren geheimen Schlüssel und der Empfänger kann mit Hilfe eures öffentlichen Schlüssels feststellen, ob die Nachricht wirklich von euch stammt. 

Damit das Ganze Sinn macht, brauche ich aber eure Mithilfe. Denn ich allein kann meine Nachrichten lediglich signieren, sie sind dann aber immer noch für jedermann lesbar. Erst wenn ihr mitmacht und mir eure öffentlichen Schlüssel zukommen lasst, kann ich Nachrichten an euch verschlüsseln. 

**So geht's los**

Für die meisten Email-Programme gibt es Zusätze zum Verschlüsseln. Ich persönlich verwende [Mozilla Thunderbird](http://www.mozillamessaging.com/de/thunderbird/) mit dem [Enigmail](http://www.enigmail.net/home/index.php)-Plugin. Für Windows und damit auch Outlook gibt es mit [Gpg4win](http://www.gpg4win.org) ebenfalls ein komfortables Zusatzwerkzeug, mit dem ich auf Arbeit bereits gute Erfahrungen gesammelt habe. In der Linux-Welt ist [GnuPG](http://www.gnupg.org/) der Quasi-Standard, die meisten anderen Programme und Werkzeuge basieren darauf. 

Nach der Installation könnt ihr euch ein Schlüsselpaar anlegen. Folgt einfach den Standardvorgaben und macht auf jeden Fall eine Sicherungskopie eurer beiden Schlüssel! Euer privater Schlüssel wird zusätzlich mit einem Passwort geschützt. Dann könnt ihr euren öffentlichen Schlüssel exportieren und herumschicken oder ihn auf einen Schlüssel-Server laden. 

Das Verschlüsseln ist ein wenig gewöhnungsbedürftig und ein zusätzlicher Schritt. Aber ich denke, dass sich dieser Aufwand lohnt.