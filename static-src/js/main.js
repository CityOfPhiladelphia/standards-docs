require('./filter-list.js');

function anchorOffset() {
  const $anchor = $(':target');
  const fixedElementHeight = $('.sticky.is-stuck').outerHeight();
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
