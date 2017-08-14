require('./filter-list.js');

/* Account for sticky header when anchor links are present */
function anchorOffset() {
  const $anchor = $(':target');
  const fixedElementHeight = $('.sticky').outerHeight();
  if ($anchor.length > 0)
    window.scrollTo(0, $anchor.offset().top - fixedElementHeight);
}
$(window).on('hashchange load', anchorOffset);
$('body').on('click', "a[href^='#']", function (ev) {
  if (window.location.hash === $(this).attr('href')) {
    ev.preventDefault();
    anchorOffset();
  }
});

if (window.location.hash) {
  $(window).trigger('hashchange');
}

$('.accordion').on('deeplink.zf.accordion', function() {
  Foundation.reInit('equalizer');
});

$('.accordion').on('down.zf.accordion', function() {
  Foundation.reInit('equalizer');
});
