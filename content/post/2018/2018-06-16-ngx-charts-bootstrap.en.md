---
date: "2018-06-16T19:16:21"
lastmod: 2018-06-16T22:53:21+00:00
title: Using ngx-charts in a grid
author: Mathias Wellner
categories:
  - software
tags:
  - angular
  - bootstrap
---
In one of my recent work projects, we are using charts within a [Bootstrap grid](https://getbootstrap.com/docs/4.1/layout/grid/). After updating from [Chartist](https://gionkunz.github.io/chartist-js) to [ngx-charts](https://github.com/swimlane/ngx-charts), we had a severe issue with the charts, which suddenly overlapped each other. I would like to share my investigation and solution for this issue.

<!--more-->

##### Why we changed to ngx-charts

When building more and more charts, we realized that Chartist did not provide some features we needed, in particular click handlers. Although I had implemented a click handler for simple diagrams, adding one for multi-dimensional data seemed daunting and error-prone. So _ngx-charts_ came into play, supporting many more chart types and click handlers. Also the integration seemed easier for an Angular application. 

The [ngx-charts demo site](https://swimlane.github.io/ngx-charts/#/ngx-charts/bar-vertical) also suggested responsive behaviour as there was an option _Fit Container_, which is actually the default behaviour when no size is specified. But when changing our charts to _ngx-charts_ we suddenly had non-responsive charts, overlapping each other, causing some distress. 

##### The problem

I have created a [sample application](https://mwellner.de/apps/charts/) to illustrate the issue. It uses a Bootstrap grid with gray columns. The column contains a chart inside of a wrapping _div_ element (see [app.component.html](https://github.com/mwellner/ngx-charts-in-grid/blob/master/src/app/app.component.html)). In the actual implementation this _div_ contains a chart type switch. But to see the issue, a simple _div_ is sufficient. 

The chart has now a fixed size of 600x400 and ignores the width of the grid column. This is not the behaviour we expected. Especially for multiple columns, we see overlapping charts.

##### A simple solution

In the ngx-charts examples, absolute positioning is used for the chart, which has an actual container available to fill. In our case, only the width is defined, the wrapping div has no height set initially. So filling this available space is not possible for the library, instead a default size is used. 

When using a defined height of 200px, the chart behaves as expected. Please use my [sample application](https://github.com/mwellner/ngx-charts-in-grid) to test yourself. 

Using a fixed height may not be the ideal solution. One approach could also be to maintain an aspect ratio. This could be achieved with an element resize listener which adjusts the height. 
