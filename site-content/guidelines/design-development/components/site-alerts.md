---
title: Site alerts
date: 2017-02-01
description: Use alerts to convey critical information on a homepage or site-wide.
menu:
  main:
    parent: components
---

There are two types of alerts, service updates and site-wide alerts.

### Service updates
Service updates call out important time-sensitive information. They can be used on the homepage, and department homepages. They tell users the status of a system (transportation, trash, government facilities, etc.). This includes current system disruptions as well as warnings.

The color of a service update indicates the level of severity.

* Red -- indicates the service is currently experiencing a major problem.
* Yellow -- indicates a service may be affected, but is not completely unavailable.
* Green -- indicates it's all good.

{{< service-updates >}}

### Site-wide alerts
Site-wide alerts are used to call out important information across all pages of the website. These are meant to be used for emergencies.

{{< site-wide-alert >}}

#### Placement example
![Site-wide alert placement example](/standards-docs/img/components/site-wide-alert-example.jpg)

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  <h3>Service updates</h3>
  {{< highlight html >}}{{< service-updates >}}{{</ highlight >}}

  <h3>Site-wide alerts</h3>
  {{< highlight html >}}{{< site-wide-alert >}}{{</ highlight >}}

{{< /accordion >}}

{{</ accordion-wrap >}}
