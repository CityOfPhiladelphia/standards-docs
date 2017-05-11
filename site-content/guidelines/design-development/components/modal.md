---
title: Modals
date: 2017-05-11
menu:
  main:
    parent: components
---

Use modals to display content that is not substantial enough to warrant it's own page or navigation item, for example, a newsletter signup.

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



{{% /accordion %}}


{{< /accordion-wrap >}}
