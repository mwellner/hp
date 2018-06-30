---
title: UX Munich -- Conference Notes
slug: ux-munich-conference-notes
date: 2015-03-20T22:10:23+00:00
lastmod: 2018-06-30T19:29:55+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - munich
  - user experience
---
**The Conference**

The conference location was a beautiful building in walking distance of Munich main station, the <a href="http://www.kuenstlerhaus-muc.de/" title="Münchner Künstlerhaus" target="_blank">Künstlerhaus</a>. It is an old building and has style, and as such is a perfect meeting venue for UX enthusiasts. 

The <a href="http://2015.uxmunich.com/" title="UX Munich" target="_blank">UX Munich</a> is intended for &#8220;designers and developers, who build great user experiences – together&#8221;. That sounded appealing to me, as I have experienced countless discussions about user experience and see this as an interdisciplinary topic. And I have also developed some new components for <a href="http://comparis.ch" title="comparis.ch" target="_blank">comparis.ch</a> and embrace all efforts towards more intuitive user interfaces, although that means a lot of work.

My intention in going to this conference was to get an idea what&#8217;s going on in the scene and understand basic principles and methods. Important questions for me are

  1. How do users perceive and interpret web sites?
  2. What are best practices to make web sites user-friendly?
  3. What are current technologies to enhance usability?

**<a href="http://felixniklas.de/" title="Felix Niklas" target="_blank">Felix Niklas</a> – The Web is Amazing**

Felix is a playful developer, using web technologies to implement several kinds of applications. 

  * <a href="https://github.com/mrflix/paperfold" title="paperfold.js" target="_blank">paperfold.js</a> &ndash; JavaScript library to include paper folding effect for a section
  * <a href="https://github.com/mrflix/dimensions" title="dimensions" target="_blank">dimensions</a> &ndash; Chrome plugin to show pixel dimensions of site elements

**kurzgesagt**

The two guys from <a href="http://kurzgesagt.org/" title="kurzgesagt" target="_blank">kurzgesagt</a> introduced their company, which has the main focus of creating animated videos to explain scientific topics. And they put that on YouTube for free. One example was _What is life?_



To fund these videos, about 50% of their time goes into commercial projects. The workflow to get such a video is quite elaborate. A lot of time goes into research of topics, leading to a first version of the script. After several iterations, cutting out everything not strictly needed, they start to animate, compose the music and have a professional speaker do the voice work. Overall, 250 hours of work go into a video of five minutes, excluding research. 

**Tiffany Conroy &ndash; User Capabilities**

Tiffany (<a href="https://twitter.com/theophani" title="@theophany" target="_blank">@theophani</a>) works at <a href="https://soundcloud.com/" title="SoundCloud" target="_blank">SoundCloud</a>, a platform to release, share and distribute music. The topic user capabilities was a rather technical one, how do you manage user permissions in a rapidly-growing system? They started with certain features only available to pro users. In addition, they had new experimental features, and later on podcast partners who should also have access to certain pro features. 

The two basic concepts are <a href="https://en.wikipedia.org/wiki/Access_control_list" title="Access control list" target="_blank">access control lists</a> (ACL) and <a href="https://en.wikipedia.org/wiki/Role-based_access_control" title="Role-based access control" target="_blank">role-based access control</a> (RBAC). I got in contact with ACL when developing an in-house time reporting system with <a href="http://cakephp.org/" title="CakePHP" target="_blank">CakePHP</a>. And I could perfectly understand Tiffanys argument, that this approach gets confusing and difficult to maintain quickly. She advocated the RBAC approach, that users have capabilities (like seeing an order or create an account). Based on that approach, the server must enforce it and the client reflect it (visibility), with an API that allows this kind of question, e.g can the current user see orders?

> A user interface is like a joke. If you have to explain it, it&#8217;s not that good. 

**<a href="http://en.wikipedia.org/wiki/Erik_Spiekermann" title="Erik Spiekermann" target="_blank">Erik Spiekerman</a> &ndash; Life is in beta**

With his 67 years, numerous typefaces and prices, Erik was surely the speaker with the highest profile on the conference. His talk was politically incorrect and entertaining. He started with the casual remark that <a href="http://en.wikipedia.org/wiki/Flat_design" title="Flat design" target="_blank">flat design</a> was nothing new, he had always done that for print. 

> We don&#8217;t do what clients tell, until we know what they need. 

**<a href="http://www.rachelilansimpson.com/" title="Rachel Ilan, Design" target="_blank">Rachel Simpson</a> &ndash; Unboxing UX**

Rachel is an interaction designer and works for Google in Munich. She brought in the idea that UX is a shared vision between design and engineering. And to make prototyping more easily accessible, she recommended the <a href="https://popapp.in/" title="Prototyping On Paper" target="_blank">Prototyping On Paper</a> (POP) app, which is free. 

When users enter a site, they ask these questions in this order.

  1. What ist this?
  2. Do I trust you?
  3. What are you offering me?
  4. How do I get it?



**<a href="http://www.bramstein.com/" title="Bram Stein" target="_blank">Bram Stein</a> &ndash; The Consequences of Web Fonts**

With the introduction of <a href="https://en.wikipedia.org/wiki/Web_typography#Web_fonts" title="Web fonts" target="_blank">web fonts</a>, you can determine exactly which font is used on your site. But that gives rise to some issues. It takes some time until your custom font is loaded, what do you do in this time? 

  1. Wait until the font is loaded (flash of invisible text)
  2. Display the text with the default font and switch to the font once it is loaded (flash of unstyled text)

For a fast connection, the first option seems right, but if you consider slower connection speeds on mobile devices, you may prefer the second option. Otherwise it can take quite some time until the user sees content that is already there. Unfortunately, most browsers have a different default. And although there is a css property proposition to define this particular behaviour (<a href="https://github.com/KenjiBaheux/css-font-rendering" title="CSS font rendering" target="_blank">font-rendering</a>), it is not implemented yet. But Bram has developed a JavaScript library which toggles classes and can be used as a work-around, which is now available in the <a href="https://github.com/typekit/webfontloader" title="WebFontLoader" target="_blank">webfontloader library</a>. So you can use this library in combination with carefully selected fallback fonts, matched for their x-height. In this case, the flash is not as severe as initially. To know which fonts are available on which platform, you can use <a href="http://fontfamily.io" title="FontFamily" target="_blank">fontfamily.io</a>.

**Conclusion**

I enjoyed the two days very much, but I missed some talks from a more scientific perspective. Perception psychology surely has interesting insights to offer.