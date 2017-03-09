---
title: Upgrade guide
date: 2017-03-07
menu:
  main:
    parent: technical-details
  side:
---
{{< panel wip >}}

The Standards are a re-worked version of the City's Pattern Portfolio. If you are migrating an existing application, use this guide to assist you with changes.

### Remove old references

1. Remove all references to patterns CSS and JavaScript.
2. Remove references to FontAwesome and Ionicons.
3. Remove references to Foundation JavaScript.

Depending on the complexity of the project, it may make sense for you to temporarily comment out your project's exiting JavaScript and Stylesheets.

### Add dependencies

Review the [installation guidelines](/use/installation) for information on how to include the Standards in your project.

### Markup changes
In many cases, because you are updating an existing application, you will not want to copy the [Boilerplate](/templates/markup/boilerplate/) markup directly, because it will require you to make extensive markup changes. This section of the guide attempts to identify areas that you will need to address individually, such that you can modify the markup you already have without needing to essentially start from scratch.

1. Add `class="no-js"` to the `<head>` tag. This is in the event that the JS is not available, or not loaded yet and will prevent a flash of unstyled content (FOUC).

2. Add the global header code. This should replace everything between the `<header>` tags.
  {{< accordion-wrap >}}
  {{< accordion Global header code >}}
    {{< highlight html >}}{{< upgrading-global-header >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}

3. After adding the global header code, you will notice that the Service mega menu and the Search dropdown are not available. The markup for these elements can be placed anywhere on the page. To save on page load times, place the markup for these after the closing `<footer>` tag.
  {{< accordion-wrap >}}
  {{< accordion Services and search code >}}
    {{< highlight html >}}{{< upgrading-services-search >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}

4. All applications should receive graphic treatment. Contact oddt@phila.gov for assistance selecting a hero image. Add the code below under the `<header>` tag and customize the image and page title to suit your application. Note, that the wrapping `#page` and `#content` divs should be closed *before* the `<footer>` tag.
  {{< accordion-wrap >}}
  {{< accordion Site header code >}}
    {{< highlight html >}}{{< upgrading-site-header >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}
