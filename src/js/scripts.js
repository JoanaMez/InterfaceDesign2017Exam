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
    $(function () { $("#social-banner").load("components/social-banner.html"); });
    $(function () { $("#team").load("components/team.html"); });
    $(function () { $("#events").load("components/events.html"); });
    $(function () { $("#calendar").load("components/calendar.html"); });


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


$(document).ready(function() {

      $(document).on("click","#toggle_calendar",function() {

              if ($(this).text() == "Hide calendar") 
              { 
                 $(this).text("Show calendar");
                 $(this).prepend(' <i class="fa fa-calendar fa" aria-hidden="true"></i>')
              
              } 
              else 
              { 
                 $(this).text("Hide calendar");
                 $(this).prepend(' <i class="fa fa-calendar fa" aria-hidden="true"></i>') 
              }; 


              console.log("from the other side");
              $( "#calendar_div" ).toggle( "slow", function() {

              });
            
      });

});


})(jQuery, window, document);



