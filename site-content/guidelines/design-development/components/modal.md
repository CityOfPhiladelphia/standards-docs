---
title: Modals
date: 2017-05-11
description: Modals can be used for content that is short doesn't require an entire page, like an email subscribe form.
menu:
  main:
    parent: components
---

Use modals to display content that is not substantial enough to warrant its own page or navigation item, for example, a newsletter signup, as shown in the example below.

<div>
  <a data-open="example-modal" class="button full-width">
    <div class="valign">
      <div class="button-label valign-cell">View an example modal</div>
    </div>
  </a>
</div>

{{< components-modal >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}

<h3>Modal button</h3>
{{< highlight html >}}<div>
  <a data-open="example-modal" class="button full-width">
    <div class="valign">
      <div class="button-label valign-cell">View an example modal</div>
    </div>
  </a>
</div>{{</ highlight >}}

<h3>Modal</h3>

  {{< highlight html >}}{{< components-modal >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation
Modals are most often calls to action to fill out a form, etc. As such, a button should be used as the link to open a modal, as in the example above.

The `data-open` attribute should be applied to the button link and the value of that attribute should match the id of the div to be opened.

{{% /accordion %}}


{{< /accordion-wrap >}}
