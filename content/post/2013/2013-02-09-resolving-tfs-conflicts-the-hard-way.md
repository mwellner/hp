---
id: 3746
title: Resolving TFS conflicts the hard way
date: 2013-02-09T00:35:07+00:00
author: Mathias Wellner
layout: post
guid: http://www.mwellner.de/?p=3746
permalink: /2013/02/09/resolving-tfs-conflicts-the-hard-way/?lang=en
categories:
  - software
tags:
  - Conflict
  - Conflicts Channel
  - Merge
  - Microsoft
  - Resolve
  - TF
  - Tool @en
  - Version
  - Visual Studio
---
**The problem**

After some merge/check-in operation, I could not resolve conflicts with Visual Studio Conflicts Channel (MSDN has a guide on [resolving conflicts between two files](http://msdn.microsoft.com/en-us/library/ms181433%28v=vs.100%29.aspx)). I tried _Take Server Version_ and _Keep Local Version_, but the conflicts were reappearing. 

**The solution**

I finally managed to resolve the conflicts by using the command line tool TF. This contains the [Resolve Command](http://msdn.microsoft.com/en-us/library/6yw3tcdy%28v=vs.100%29.aspx). By using the parameter _/auto:DeleteConflict_ I could remove the conflict.