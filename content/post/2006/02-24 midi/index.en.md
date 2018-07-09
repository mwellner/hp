---
title: Sound Feedback Using MIDI
date: 2006-02-24T21:26:40+00:00
lastmod: 2018-07-03T23:42:08+00:00
author: Mathias Wellner
categories:
  - programming
---
One of my subjects is developing a sound feedback system for patients undergoing gait rehabilitation in the Lokomat. The last weeks I spent trying to program something with C++, swaying between MFC and "normal" form applications. My search for existing examples was difficult, because many people just put something in the net to play an existing MIDI file. But my task was more like creating a life stream and playing it. The first version uses very basic MIDI functions and plays a repeating pattern. The goal parameter (difference between hip and knee angle) then is transferred into more or less consonant chords. But I still have to test this principle with some people.