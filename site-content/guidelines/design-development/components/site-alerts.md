---
title: Site alerts
date: 2017-02-01
menu:
  main:
    parent: design-development
    pre: hide
  side:
    parent: components
---

We have two types of alerts, service updates and site-wide alerts.

### Service updates
Service updates call out important time-sensitive information. They can be used on the homepage, and department landing pages if needed. They tell users the status of a system (transportation, trash, government facilities, etc). This includes current system disruptions as well as warnings.

{{< service-updates >}}

### Site-wide alerts
Site-wide alerts are used to call out important information across the whole website. These are to be used in true emergencies only.

![Site-wide alert placement example](/standards-docs/img/components/site-wide-alert-example.jpg)

{{< site-wide-alert >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  <h3>Service updates</h3>
  {{< highlight html >}}{{< service-updates >}}{{</ highlight >}}

  <h3>Site-wide alerts</h3>
  {{< highlight html >}}{{< site-wide-alert >}}{{</ highlight >}}

{{< /accordion >}}

{{% /accordion %}}

{{</ accordion-wrap >}}
