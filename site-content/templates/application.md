---
title: Applications
date: 2017-08-15
description:
dropdown: true
menu:
  main:
    parent: templates
---

The application template was built to provide a less intrusive set of options for application developers.

<a href="/templates/app-preview/" target="blank" class="button">View the application template (opens in new tab)</a>

The only requirement for this template is the Standards Application CSS. You will not need to include the Standards Javascript. The application template is meant to give developers a trimmed-down version of the Standards template. As such, not all of the Foundation CSS is included in this template. For a list of the included Foundation sass, view the <a href="https://github.com/CityOfPhiladelphia/standards/blob/master/src/sass/phila-app.scss" class="external">app scss file on GitHub</a>.

Most importantly, Foundation grid classes are available, including the new <a href="http://foundation.zurb.com/sites/docs/xy-grid.html" class="external">XY Grid</a>.

<p class="callout">FontAwesome is no longer included in the standards. You will need to include it in your project yourself. If you project will be hosted at phila.gov, you can use the pro version of FontAwesome. Contact <a href="mailto:oddt@phila.gov">oddt@phila.gov</a> for information.</p>

### Including the CSS in your project

There are a number of ways to include the app css in your project.

#### Use an unpkg link.
For example: `https://unpkg.com/phila-standards@0.11.2/dist/css/phila-app.min.css`

Replace the version number with the version of the application standards you want to use. The application standards start at version 0.9.0.

#### Install with a build tool
Use yarn or npm to install the phila-standards package. Then, use a build tool to include the application css.  

#### Direct link
You could link directly to the version of the standards on this site, however, this is not recommend for production sites as the code will be updated without warning anytime a new version of the standards is released. `https://standards.phila.gov/css/phila-app.css`

---

{{< accordion-wrap >}}

{{< accordion Application boilerplate code >}}
  {{< highlight html >}}{{< app-boilerplate >}}{{</ highlight >}}
{{< /accordion >}}

{{</ accordion-wrap >}}
