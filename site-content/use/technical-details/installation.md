---
title: Installation
date: 2017-02-11
menu:
  main:
    parent: technical-details
  side:
---

There are two primary ways to implement Standards in your project.

### Direct download

You will need to include the Standards CSS and JavaScript on every HTML page of your project.

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
