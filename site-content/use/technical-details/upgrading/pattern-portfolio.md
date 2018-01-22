---
title: From the Pattern Portfolio
date: 2017-03-07
description: Migrating a site using phila.gov's Pattern Portfolio.
menu:
  main:
    parent: upgrading
    weight: 1
    identifier: upgrade-pp
---

{{< panel wip >}}

The Standards are a re-worked version of the City's Pattern Portfolio. If you are migrating an existing application, use this guide to assist you with changes.

### Remove old references

1. Remove all references to patterns CSS and JavaScript.
2. Remove `<link>` tag references to FontAwesome and Ionicons. FontAwesome is now included as a dependency and Ionicons is no longer used.
3. Remove references to Foundation JavaScript, this is also included as a dependency.

Depending on the complexity of the project, it may make sense for you to temporarily comment out your project's existing JavaScript and Stylesheets.

### Add dependencies

Review the [installation guidelines](/use/installation) for information on how to include the Standards in your project.

<div class="callout">The code provided below includes links to the Standards CSS and JS. You will need to update those links to point to the location of the standards dependency within your project.</div>

### Markup changes
In many cases, because you are updating an existing application, you may not want to copy the [Boilerplate](/templates/markup/boilerplate/) markup directly, because you will need to coordinate extensive markup changes. This section of the guide attempts to identify areas that you will need to address individually, such that you can modify the markup you already have without needing to essentially start from scratch. If your application makes use of partials, these code blocks are be broken up in such a way that you should be able to simply replace the content of existing partials.

1. Add `class="no-js"` to the `<head>` tag. This is in the event that the JS is not available, or not loaded yet and will prevent a flash of unstyled content (FOUC).

2. Add the global header code. This should replace everything between the `<header>` tags.
  {{< accordion-wrap >}}
  {{< accordion Global header code >}}
    {{< highlight html >}}{{< upgrading-global-header >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}
  <div class="callout mtm">After adding the global header code, you will notice that the Service mega menu and the Search dropdown do not work. To save on page load times, the markup for these elements is placed under the closing footer element. You will find the markup in the **global footer code**, below.</div>

3. All applications should receive graphic treatment. Contact [oddt@phila.gov](mailto:oddt@phila.gov) for assistance selecting a hero image. Add the code below under the `<header>` tag and customize the image and page title to suit your application. The wrapping `#page` and `#content` divs should be closed *before* the `<footer>` tag. Your content should go between the `<main>` tags. This code assumes a one-page application with no secondary menu.
  {{< accordion-wrap >}}
  {{< accordion Site header code >}}
    {{< highlight html >}}{{< upgrading-site-header >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}

4. Replace existing footer with the global footer code.
  {{< accordion-wrap >}}
  {{< accordion Global footer code >}}
    {{< highlight html >}}{{< upgrading-footer >}}{{</ highlight >}}
  {{< /accordion >}}
  {{< /accordion-wrap >}}

Done!
