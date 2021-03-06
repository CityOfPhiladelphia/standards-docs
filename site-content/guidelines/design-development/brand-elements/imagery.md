---
title: Imagery
date: 2017-01-31
description: Use these image guidelines to create beautiful digital experiences.
menu:
  main:
    parent: brand-elements
    weight: 3
---

Carefully considered photography brings another dimension to the City’s brand identity. Pictures should be expressive, show real people and emotions, and be cropped for greatest effect. Aim for a photojournalistic approach, creating a sense of place, and showing real-life interactions between people. Never use a photo that’s contrived or cliched. Dynamic lines, angles and cropping give images personality.


Guidelines:  

1. Images must be at least 300 dpi  
2. Must use imagery that is not visibly dated  
3. Must be photographs that have been taken in Philadelphia  
4. No cell phone pictures  
5. Add photo credit where photo credit is due

![Example of appropriate imagery](/img/imagery-example-1.jpg)
![Example of appropriate imagery](/img/imagery-example-2.jpg)

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}
  <img src="imagery-example-1.jpg" alt="Example of appropriate imagery">
  <img src="city-of-philadelphia-logo.jpg" alt="City of Philadelphia">{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation
All images are required to have alternate text.

Good alternate text describes the image within its surrounding context. For example, a headshot of a person should contain the person's name. Never say "Photo of", as it is unnecessary.

**Example:** `<img src="captain-picard.jpg" alt="Captain Jean-Luc Picard">`

If an image contains text, like a logo, that text must be the alternate text.

**Example:** `<img src="city-of-philadelphia-logo.jpg" alt="City of Philadelphia">`

If the image is purely visual and does not contain meaningful information, the alternate text can be blank, but the attribute must be present. This indicates to screenreaders that the image is not important to understanding the content on the page.

**Example:** `<img src="hero-header-background.jpg" alt="">`

You can read more about alternate text on the <a href="http://webaim.org/techniques/alttext/" class="external">WebAIM website</a>.
{{% /accordion %}}

{{</ accordion-wrap >}}
