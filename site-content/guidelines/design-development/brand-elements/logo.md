---
title: Logo
date: 2017-01-27
description: Design and technical details on how to use the City of Philadelphia's official logo.
menu:
  main:
    parent: brand-elements
    weight: 4
---

The City of Philadelphia’s logo is the most visible representation of the city, its people, and its visual identity. The logo is a valuable asset that must be used consistently in the proper, approved forms.

There are two color versions of the City of Philadelphia logo provided. Consider context, contrast with background color, and surrounding imagery when selecting which version to use.

The bell icon should always be yellow, unless the entire logo must be one color. In those cases, use the black and white logo.

Guidelines for using the City of Philadelphia logo:

* Don’t recreate, crop, or reconfigure logo artwork.
* Logo artwork must be uniformly scaled.
* Logo artwork should appear against a solid background.
* Don’t put a white box around the logo when placed on a dark background.
* Don’t reproduce the logo in colors other than those specified.
* Don’t add drop shadows.
* Don’t change the orientation of the logo.
* Don’t put text on top of logo.

<p class="callout">Public use is allowed, but use by external organizations must be approved by the <a href="https://beta.phila.gov/departments/city-representative/">Office of the City Representative</a>.</p>

The .zip files below provide three high-quality versions of the logo in the following formats:

* Original `.ai`
* High-res `.png`
* `.svg`

<div class="border-list">
  <div class="row collapse">
    <div class="medium-12 columns border-list-items center">
      <div class="border-list-item valign pam">
        <img src="/img/logo/city-of-philadelphia.png" alt="City of Philadelphia" class="phxl pbm">
        <a href="/img/logo/standard.zip" class="button icon">
          <div class="valign">
            <i class="fa fa-download valign-cell"></i>
            <div class="button-label valign-cell">Download zip</div>
          </div>
        </a>
      </div>
      <div class="border-list-item valign pam">
        <img src="/img/logo/city-of-philadelphia-blue-text.png" alt="City of Philadelphia" class="phxl pbm">
        <a href="/img/logo/blue-text.zip" class="button icon">
          <div class="valign">
            <i class="fa fa-download valign-cell"></i>
            <div class="button-label valign-cell">Download zip</div>
          </div>
        </a>
      </div>
    </div>
    <div class="medium-12 columns center border-list-items">
      <div class="border-list-item valign pam">
        <img src="/img/logo/city-of-philadelphia-gray.png" alt="City of Philadelphia" class="phxl pbm">
        <a href="/img/logo/all-gray.zip" class="button icon">
          <div class="valign">
            <i class="fa fa-download valign-cell"></i>
            <div class="button-label valign-cell">Download zip</div>
          </div>
        </a>
      </div>
      <div class="border-list-item valign pam">
        <div class="bg-dark-gray mhxl">
          <img src="/img/logo/city-of-philadelphia-white.png" alt="City of Philadelphia" class="pas">
        </div>
        <a href="/img/logo/all-white.zip" class="button icon">
          <div class="valign">
            <i class="fa fa-download valign-cell"></i>
            <div class="button-label valign-cell">Download zip</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>

### For departments
If you’re a department that needs a logo, ODDT provides two templates for you below. They follow the same design as the City of Philadelphia logo, with the name of the department as the main focus. “City of Philadelphia” can go under the department name if you’d like. You may use either version.

Use the template provided for your department's social media channel avatar. The avatars are recognizable and readable when presented in a smaller area.

If your department needs a logo, email <a href="mailto:oddt@phila.gov ">oddt@phila.gov</a>.

<div class="border-list">
  <div class="row collapse">
    <div class="medium-12 columns center border-list-items">
      <div class="border-list-item valign pam">
        <img src="/img/logo/city-of-philadelphia-department-logo-example.png" alt="Department logo example" class="phl pbm">
      </div>
    </div>
    <div class="medium-12 columns center border-list-items">
      <div class="border-list-item valign pam">
          <img src="/img/logo/city-of-philadelphia-department-logo-full-example.png" alt="Department logo example" class="phl pbm">
        </div>
    </div>
  </div>
</div>
---

{{< accordion-wrap >}}

{{< accordion Code >}}
{{< highlight html >}}
<a href="https://beta.phila.gov" class="logo" tabindex="0" aria-label="City of Philadelphia">
  <img src="/img/logo/city-of-philadelphia.svg" data-fallback="/img/logo/city-of-philadelphia.png" alt="City of Philadelphia">
</a>
{{< /highlight >}}
{{< /accordion >}}

{{% accordion How to use %}}
## Accessibility

The City of Philadelphia logo and department logos must be recognizable, but do not have to meet the contrast ratios we follow for font usage across the site. They use the Trebuchet font -- a standard sans serif font that is artistic, accessible across all devices and platforms, and readable.

## Implementation

For websites, the City of Philadelphia logo is an .svg file with a .png fallback for older browsers. If you have included the full City of Philadelphia Standards JavaScript in your project, you can use the following:

`<img src="/path/to/logo/city-of-philadelphia.svg" data-fallback="/path/to/fallback/city-of-philadelphia.png" alt="City of Philadelphia">`

If you have not included the full Standards JavaScript, then you can use:

`<img src="/path/to/logo/city-of-philadelphia.png" alt="City of Philadelphia">`

{{% /accordion %}}

{{</ accordion-wrap >}}
