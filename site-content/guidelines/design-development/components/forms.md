---
title: Forms
date: 2017-05-22
description: Use forms to collect information or feedback.
menu:
  main:
    parent: components
---


### Text inputs

Forms can be used to collect information, create sign ups, launch surveys, or extend interactions. 
 
Use text inputs when collecting short information (first name, last name). HTML 5 inputs allow for the collection of phone numbers and email addresses with modern browser built-in validation. 

Some available forms have specific uses: 

* **Text input error** - used to show that a field was incorrectly filled.
* **Text input success** - used to show errors are corrected.
* **Text areas**- allow for expanded input. Can be used for notes or other text that may not fit within a specifically-constrained box. 


{{< form-text-inputs >}}

### Checkboxes

Use ONLY when user can select multiple options

{{< form-controls-checkboxes >}}

### Radios

Use ONLY when users are limited to a single option.

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
