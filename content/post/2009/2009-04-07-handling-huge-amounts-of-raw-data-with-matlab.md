---
id: 1085
title: Handling huge amounts of raw data with Matlab
date: 2009-04-07T12:12:41+00:00
author: Mathias Wellner
layout: post
guid: http://blogs.ethz.ch/mwellner/?p=1085
permalink: /2009/04/07/handling-huge-amounts-of-raw-data-with-matlab/?lang=en
podPressPostSpecific:
  - 's:264:"s:255:"a:6:{s:15:"itunes:subtitle";s:15:"##PostExcerpt##";s:14:"itunes:summary";s:15:"##PostExcerpt##";s:15:"itunes:keywords";s:17:"##WordPressCats##";s:13:"itunes:author";s:10:"##Global##";s:15:"itunes:explicit";s:7:"Default";s:12:"itunes:block";s:7:"Default";}";";'
tags:
  - access
  - experimental data
  - matlab
  - Postgres
  - raw data
  - SQL
  - workspace
---
**Problem**

The Matlab workspace is limited in size, depending on your system. We reached the workspace limit with a rowing study (10 participants, 1&thinsp;kHz sampling rate, 20 variables, 10 minutes duration). Although the extracted data fits very well in the workspace, the raw data does not. Therefore, a solution is needed with fast access to specific variables. This is needed for feature extraction and later display of data.

**Approach**

Three approaches were used to solve this problem,

  1. using a relational database (see [database toolbox](http://www.mathworks.com/products/database/)),
  2. storing the raw data in one workspace with multiple variables, and
  3. storing each raw data variable in one workspace.

Each approach was implemented and the access time to retrieve one variable was the goal criterium. The sample data set had 555k entries.

**Results**

The relational database system PostgreSQL was tested successfully but could not be used for large amounts of data. Already the storage of one data set took more than half an hour, and after a certain size an error occured with limited heap size. It seems that the driver implementation for Matlab does not allow big amounts of data.

The implementation with the Matlab workspaces was much possible, interestingly single workspaces proved more efficient than one combined workspace (only the desired variable was loaded from the combined workspace).

`<br />
>> clear all<br />
>> tic;load combined_workspace variable; toc<br />
Elapsed time is 9.0 seconds.<br />
>> clear all<br />
>> tic; load variable_workspace; toc<br />
Elapsed time is 1.1 seconds.<br />
` 

**Conclusions**

Using single workspaces for every variable is the fastest way of accessing huge amounts of raw data. The usage of a relational database system poses additional burdens, but it seems appropriate for smaller amounts of data (participants, block features, extracted data). The advantage over defining all these things in Matlab variables is the powerful SQL syntax for retrieving particular chunks of data. And in addition, the definition of primary keys and other conditions prevents you from inserting dublicate or faulty data in the database.