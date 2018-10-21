---
title: Ship It!
date: 2009-11-30T00:00:00+00:00
lastmod: 2018-10-21T13:13:13+00:00
author: Mathias Wellner
categories:
  - software
---
When a lot of people work together on software projects, a lot of things can go wrong. The book **Ship It!** by Jared Richardson and William Gwaltney Jr. introduces a number of techniques and tools to make software development teams more productive. During my time at the Sensory Motor Systems Lab, I was responsible for setting up a software development process for a small team. Therefore, most of the issues are well-known to me. And I guess, that we could have done much better by using more of the techniques described in the book. 

**Version control**

This is probably the most important step. If everybody uses a different set of source code with some bugs fixed and others not, there is no current version evident. Moreover, one main developer has to puzzle together the pieces to produce the working version of the project. The intelligent usage of a version control system creates a sandbox for every developer. The source code and all other relevant files to make the project run are stored in a central repository. Every developer can check out the current version, work on a feature or bug, and check the changes back in. If the program is broken, an earlier version can easily be retrieved. 

I have successfully worked with [TortoiseSVN/Subversion](http://tortoisesvn.tigris.org/), which integrates neatly in Windows Explorer. Subversion is based on a client/server architecture with one central repository and a number of local copies. Currently I have also tried [MercurialHg/Mercurial](http://tortoisehg.bitbucket.org/), a distributed version control system. There is no central repository there, but a number of distributed repositories, that can be synchronized. 

  * [Apache Subversion](http://subversion.apache.org/)
  * [TortoiseHg (Mercurial)](http://tortoisehg.bitbucket.org/)
  * [Git](https://git-scm.com/)

**Easy build**

The next step is to create one script for building the complete project, which runs on every system alike. The script file should be versioned as well (see version control above). At my earlier job, we had not quite achieved this step and used our IDE instead (Visual Studio). But this also worked quite well after adding all needed files (DLLs) into the project folder. 

  * [GNU Make](http://www.gnu.org/software/make/)
  * [Apache Ant (for Java)](http://ant.apache.org/)
  * [NAnt (for .NET)](http://nant.sourceforge.net/)
  * [Apache Maven](http://maven.apache.org/)

**Continuous integration**

To notice errors quickly, the project should be rebuilt automatically whenever someone commits new code. This is called continuous integration and thought to reveal integration errors quickly. On a first level, the correct compilation is tested. With unit tests, also the functionality of the code can be tested. Most continuous integration systems can create notifications in several formats (email, RSS feed, web page). 

  * [CruiseControl](http://cruisecontrol.sourceforge.net/)
  * [AntHill OS](http://www.anthillpro.com/html/products/anthillos/default.html)

**Tracking issues and features**

As soon as you have a version of your software out at the costumers, bugs (or issues) will be reported. The best way to handle this is to use a tracking system. 

  * [BugZilla](http://www.bugzilla.org/)
  * [Trac](http://trac.edgewall.org/)

**Automated testing**

This was already mentioned in continuous integration. A set of automatic tests needs to be run to track errors in the project early. Automated tests also prevent you from accidentally reinserting fixed bugs in your repository. 

  * [SUnit](http://sunit.sourceforge.net/)
  * [JUnit (for Java)](http://junit.sourceforge.net/)
  * [NUnit (for .NET)](http://www.mono-project.com/NUnit)