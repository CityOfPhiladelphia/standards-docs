---
title: CSS architecture
date: 2017-03-10
menu:
  main:
    parent: technical-details
    weight: 3
---

The Standards CSS is built using the <a href="http://sass-lang.com/" class="external">Sass</a> preprocessor. This documentation and the Standards npm package are compiled with <a href="https://github.com/sass/node-sass" class="external">node-sass</a>.

For maximum compatibility in your project, use node-sass `4.3.0` or higher.

Spacing units are defined as `rem` or `em` units so they scale appropriately with text size. These values are defined in the `/sass/utils/_variables.scss` partial. These spacing units help maintain a consistent visual flow and should be used as much as possible. Pixels values are only used for detail work.

You can use the following variables in your sass files to maintain consistent spacing.

{{< highlight scss >}}
$spacing-none: 0;
$spacing-extra-small: .25rem;
$spacing-small: .5rem;
$spacing-medium: 1rem;
$spacing-large: 2rem;
$spacing-extra: 4rem;
$spacing-extra-large: 6rem;
$spacing-extra-extra-large: 10rem;
{{< /highlight >}}

### Customization

The Standards CSS is intentionally opinionated. Using the Standards in your project means you are committing to a specific aesthetic. As such, theming is not currently available.

### Class names

Any of the class names in the <a href="http://foundation.zurb.com/sites/docs/" class="external">Foundation 6</a> documentation are also available for use in the Standards.

#### Other useful classes
{{< accordion-wrap >}}

{{< accordion External links >}}
You can add the `external` class to a link to indicate the visitor will be taken to another website.
{{< highlight html >}}
<a href="https://beta.phila.gov">City of Philadelphia</a>  
<a href="https://alistapart.com" class="external">A List Apart</a>
{{< /highlight >}}

{{% /accordion %}}

{{</ accordion-wrap >}}
