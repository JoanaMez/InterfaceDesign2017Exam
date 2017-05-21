(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // index.html
    $(function () { $("#site-header").load("components/header.html"); });
    $(function () { $("#intro-page").load("components/intro-page.html"); });
    $(function () { $("#banner").load("components/banner.html"); });
    $(function () { $("#about").load("components/about.html"); });
    $(function () { $("#speakers").load("components/speakers.html"); });
    $(function () { $("#tickets").load("components/tickets.html"); });
    $(function () { $("#sponsors").load("components/sponsors.html"); });
    $(function () { $("#footer").load("components/footer.html"); });

    $( window ).load(function() {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $this.text('0');

        console.log(countTo);
        $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2500,
            easing:'linear',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              console.log('finished');
            }
          });
      });
    });

  });


})(jQuery, window, document);



