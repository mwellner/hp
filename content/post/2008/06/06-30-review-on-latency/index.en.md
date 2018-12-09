---
title: Review on Latency
date: 2008-06-30T14:38:03+00:00
lastmod: 2018-12-09T20:49:11+00:00
author: Mathias Wellner
categories:
  - science
tags:
  - virtual reality
---
_With virtual environments and realism being the central topic of my dissertation, I did a review on which latencies are acceptable for virtual environments. The goal of this review was to define requirements for our rowing scenario. I would appreciate feedback and comments on this review._ 

Two main limitations of realism in virtual environments are a delayed response to user actions and desynchronized events. The cause for these undesired eff ects is the delay of the components and of the architecture as a whole. Examples for these speci fic delays are (Jacobs, Livingston, & State, 1997)

  * **sensor delay:** the time until the sensor output signal reacts to the user action,
  * **network delay:** delays due to signal transportation,
  * **computational delay:** delays due to computational algorithms,
  * **rendering delay:** time elapsed while the graphics/sound engine is generating the resulting picture/sound,
  * **synchronization delay:** time in which data is waiting between stages without being processed,
  * **operating system delay:** Windows XP is not a real time system, therefore the execution of code can be delayed due to other threads or operating system activities, and
  * **display/actuator delay:** the time between setting the input signal and the display&#8217;s or actuator&#8217;s reaction.

The overall time between a user action and the system response is de fined as end-to-end latency. Relative latency refers to the lag between di fferent modalities, e.g. between seeing an object crash on the ground and hearing the sound of this event. Jacobs et al. (1997) emphasized the importance of a small relative latency and suggested methods to minimize relative latency.

One associated term is consistency which can be achieved by temporal and spatial synchronization of events, causality or ordering of events, and concurrency (multiple user interaction with one entity) (Delaney, Ward, & Mcloone, 2006). The authors discuss these terms for distributed interactive applications, for our single-user application concurrency does not apply. But temporal synchronization is an issue and therefore the relative latency must be minimized.

A lot of research exists on which latency is defensible for visual feedback in virtual reality environments. For visual feedback of hand motion, a end-to-end latency of greater than 100 ms restricted users to slow, careful movements (Friedmann, Starner, & Pentland, 1992). Experiments with head-mounted displays indicate that end-to-end latencies of 100 ms and 200 ms lead to an unstable perception of the environment (Allison, Harris, Jenkin, Jasiobedzka, & Zacher, 2001). Using head-mounted displays to display a pit room enviroment, Meehan, Razzaque, Whitton, and Brooks (2003) showed that latencies of 50 ms led to a higher self-reported sense of presence and a statistically higher change in heart rate than 90 ms. They also report that latencies beyond 120 ms produced unacceptable results.

Few results exist on auditory feedback. It is common knowledge among audio technicians, that latencies of 10 ms or less are needed for studio recordings. Friedmann et al. (1992) report 67 ms for their sound generation process and used a prediction method to synchronize sound output. More interesting for applications with multi-modal feedback are studies on cross-modal synchronization threshold. For audiovisual synchronization, Miner and Caudell (1998) report an average value of 175 ms and a minimal value of 100 ms. Their underlying explanation for this rather large value is that humans are used to some level of audiovisual desynchronization due to the di fferent propagation speeds of light and sound.

Latencies of 20-30 ms or less are needed for music applications with a clearly-structured rhythm (Lago & Kon, 2004). Regarding haptic-auditory synchronization, the authors report that piano players face delays of 30-100 ms, depending on the volume and character of the note to be played. Regardless of this deviation, professional piano players are able to compensate this e ffect and get in synchrony. For rowing, higher values are certainly acceptable, as the overall movement takes a long time.

Regarding frame rates, the VR community demands at least 10 fps to provide an immersive experience to the user (Roy, Cruz-Neira, & Defanti, 1995). It is obvious that a low frame rate contributes to latency, as the projector may take some time before refreshing the image, even if the updated scene had already been rendered by the graphics pipeline.