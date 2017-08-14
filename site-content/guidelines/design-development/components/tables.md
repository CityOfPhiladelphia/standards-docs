---
title: Tables
date: 2017-02-01
description: Use tables to organize tabular data.
menu:
  main:
    parent: components
    weight: 700
---

Tables are used to show data in columns and rows. They are only to be used for tabular data -- never for layout.

{{< table-horizontal >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< table-horizontal >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation

Add the `.stack` class to stack tables on small screens.

Optionally, add the `js-hide-empty` class to hide columns that contain no content.

{{% /accordion %}}

{{</ accordion-wrap >}}
