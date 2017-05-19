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
    $(function () { $("#site-header").load("components/header.html"); });
    $(function () { $("#intro-page").load("components/intro-page.html"); });
    $(function () { $("#banner").load("components/banner.html"); });
    $(function () { $("#about").load("components/about.html"); });
    $(function () { $("#speakers").load("components/speakers.html"); });
    $(function () { $("#tickets").load("components/tickets.html"); });
    $(function () { $("#sponsors").load("components/sponsors.html"); });
    $(function () { $("#footer").load("components/footer.html"); });


  });


})(jQuery, window, document);



