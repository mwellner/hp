---
title: Creating a participant database
date: 2009-04-24T18:00:26+00:00
lastmod: 2018-10-21T13:13:13+00:00
author: Mathias Wellner
categories:
  - programming
tags:
  - matlab
  - sql
---
Is it possible to access an SQL database with Matlab? In this article I will explain how to create and access a participant database.
<!--more-->

#### Problem

The initial intention was to keep track of those people who have participated in one of our rowing studies. The second goal was to keep track of how our raw data is organised. Therefore, I designed a relational database with MS Access. In this article I will focus on general database design issues and how to access the database with Matlab. You could use any other [relational database management system](http://en.wikipedia.org/wiki/Relational_database_management_system), which is compatible to the [SQL standard](http://en.wikipedia.org/wiki/SQL).

A nice side-effect of such a database is their possible integration in Matlab. We can get the names of all participants of a certain study and analyse their data.

#### Database structure

The first relation contains the _participant_ information.

  * ID [primary key]
  * LastName
  * FirstName
  * Gender
  * BirthDate
  * CategoryID [foreign key]
  * Comment

The rowing skill of the participant should be identified in a repetible way, therefore a separate relation contains all possible skill levels.

_Category_

  * ID [primary key]
  * Label
  * Description

The next obvious relation describes our studies.

_Study_

  * ID [primary key]
  * Label
  * Responsible person(s)
  * Data folder

We now need a connection between participants and studies, including the possibility of several runs. This is implemented with the relation _Participant takes part_. Note that the primary key is a combination of ParticipantID, StudyID, and RunNumber to prevent double-insertion of data.

  * ParticipantID [primary key, foreign key]
  * StudyID [primary key, foreign key]
  * RunDate
  * RunNumber [primary key]
  * DataValid

For our _raw variables_ (oar angles, seat position, physiological data) we also define a relation.

  * Id [primary key]
  * Name
  * Description
  * Unit

Our raw data comes in a huge matrix, where each row contains the recording at one specific point in time and each column one raw variable. The assignment of raw data to columns can differ for different studies.

_Raw variable is in column_

  * RawVariableID [primary key, foreign key]
  * StudyID [primary key, foreign key]
  * Column (in xPC output log)

#### Database access with Matlab

We can now use the power of SQL statements to query the database for a specific participant. As a more complex example, I will demonstrate how to get all participants of one study.

The following Matlab code builds an SQL query and executes it with an existing database connection (`database` command). You need to define an ODBC connection first, see the Matlab documentation for more details on that.

{{<highlight m "linenos=table">}}
% define parts of SQL statement
study = '''Study1'''; % define study, add addition '' because of spaces
columns = 'LastName, FirstName'; % define columns for selection
from = 'Participant p, TakesPart t, Study s'; % define tables for selection
where = ['p.ID = t.ParticipantID AND s.ID = t.StudyID AND s.Label = ', study]; % define inner join conditions
order = 'LastName, FirstName'; % define order of results
% combine parts to SQL query
query = sprintf('SELECT %s FROM %s WHERE %s ORDER BY %s', columns, from, where, order);
curs = exec(DatabaseConnection, query); % execute SQL query
curs = fetch(curs); % fetch data in same cursor structure
curs.Data
close(curs);
{{</highlight>}}

The created query is:

`SELECT LastName, FirstName FROM Participant p, TakesPart t, Study s WHERE p.ID = t.ParticipantID AND s.ID = t.StudyID AND s.Label = 'Study1' ORDER BY LastName, FirstName`

#### Conclusion

I showed how to design a participant database and query it with Matlab.