---
title: Forms
date: 2017-05-22
description: Use forms to collect information or feedback.
menu:
  main:
    parent: components
---


### Text inputs
{{< form-text-inputs >}}

### Checkboxes
{{< form-controls-checkboxes >}}

### Radios
{{< form-controls-radios >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  <h3>Text inputs</h3>

  {{< highlight html >}}{{< form-text-inputs >}}{{</ highlight >}}
  <h3>Checkboxes</h3>
  {{< highlight html >}}

  {{< form-controls-checkboxes >}}
  {{</ highlight >}}

  <h3>Radios</h3>
  {{< highlight html >}}

  {{< form-controls-radios >}}
  {{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
### Accessibility

All form elements must have matching labels in order to be accessible to screen readers. The label's `for` attribute value must match the form element id.
{{% /accordion %}}
{{</ accordion-wrap >}}
