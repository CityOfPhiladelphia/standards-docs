---
title: Forms
date: 2017-05-22
description: Use forms to collect information or feedback.
menu:
  main:
    parent: components
    weight: 900
---


### Text inputs

Forms can be used to collect information, create sign ups, launch surveys, or extend interactions.

Use text inputs when collecting short information (first name, last name). HTML5 inputs allow for the collection of phone numbers and email addresses with modern browser built-in validation.

Some available fields have specific uses:

* **Text input error** - used to show that a field was incorrectly filled.
* **Text input success** - used to show errors are corrected.
* **Text areas**- allow for extended input. Use primarily for long-form information, like paragraphs.

{{< form-text-inputs >}}

### Checkboxes

Use checkboxes only when user can select one or more options.

{{< form-controls-checkboxes >}}

### Radios

Use radios only when users can select a single option.

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
