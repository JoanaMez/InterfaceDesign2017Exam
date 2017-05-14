/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    //

    function myFunction() {
      var x = document.getElementById("navigation");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


  });




})(jQuery, window, document);


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
