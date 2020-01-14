---
title: 'Using xPC COM API and Visual C#'
date: 2008-04-05T16:00:34+00:00
lastmod: 2020-01-13T21:38:48+00:00
author: Mathias Wellner
categories:
  - software
tags:
  - matlab
  - programming
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