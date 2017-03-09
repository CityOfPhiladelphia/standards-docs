---
title: Contact blocks
date: 2017-02-03
menu:
  main:
    parent: design-development
    pre: hide
  side:
    parent: components
---

Put all department contact info and social media links in a contact block.

<div class="large-10 columns connect vcard">
{{< contact-block >}}
</div>

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< contact-block >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation

The contact block template uses the <a href="http://microformats.org/wiki/hcard" class="external">hCard</a> standard for marking up contact information. Even if you do not use the contact block as it is rendered above, use the appropriate hCard markup for all contact information.

{{% /accordion %}}

{{</ accordion-wrap >}}
