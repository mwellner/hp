---
title: Vue JS Checkbox Binding
date: 2020-02-13T19:22:12+00:00
lastmod: 2020-02-14T00:13:59+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - vuejs
---

The [Vue JS forms documentation](https://vuejs.org/v2/guide/forms.html) suggests the _v-model_ double binding for input form elements.

{{<highlight html>}}
<input type="checkbox" id="checkbox" v-model="checked">
{{</highlight>}}

There are cases, where a manual double binding is favorable, e.g. when using Vuex. The syntax for checkboxes is.

{{<highlight html>}}
<input type="checkbox" id="checkbox" v-bind:checked="checked" v-on:change="onChange($event)">
{{</highlight>}}

Do not use the _input_ event, as this is not triggered on Internet Explorer 11.
