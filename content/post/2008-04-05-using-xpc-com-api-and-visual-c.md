---
id: 808
title: 'Using xPC COM API and Visual C#'
date: 2008-04-05T16:00:34+00:00
author: Mathias Wellner
layout: post
guid: http://blogs.ethz.ch/mwellner/2008/04/05/using-xpc-com-api-and-visual-c/
permalink: /2008/04/05/using-xpc-com-api-and-visual-c/?lang=en
podPressPostSpecific:
  - 's:264:"s:255:"a:6:{s:15:"itunes:subtitle";s:15:"##PostExcerpt##";s:14:"itunes:summary";s:15:"##PostExcerpt##";s:15:"itunes:keywords";s:17:"##WordPressCats##";s:13:"itunes:author";s:10:"##Global##";s:15:"itunes:explicit";s:7:"Default";s:12:"itunes:block";s:7:"Default";}";";'
tags:
  - 'c#'
  - matlab
  - programming
  - simulink
  - target
  - xpc
  - xpc api
  - xpc com api
---
This entry is for those who want to control an xPC target computer with a program written in C#. I personally did not find any example how to do this, the documentation provides an example using Visual Basic, but I found a simpler way. I do only use the xPC COM API (which must be included as reference in the project) and not the model COM interface. I think this is easier because you don&#8217;t have to reinsert the model reference if you recompile it.

The example here is a very simple one. I just needed to connect to the target, load the application, and register one signal, which I need to access. Please note that you need to insert a gain element with value 1 to register a signal (Target.GetSignalIdx).

<pre name="code" class="c#">using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using XPCAPICOMLib;

namespace ProjectNamespace
{
    class XPC_COM
    {
        private xPCProtocol Protocol;  // from XPCAPICOMLib
        private xPCTarget Target;      // from XPCAPICOMLib
        private int SignalID;   // signal ID for one signal

        public XPC_COM()  // constructor for XPC_COM object
        {
            // initialize protocol and target objects
            Protocol = new xPCProtocol();
            Target = new xPCTarget();
            // establish connection to target
            Protocol.Init();
            Protocol.TcpIpConnect("192.168.0.1", "22222");
            // load application
            Target.Init(Protocol);
            Target.LoadApp("folder name", "model name");
            // find signal id
            SignalID = Target.GetSignalIdx("signal name");
        }

        ~XPC_COM() // destructor for XPC_COM object
        {
            // close connection to xPC target
            Protocol.Close();
        }

        public int isAppRunning()
        {
            return Target.IsAppRunning();
        }

        public void startApp()
        {
            Target.StartApp();
        }

        public void stopApp()
        {
            Target.StopApp();
        }

        public double getLength()
        {
            return Target.GetSignal(SignalID);
        }

    }
}
</pre>