---
title: Fighting with JSON
date: 2016-11-18T16:47:25+00:00
lastmod: 2018-06-28T00:19:33+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - json
---
In my current project, I had to deal with huge JSON files, which contain the order and properties of our layout elements. 
For CSS styling purposes, I had to move one particular array item to the end, create a new object and move all existing 
elements inside of that new object. This was tedious work when I did that manually. 

So I decided to develop a little C# Console application, taking care of that for me. After a few hours I managed to 
complete it &ndash; and here are my learnings. 

#### Library

I went for [JSON.Net](http://www.newtonsoft.com/json), which is the de-facto standard for .NET. 

#### Parsing

The problem with JSON is that you can get different types (array, object). Hence, we do not want to be too type-specific 
to be able to cast to the expected type. And we have the wonderful [dynamic](https://msdn.microsoft.com/de-de/library/dd264741.aspx) 
type declaration, which prevents compile-time type checks. So we use _dynamic_ as long in the line as possible. 

<pre>
dynamic json = JsonConvert.DeserializeObject(jsonString)
dynamic element = json.GetValue("Element");
</pre>

#### Working with Elements

I found two techniques for selecting a particular element in the JSON tree. You can either use <a href="http://www.newtonsoft.com/json/help/html/SelectToken.htm" target="_blank">SelectToken</a>, which works best for nested objects. Alternatively you can also use <a href="https://msdn.microsoft.com/de-de/library/bb397906.aspx" target="_blank">LINQ queries</a> like FirstOrDefault(). 

To remove or add items, I converted to <a href="http://www.newtonsoft.com/json/help/html/t_newtonsoft_json_linq_jarray.htm" target="_blank">JArray</a>, which provides Add() and Remove() functionality. 

One important thing is to clone elements, which are inserted at a different position. Use <a href="http://www.newtonsoft.com/json/help/html/M_Newtonsoft_Json_Linq_JToken_DeepClone.htm" target="_blank">DeepClone()</a> to get your new element. 

#### Conclusion

After falling in the trap of quickly hand-editing a large JSON file, I developed a small command-line tool to do the modifications I needed.