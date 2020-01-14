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

- [Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [X-Frame-Options](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/X-Frame-Options)
- [X-Content-Type-Options](https://developer.mozilla.org/de/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

Finally, the test at [securityheaders.com](https://securityheaders.com/) shows an A.
