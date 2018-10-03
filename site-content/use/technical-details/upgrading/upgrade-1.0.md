---
title: "Version 1.0"
date: 2017-03-07
description: Upgrading from an older version of the Standards to 1.0.
menu:
  main:
    parent: upgrading
    identifier: upgrade-1.0
    weight: 2
---
### Breaking changes
#### FontAwesome
Version 1.0 marks a change in the way FontAwesome is being handled. In older versions, FontAwesome was included as a vendored package, so you did not need to install it yourself. As of 1.0, FontAwesome will no longer be included in Standards. Removing it allows you to pick the version and your [preferred method](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) of adding it to your project.

As of FontAwesome 5.0, all sites hosted on phila.gov can use the pro version of FontAwesome. Contact [oddt@phila.gov](mailto:oddt@phila.gov) for details.

**Upgrade steps:**

  1. If you are currently using FontAwesome 4.x icons, you will need to modify your markup to accommodate the changes. Follow the upgrade guide provided on the [FontAwesome website](https://fontawesome.com/how-to-use/on-the-web/setup/upgrading-from-version-4).

### Improvements
#### Responsive tables
In previous versions of the Digital Standards, Foundation's stackable table headers were used for mobile table displays. While useful for horizontally-oriented tables, they lack table headers for each cell. In this version of Standards, you can add the `.responsive` class to your table and the table headers will be prepended to each cell.

**Upgrade steps:**

1. Remove the `.stack` class from the `<table>` code.
2. Replace it with the `.responsive` class.

You can see examples of both horizontal and vertical tables in the [tables section](/guidelines/design-development/components/tables/).
