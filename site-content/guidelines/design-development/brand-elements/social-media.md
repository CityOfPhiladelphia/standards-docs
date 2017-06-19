---
title: Social media
date: 2017-02-01
description: Visual guidelines for social media image use and technical details on open graph markup.
menu:
  main:
    parent: brand-elements
    weight: 6
---

The branding that you use on your department’s social media profiles should align with the City’s branding that is used on phila.gov. The brand should be reflected in your profile pictures, icons, header images, and other imagery. Your profile picture can be your logo, if you have one. If you need an image sized to the specifications required, contact <a href="mailto:oddt@phila.gov">oddt@phila.gov</a>.

Never use a pixelated or incorrectly sized image. Contact <a href="mailto:oddt@phila.gov">oddt@phila.gov</a> if you need imagery.

### beta.phila.gov department site
![Hero header example](/img/social-media/beta-hero-header.jpg)

### Facebook cover image
![Facebook cover image example](/img/social-media/facebook-cover-image.jpg)

### Twitter header photo
![Twitter header photo example](/img/social-media/twitter-header-photo.jpg)

### Open graph
<img src="/img/social-media/open-graph.jpg" alt="Open graph example" class="no-scale">

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}{{< open-graph >}}{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation

In addition to the visual guidelines, all phila.gov pages should use <a href="http://ogp.me/" class="external">open graph</a> meta tags.

The four required meta tags are:

* `og:title`
* `og:type`
* `og:image`
* `og:url`

If you are using the Standards markup in your site's header, you are only required to change the og:title and og:url. You are free to use the phila.gov default image, as shown in the example above. You can remove the included og:description if you choose to do so.

To see how a page on your site will appear when shared on social media, you can use the <a href="https://cards-dev.twitter.com/validator" class="external">Twitter Card validator</a> and the <a href="https://developers.facebook.com/tools/debug/sharing/" class="external">Facebook Sharing Debugger.</a>

{{% /accordion %}}

{{</ accordion-wrap >}}
