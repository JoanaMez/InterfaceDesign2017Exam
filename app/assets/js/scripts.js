/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    // index.html
    $(function () { $('#site-header').load('components/header.html'); });
    $(function () { $('#intro-page-color-bg').load('components/intro-page.html'); });
    $(function () { $('#banner').load('components/banner.html'); });
    $(function () { $('#about').load('components/about.html'); });
    $(function () { $('#speakers').load('components/speakers.html'); });
    $(function () { $('#tickets').load('components/tickets.html'); });
    $(function () { $('#sponsors').load('components/sponsors.html'); });
    $(function () { $('#footer').load('components/footer.html'); });
    $(function () { $('#social-banner').load('components/social-banner.html'); });
    $(function () { $('#team').load('components/team.html'); });
    $(function () { $('#events').load('components/events.html'); });

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



