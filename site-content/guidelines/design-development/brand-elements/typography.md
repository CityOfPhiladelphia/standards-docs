---
title: Typography
date: 2017-01-27
description: Information about font choices and when to use certain fonts.
menu:
  main:
    parent: brand-elements
    weight: 2
---
Typography is the foundational building block of the beta.phila.gov design. Fonts that are readable, yet bold encompass the brand.

Sans-serifs were chosen because they are easier to read on screens, and are adaptable across platforms and browsers.

You can download Montserrat and Open Sans from <a href="https://fonts.google.com/" class="external">Google Webfonts</a>, or you can download them directly using the links below.

<h3 class="h6">Montserrat</h3>
<p>Montserrat is only used for headlines that introduce sections of content.</p>
<div class="row mbl">
  <div class="medium-11 columns">
  <a href="/fonts/montserrat.zip" class="button icon">
    <div class="valign">
      <i class="fas fa-download valign-cell"></i>
      <div class="button-label valign-cell">Download Montserrat</div>
    </div>
  </a>
  </div>
</div>
<div class="row mbxl equal-height">
  <div class="medium-5 columns">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-montserrat">
      Aa
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Regular</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-montserrat">
      <b>Aa</b>
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Bold</b>
      </div>
    </div>
  </div>
</div>
<h3 class="h6">Open Sans</h3>
<p>Open Sans is used for body type.</p>
<div class="row mbl">
  <div class="medium-11 columns">
  <a href="/fonts/open_sans.zip" class="button icon">
    <div class="valign">
      <i class="fas fa-download valign-cell"></i>
      <div class="button-label valign-cell">Download Open Sans</div>
    </div>
  </a>
  </div>
</div>
<div class="row mbxl equal-height">
  <div class="medium-5 columns">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-open-sans">
      Aa
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Regular</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-open-sans-semi">
      Aa
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Semi-bold</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-open-sans-bold">
      Aa
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Bold</b>
      </div>
    </div>
  </div>
</div>

<h3 class="h6">Times New Roman</h3>
<p>Times New Roman is used exclusively for pull quotes.</p>
<div class="callout mbl"> Times New Roman is a standard computer font, but it is not a free download.
</div>
<div class="row mbxl equal-height">
  <div class="medium-5 columns">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-times">
      Aa
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Regular</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-times">
      <i>Aa</i>
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Italic</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-times">
      <b>Aa</b>
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Bold</b>
      </div>
    </div>
  </div>
  <div class="medium-5 columns end">
    <div class="sg-swatch sg-swatch--text">
      <div class="sg-swatch--top bg-white bdr-sidewalk sg-font-times">
      <b><i>Aa</i></b>
      </div>
      <div class="sg-swatch--bottom equal">
        <b>Bold italic</b>
      </div>
    </div>
  </div>
</div>

---

{{< accordion-wrap >}}

{{% accordion How to use %}}
## Implementation

To establish page hierarchy for content heavy sites, all headings and paragraph tags have specific styling applied to them so pages flow visually from topic to detail.

<h1>Heading 1 without contrast</h1>

You can add the `contrast` class to an `h1` tag to create page titles.  

**Example:** `<h1 class="contrast">Heading 1 with contrast example</h1>`

<h1 class="contrast">Heading 1 with contrast example</h1>

<h2>Heading 2 example</h2>

Heading three appearing within an `<article>` tag always has a gray background.

<h3>Heading 3 example</h3>
<h4>Heading 4 example</h4>
<h5>Heading 5 example</h5>
<h6>Heading 6 example</h6>

You can use any heading as a class to override default heading size.  

**Example:** `<h2 class="h5">Smaller text heading example</h2>`
<h2 class="h5">Smaller text heading example</h2>

{{% /accordion %}}

{{</ accordion-wrap >}}
