---
title: Installation
date: 2017-02-11
menu:
  main:
    parent: technical-details
  side:
---

Standards is built on <a href="http://foundation.zurb.com/Foundation" class="external">Foundation 6</a>. To make managing assets easier, Foundation JavaScript and necessary styles are packaged with the Standards. You won't need to include them separately in your project.

jQuery is a requirement. ODDT recommends you link to a CDN version of jQuery, for example, <a href="https://developers.google.com/speed/libraries/" class="external">Google Hosted Libraries</a>.

You will need to include the Standards CSS and JavaScript on every HTML page of your project.

### Direct download

Download the Standards files directly. You can view the latest version and release notes on the <a href="https://github.com/CityOfPhiladelphia/standards/releases" class="external">GitHub repository</a>.

<div class="row">
  <div class="columns medium-9">
    <a href="https://github.com/CityOfPhiladelphia/standards/releases/download/0.3.1/phila-standards-0.3.1.zip" class="button icon">
      <div class="valign">
        <i class="fa fa-download valign-cell"></i>
        <div class="button-label valign-cell">Download files</div>
      </div>
    </a>
  </div>
</div>

#### Files
Include the phila-standards folder wherever you store your third-party project assets.

Note: The next release will include minified files.

{{< highlight html >}}
phila-standards/
├── css/
│   ├── phila-standards.css
│   └── phila-standards.css.map
├── js/
│   ├── phila-standards.js
├── fonts/
└── img/
{{</ highlight >}}

#### CSS

Add the CSS link to the `<head>` of your HTML pages.

{{< highlight html >}}
<link rel="stylesheet" href="/path/to/your/assets/css/phila-standards.css">
{{</ highlight >}}

#### JavaScript

Add the JavaScript just above the closing `</body>` of your HTML pages. You will also need to initialize Foundation. You can do this in your own JavaScript files (make sure to include them AFTER phila-standards JavaScript). Or, you can initialize Foundation directly on the page, like in the example below.

{{< highlight html >}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/path/to/your/assets/js/phila-standards.js"></script>
<script>$(document).foundation();</script>
{{</ highlight >}}

### Install using npm (or Yarn)

If you are familiar with <a href="https://www.npmjs.com/" class="external">Node Package Manager (npm)</a> you can include the latest version of the City's standards in your project.

ODDT recommends you use <a href="https://yarnpkg.com/en/">Yarn</a> to manage dependencies. All packages available on npm are also available via Yarn.

To install use `yarn add phila-standards` or `npm install phila-standards`.


{{< highlight html >}}
node_modules/phila-standards/
├── dist/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
└── src/
    ├── img/
    ├── js/
    └── sass/
{{</ highlight >}}

#### JavaScript
`require('phila-standards')` will load the Standards JavaScript onto the page. This module doesn't export anything.

#### SASS

The main Sass (SCSS) source file is located in: `node_modules/phila-standards/src/sass/phila-standards.scss`

The compressed CSS is located in: `node_modules/phila-standards/dist/css/phila-standards.css`
