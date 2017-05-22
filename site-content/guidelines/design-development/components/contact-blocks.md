---
title: Contact blocks
date: 2017-02-03
description: Use contact blocks to display contact information.
menu:
  main:
    parent: components
---

Put all department contact info and social media links in a contact block. Contact blocks display important information about a department or entity. If possible, all four contact areas (address, phone, email, and social media) should always be displayed. If a field is missing, the row for that content should be removed.  

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
