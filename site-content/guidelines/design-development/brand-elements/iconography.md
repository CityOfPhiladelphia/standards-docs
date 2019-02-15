---
title: Iconography
date: 2017-01-31
description: When and how to use icons with the context of Standards.
menu:
  main:
    parent: brand-elements
    weight: 5
---

Choose icons from <a href="http://fontawesome.io/" class="external">Font Awesome</a>, the open source toolkit by <a href="https://twitter.com/davegandy" class="external">@davegandy</a>. Iconography should provide a simple, visual indicator of key actions or tasks. Use icons to create stronger contextual emphasis on a page.

{{< icons >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< icons >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Accessibility

Icons will be read aloud to screen readers by default. If the icon is purely decorative in nature, add `aria-hidden="true"` to the `<i>` tag to prevent it from being announced by screen readers.

Additionally, if the icon has meaning in the current context, use the `aria-label` attribute with a value that identifies the way the icon is being used or the location the link take the user.

**Example:** {{< highlight html >}}
<a class="site-search" aria-label="Search">
  <i class="fas fa-search fa-2x" aria-hidden="true"></i>
</a>
{{</ highlight >}}

## Implementation
Version 1.0 of the Digital Standards no longer includes FontAwesome. However, certain form fields rely on the use of FontAwesome icons. Contact <a href="mailto:oddt@phila.gov">oddt@phila.gov</a> to be given access to the FontAwesome Pro account. 

{{% /accordion %}}

{{</ accordion-wrap >}}
