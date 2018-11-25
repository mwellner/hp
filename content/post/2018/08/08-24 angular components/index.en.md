---
date: "2018-08-24T21:23:12"
lastmod: 2018-09-12T00:03:58+00:00
title: Extending Angular Components
author: Mathias Wellner
categories:
  - software
tags:
  - angular
  - component
---
Angular components are a powerful way to develop web applications. And there are so many helpful npm packages out there, which solve many of the intricate problems. But very often customers will not be happy with the standard solution out of the box. And so the question comes up how to gracefully extend existing 3rd party components. 
<!--more-->

Although I use Angular as an example of choice here, similar concepts will exist for other component frameworks. 

#### Overview of approaches

1. Copy it and adapt to your needs
1. Wrap 3rd-party component
1. Extend 3rd-party component

#### Copy and adapt

This is the approach, I have seen most often. That is the only reason why I have put it up front. It is not advisable, for a variety of reasons. 

* You get duplicate code in your project, code that you don't understand and don't want to maintain.
* You are bound to a particular version and can't profit from version updates.
* It is very difficult for people in the future to see the separation between the original component and your adaptations.

#### Wrap it

That approach works fine in most circumstances. Especially when you create your own component library with custom data types, creating a wrapper component is a good idea, as it abstracts away the implementation details and provides a defined interface. You can also change the inner components with some effort. 

{{<highlight ts "linenos=table">}}
@import { Component } from '@angular/core';

@Component({
  selector: 'my-multi-select',
  template: 'template with 3rd party component usage...'
})
export class MyMultiSelectComponent {
  // code here...
}
{{</highlight>}}

This example defines our MyMultiSelectComponent and uses internally a 3rd-party component. 

#### Extend existing component

This is a very elegant solution which should be used for most copy/adapt cases. You can extend existing components, add additional features, extend callbacks. I have used this in a recent project for chart features, which were not provided by the original library ([ngx-charts](https://github.com/swimlane/ngx-charts)). 

{{<highlight ts "linenos=table">}}
@import { Component, Input } from '@angular/core';
@import { BarVerticalComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'my-vertical-bar',
  template: 'modified template'
})
export class MyBarVerticalComponent extends BarVerticalComponent {
  @Input() additionalInput: number;

  update(): void {
    super.update();
    // do something with this.additionalInput here...
  }
}
{{</highlight>}}

We define our component _MyBarVerticalComponent_ which extends _BarVerticalComponent_ from [ngx-charts](https://github.com/swimlane/ngx-charts). Note that _update()_ is an existing function in the original component ([line 124 in the source file](https://github.com/swimlane/ngx-charts/blob/0f9bdd6ff610775b7369334d3902acbc92b9a8f1/src/bar-chart/bar-vertical.component.ts#L124)), which we overwrite. However, we call the original function with _super.update()_ and add our logic afterwards. 

Please note that you need to define everything in the @Component decorator, including the template. You can't inherit the template. You can only extend the class itself. But in most cases, you need to update the template anyways when implementing the new features. 
