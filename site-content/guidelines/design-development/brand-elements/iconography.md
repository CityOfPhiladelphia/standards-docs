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

### Icon use example

The press release template uses icons to reinforce the type of content the user is accessing.

{{< press-release >}}

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
The Font Awesome 4.7.0 css is included in the standards css file. You do not need to include it in your project separately.

You will need to include the font files, located in the `/fonts` directory. The standards css file expects `/fonts` to live at the root of the project structure, in order to be referenced correctly. You can see all the <a href="http://fontawesome.io/icons/" class="external">available icons</a> as well as <a href="http://fontawesome.io/examples/" class="external">examples of their use</a> on the <a href="http://fontawesome.io/" class="external">Font Awesome website</a>.

{{% /accordion %}}

{{</ accordion-wrap >}}
