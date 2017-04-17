---
title: Analytics
date: 2017-01-27
type: full
menu:
  main:
    name: Analytics
    parent: guidelines
    identifier: analytics
    weight: 3
    pre: hide
---

The City of Philadelphia is undertaking a Unified Web Analytics Strategy. Every phila.gov page should contain the following tracking code to allow us to report on traffic, usage, clicks, and to collect other useful data about phila.gov websites.

{{< accordion-wrap >}}

{{< accordion Code >}}
{{< highlight html >}}
<!-- Google Tag Manager [phila.gov] -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MC6CR2"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MC6CR2');</script>
<!-- End Google Tag Manager -->
{{</ highlight >}}
{{</ accordion >}}


{{% accordion How to use %}}
## Implementation

1. Add the snippet *immediately after* the opening `<body>` tag in the site template or individual pages as needed. It should be present on every page of all city-owned sites managed by your department or agency.
2. After you add this snippet to the page, email <a href="mailto:oddt@phila.gov">oddt@phila.gov</a> with the URL of the website for testing. You will receive confirmation that the site that should be tracked and the code is working. ODDT will enable tracking for your site in the citywide account so your site traffic will appear on analytics.phila.gov.
{{% /accordion %}}


{{</ accordion-wrap >}}
