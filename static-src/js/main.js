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

var wpURL = 'https://beta.phila.gov/wp-json/wp/v2/services';

  $.ajax({
    method: "GET",
    url: wpURL,
    data: 'parent=0&per_page=100'
  })
  .done(function( data ) {
    console.log('Succeess: ' + data);
    stuff = data;

    for (var i=0;i<data.length;i++) {
      console.log(data[i].title);
     }
    $.each(data, function(i, value) {
       console.log('Value of '+ i +' is : ' + value.title.rendered);
       console.log('Value of '+ i +' is : ' + value.link);

       $( '.result' ).append('<div>' + value.title.rendered + value.link +  '</div>');

    })
  })
  .fail(function( data ) {
    console.log('Failure: ' + data);
  });
