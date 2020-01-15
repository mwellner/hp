---
title: Security Headers
date: 2020-01-14T19:22:12+00:00
lastmod: 2020-01-14T20:23:07+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - web
---

Currently I work on a presentation about web application security based on [OWASP](https://wiki.owasp.org/index.php/Main_Page). One topic among many others involves [security headers](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers), which are usually sent by the server to prevent certain risks. I have also checked my weblog and added most headers in my Apache config file.
<!--more-->

- [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [X-Frame-Options](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/X-Frame-Options)
- [X-Content-Type-Options](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

Finally, the test at [securityheaders.com](https://securityheaders.com/) shows an A.

#### Apache Config

One tricky thing was how to set the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) header, which can grow to a quite long line. Luckily, the Apache [headers module](http://httpd.apache.org/docs/current/mod/mod_headers.html) offers quite some directives to add, modify and append to response headers. Especially _append_ helps to split a long header statement on multiple lines. But this alone will not work, as _append_ uses commas to separate the header directives. But the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) policy directives must be separated by semicolons. And here, another header directive comes to the rescue -- __edit*__ does a RegEx replace for multiple occurrences. 

{{<highlight apache "linenos=table">}}
<VirtualHost *:443>
  ...
  Header unset Content-Security-Policy
  Header add Content-Security-Policy "default-src 'self'"
  Header append Content-Security-Policy "script-src 'self' https://trusted.script.domain"
  Header append Content-Security-Policy "style-src 'self' https://trusted.style.domain"
  Header edit* Content-Security-Policy , ;
  ...
</VirtualHost>
{{</highlight>}}