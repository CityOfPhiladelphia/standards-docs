---
title: Cards
date: 2017-02-03
menu:
  main:
    parent: components
---

A card serves as an entry point to more detailed information. Cards may contain a photo, text, icon, or a link about a single subject. We use them to present news and blog items that have images. We also use them for resources that contain links to other sites.

### Media cards
{{< card-media >}}

### Call to action cards
{{< card-cta >}}

### Overview cards
{{< card-overview >}}

---

{{< accordion-wrap >}}

{{< accordion Code >}}
  {{< highlight html >}}
<h3>Media cards</h3>
{{< card-media >}}
<h3>Call to action cards</h3>
{{< card-cta >}}
<h3>Overview cards</h3>
{{< card-overview >}}
{{</ highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Implementation

Cards are a way to feature a link or a set of links in a section. Card types should not be mixed and have different markup requirements. Regardless of the card type, use a maximum of three cards in a row.

### Media card
The media card is the base for all card types.

Apply the `card` class to an `<a>` tag to use this card style. An image is required.

### Call to action cards
A call to action card must contain an icon relating to the topic of the card, a title and a short description. This is the only card type that can link to off-site content.

Apply the `card--action` class and the base `card` class to an `<a>` tag.

### Summary cards
Summary cards are used to display more information about a page within a site section. They must contain a heading and a short description.

Apply the `card--summary` class and the base `card` class to an `<a>` tag.

{{% /accordion %}}

{{</ accordion-wrap >}}
