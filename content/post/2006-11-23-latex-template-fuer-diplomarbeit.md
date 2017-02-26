---
id: 665
title: LaTeX-Template für Diplomarbeit
date: 2006-11-23T00:47:07+00:00
author: Mathias Wellner
layout: post
guid: http://blogs.ethz.ch/mwellner/2006/11/23/latex-template-fuer-diplomarbeit/
permalink: /2006/11/23/latex-template-fuer-diplomarbeit/
---
Wer immer eine Diplomarbeit mit LaTeX schreiben möchte, dem kann dieses Template unter Umständen weiter helfen. Was ich damals noch nicht wusste, beinhaltet die Darstellung von Einheiten (Paket units). 

<pre>%% Diplomarbeit Mathias Wellner, LaTeX-Quelldatei
%%
%% Diese Datei mag als Anregung dienen, wie eine Diplomarbeit aussehen kann.
%%
%% Anmerkungen zu Dokumentenklassen-Optionen
%%
%% pointlessnumbers: keine Punkte hinter Abschnittsnummerierung
%%   (waren nach Hinzufügen des Anahngs aufgetreten)
%% halfparskip: regelt Aussehen von Absätzen
%% fleqn: Gleichungen links anordnen (Standard: zentrieren)
%% DIV13: Seitenrand ist 1/13 (Standard: 1/10 -&gt; ziemlich breit)
%% BCOR5mm: Bindekorrektur, links 5mm mehr Platz für Bindung

\documentclass[pointlessnumbers, halfparskip, fleqn, DIV13, BCOR5mm]{scrreprt}

%% PAKETE

%% Essenzielle Pakete
\usepackage[utf8]{inputenc} % Eingabe mit Unicode
\usepackage[ngerman]{babel} % deutsches Sprache
\usepackage{graphicx} % Einbinden von Grafiken mit \includegraphics
\usepackage{booktabs} % schöne Tabellen mit \toprule, \midrule und \bottomrule
\usepackage{bibgerm}  % deutsche Bibliografie-Stile
\usepackage{times}    % Schriftstil Times New Roman (wie Word)
\usepackage{url}      % zur Dartellung von URLs mit Befehl \url{}
\usepackage{xspace}   % Intelligenter Platzhalter nach Makros
\usepackage{tabularx} % Tabellen mit variabler Spaltenbreite
\usepackage{listings} % für Matlab-Listings

%% Pakete für optische Verschönerung
\usepackage[small, normal, bf, up]{caption2} % Paket für schönere Bildunterschriften
\usepackage{type1cm} % scalable Fonts
\usepackage{courier} % Adobe Courier
\usepackage{sectsty} % eigene Kapitel-Stile

% Literaturverzeichnis in Inhaltsverzeichnis aufnehmen
\usepackage[nottoc]{tocbibind}

% Control the fonts and formatting used in the table of contents.
\usepackage[titles]{tocloft}

\usepackage[Lenny]{fncychap} % Kapitel-Rahmen am Beginn jedes neuen Kapitels
\usepackage{lineno}   % Zeilennummern, für Korrekturlesen praktisch

%% GLOBALE EINSTELLUNGEN, BEFEHLE

%% Aesthetic spacing redefines that look nicer to me than the defaults.
\setlength{\cftbeforechapskip}{2ex}
\setlength{\cftbeforesecskip}{0.5ex}

\allsectionsfont{\usefont{OT1}{phv}{bc}{n}\selectfont} % schmalere Kapitelüberschriften
\renewcommand{\captionfont}{\small} % schönere Bildunterschriften

\newcommand{\autor}[1]{\textsc{#1}} % Makro für Autor(en) im Fließtext
\newcommand{\degr}{\ensuremath{^\circ}} % Grad-Kreis
\newcommand{\mum}{\ensuremath{\,\mu\textrm{m}}}
\newcommand{\subcaption}[1]{\footnotesize\itshape #1}
\newcommand{\matlab}{\emph{MATLAB}\xspace}

%% Use Helvetica-Narrow Bold for Chapter entries
\renewcommand{\cftchapfont}{%
  \fontsize{11}{13}\usefont{OT1}{phv}{bc}{n}\selectfont
}

\renewcommand{\baselinestretch}{1.5} % Zeilenabstand 1.5

% Verhindern von "`Schusterjungen"' und "`Hurenkindern"'
\clubpenalty = 10000
\widowpenalty = 10000
\displaywidowpenalty = 10000
\tolerance=500 %Zeilenumbruch

%% BEGINN DES EIGENTLICHEN DOKUMENTS

\begin{document}
...
\end{document}
</pre>