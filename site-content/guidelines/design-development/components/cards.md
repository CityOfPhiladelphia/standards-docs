---
title: Cards
date: 2017-02-03
menu:
  main:
    parent: components
---

A card serves as an entry point to more detailed information. The type of card depends on your use case. There are three types of cards:

1. [Media](#media-cards) -- used to display news and blog posts.
2. [Call to action](#call-to-action-cards) -- used to highlight other websites where more information about a topic can be found.
3. [Summary](#summary-cards) -- used to provide more information about a page before a clickthrough.

### Media cards
{{< card-media >}}

### Call to action cards
{{< card-cta >}}

### Summary cards
{{< card-summary >}}

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
A call to action card must contain an icon relating to the topic of the card, a title, and a short description. This is the only card type that should link to off-site content.

Apply the `card--action` class and the base `card` class to an `<a>` tag.

### Summary cards
Summary cards are used to display more information about a page within a site section. They must contain a heading and a short description.

Apply the `card--summary` class and the base `card` class to an `<a>` tag.

{{% /accordion %}}

{{</ accordion-wrap >}}
