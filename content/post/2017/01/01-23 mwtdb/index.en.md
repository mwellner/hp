---
title: Theater Production and Actor Database
date: 2017-01-23T21:39:44+00:00
lastmod: 2018-06-23T19:09:50+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - angular
---
Currently, I am working on a hobby project, a [theater production and actor database](https://github.com/mwellner/mwtdb) 
(mwtdb for short). It is visible on GitHub and open source. 

### Requirements

What I want to create is something similar to [IMDb](http://www.imdb.com/), which focuses on 
movies, TV and celebreties, but for amateur theater. A very basic version will contain actors, directors and technicians, 
contributing to productions. 

From a technical point of view, I will create a web application, using [Angular](https://angular.io/)
and [Neo4j](https://neo4j.com/), a [graph database](https://en.wikipedia.org/wiki/Graph_database). The hope is that 
a graphical representation of the data at hand is better suited for retrieving the right data for a particular view. 

### First Steps

I have used [Angular CLI](https://cli.angular.io/) to initialize my application. [Bootstrap](https://v4-alpha.getbootstrap.com/) 
will be my front-end framework, along with [ng-bootstrap](https://ng-bootstrap.github.io/) for some interactive components. 

My first Angular components were [people](https://github.com/mwellner/mwtdb/blob/master/src/app/people/people.component.ts) 
(actors, directors) and [productions](https://github.com/mwellner/mwtdb/blob/master/src/app/productions/productions.component.ts), 
showing a list of existing items and allowing to add more entries. For the graph database, I have created a 
[database service](https://github.com/mwellner/mwtdb/blob/master/src/app/database.service.ts), which implements a few basic queries.