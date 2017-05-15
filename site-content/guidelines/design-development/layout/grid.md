---
title: Grid
date: 2017-02-01
menu:
  main:
    parent: layout
    weight: 1
---

The grid system is composed of 24 columns.
<div class="sg-grid">
  {{< grids >}}
</div>
---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< grids >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation
Add a `row` class on a div. Inside the row class, add `columns`. Pair the `columns` class with a breakpoint and a width. Example: The classes `columns medium-12` will render a 12 column (or 50% width) div on medium size screens and up. You can use `small-#`, `medium-#`, and `large-#`. For more information and to see all the available grid options, visit the <a href="http://foundation.zurb.com/sites/docs/grid.html" class="external">Foundation Documentation</a>.
{{% /accordion %}}

{{</ accordion-wrap >}}
