# Digital Standards

This repository houses the documentation and website files for the City of Philadelphia's Digital Standards. The UI components, and other assets can be found in the [standards](https://github.com/CityOfPhiladelphia/standards) repository.


## Local copy
The City of Philadelphia's Digital Standards is compiled using the static site generator, [Hugo](https://gohugo.io/). It uses [npm scripts](https://docs.npmjs.com/misc/scripts) for task running and [Yarn](https://yarnpkg.com/en/) for package management.

You will need to have the following installed to run a local version of the site:

* Node.js v4.2.3+ - [Install guides](https://nodejs.org/en/download/)
* Yarn v0.23.4+ - [Install guides](https://yarnpkg.com/en/docs/install)
* Hugo v0.20.7+ - [Install guides](https://gohugo.io/overview/installing/)

To install dependencies and prepare to work on the site, enter the folder with your local copy of the site in a terminal window and run:

```
yarn
```

To start a local server, run:
```
hugo serve
```

The local webserver will be available at: `http://localhost:1313/standards-docs/`

Hugo comes with LiveReload, so you will see changes to Hugo directories reflected immediately.

## Pushing changes
Commits to the `master` branch will trigger a build of the site through [Travis CI](https://travis-ci.org/CityOfPhiladelphia/standards-docs).
