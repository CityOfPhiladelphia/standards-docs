---
title: Site alerts
date: 2017-02-01
description: Use alerts to convey critical information on a homepage or site-wide.
menu:
  main:
    parent: components
    weight: 800
---

There are two types of alerts, service updates and site-wide alerts.



### Service updates
Service updates call out important time-sensitive information. They can be used on the homepage, and department homepages. They tell users the status of a system (transportation, trash, government facilities, etc.). This includes current system disruptions as well as warnings.

You have one sentence for an alert. Begin with what is affected. Then what is happening. Then how long it will be going on. If you don’t know how long it will be going on, don’t include a time frame.

If there is a url where users can go to get more information, include a link in a second sentence. Don’t use the phrase “click here.”

If you know how long the thing will be going on, you can include that information in a third sentence. Here are three possible formats:

 * *[Single Date]* In Effect: July 26, 2016
 * *[Multiple Dates]* In Effect: July 26 - 28, 2016 - or- In Effect: July 25, 2016 & July 30, 2016
 * *[Dates & Time]* In Effect: From 9:00 a.m. to 10:00 a.m. on July 26, 2016

The color of a service update indicates the level of severity.

* Red -- indicates the service is currently experiencing a major problem.
* Yellow -- indicates a service may be affected, but is not completely unavailable.
* Green -- indicates it's all good.

{{< service-updates >}}

### Site-wide alerts
Site-wide alerts are used to call out important information across all pages of the website. These are meant to be used for emergencies.

Site-wide alerts appear on every page of the site as part of the header. They should be used sparingly so they have real impact every time they are used.

Site-wide alerts consist of:

 * A headline stating the kind of emergency.
 * A subhead containing an instruction and a link for more information.
 * A third line with information on how long this will be in effect, if known.

The format for how long something will be in effect is:

In effect: 6:30 p.m. on Friday, Sept. 9 to noon on Saturday, Sept. 10

**or**

In effect: Friday, Sept. 9 to Saturday, Sept. 10
{{< site-wide-alert >}}

#### Placement example
![Site-wide alert placement example](/img/components/site-wide-alert-example.jpg)

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  <h3>Service updates</h3>
  {{< highlight html >}}{{< service-updates >}}{{</ highlight >}}

  <h3>Site-wide alerts</h3>
  {{< highlight html >}}{{< site-wide-alert >}}{{</ highlight >}}

{{< /accordion >}}

{{</ accordion-wrap >}}
