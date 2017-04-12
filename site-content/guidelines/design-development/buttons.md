---
title: Buttons
date: 2017-02-01
menu:
  main:
    parent: design-development
  side:
---

Use buttons for actions. The default color for buttons is electric blue. The text is dark gray. The hover state is dark gray with white text. Add an icon when appropriate.

Use “See all" buttons at the end of any incomplete list, including news, notices, and services & information lists, to indicate that the link will take the user to a complete list of that type of information.

{{< button >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< button >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation
To use a button on an anchor link, apply the `button` class. For consistent alignment across devices and browsers, use the `valign` and `valign-cell` utility classes to wrap the button label.

The margin classes in the example above `mtm` and `mts` are for in-page placement. They are not required.

Buttons are not required to be nested inside a row and column set, as in the above example, but an enclosing `<div>` is required.

{{% /accordion %}}

{{</ accordion-wrap >}}
