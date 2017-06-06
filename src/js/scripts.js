(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    //////////////////////////////////////////////////////////////////////
    // index.html
    //////////////////////////////////////////////////////////////////////

    // Loading components

      $('#site-header').load('components/header.html');
      $('#intro-page-color-bg').load('components/intro-page.html');
      $('#banner').load('components/banner.html');
      $('#about').load('components/about.html');
      $('#speakers').load('components/speakers.html');
      $('#tickets').load('components/tickets.html');
      $('#sponsors').load('components/sponsors.html');
      $('#footer').load('components/footer.html');
      $('#social-banner').load('components/social-banner.html');
      $('#team').load('components/team.html');
      $('#events').load('components/events.html');
      $('#events2').load('components/events2.html');
      $('#calendar').load('components/calendar.html');

    // Partners images scrolling

    setTimeout(function () {
      console.log("slick");
      try {
        $('.partner-container').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
        });

      } catch (e){

      }
    }, 5000);


    //////////////////////////////////////////////////////////////////////
    // events.html
    //////////////////////////////////////////////////////////////////////

    // FILTERING events page

    $('.filter-button-group button').on('click', function (e) {
      e.preventDefault();

      $('.filter-button-group button').removeClass('active');
      $(this).addClass('active');

      var filter = $(this).attr('data-filter');

      $('.grid').isotope({
        itemSelector: '.grid-item',
        filter: filter
      });
    });

    // Calendar toggle
    $(document).on('click', '#toggle_calendar', function () {
      if ($('#toggle_calendar_icon').text() === 'Hide calendar') {
        $('#toggle_calendar_icon').text('Show calendar');
      } else {
        $('#toggle_calendar_icon').text('Hide calendar');
      }
      $('#calendar_div').toggle('slow');
    });


    // evt btn
    $(document).on('click', '.event-content-inner button', function () {
      window.location = "single-event-page.html";
    });
      ///ADMIN PAGE ANIMATIONS///
    
      $(document).on('click', '.admin-menu-item p', function () {

      $('.admin-menu-item').removeClass('active-for-edit');
      $(this).parent().addClass('active-for-edit');

      });


      $(document).on('click', '#admins-editing', function () {

      console.log("hello admin");
      $('.editing-heads').hide();
      $('#admins-editing-head').show();

      $('.input-new').hide();
      $('#input-new-admin').show();

      $('#sponsors-content-admin').hide();
      $('#event-content-admin').hide();
      $('#admins-content-admin').show();
      });

      $(document).on('click', '#events-editing', function () {

      console.log("hello event");
      $('.editing-heads').hide();
      $('#events-editing-head').show();

      $('.input-new').hide();
      $('#input-new-event').show();

      $('.content-item-admin').hide();
      $('#event-content-admin').show();
      });

      $(document).on('click', '#sponsors-editing', function () {

      console.log("hello sponsor");
      $('.editing-heads').hide();
      $('#sponsors-editing-head').show();

      $('.input-new').hide();
      $('#input-new-sponsor').show();

      $('.content-item-admin').hide();
      $('#sponsors-content-admin').show();
      
      });


    // activate page ???

    function checkForPage(page) {
      console.log('checkForPage', page);
      var scrollElements = $('.site-links a');

      $.each(scrollElements, function (k, v) {
        var el = $(v);
        el.removeClass('active'); // just in case

        var link = el.attr('href');

        if (window.location.pathname.includes(link)) {
          el.addClass('active');
          console.log('adding to', el);
          return;
        }

      });
    }

    $(window).load(function () {
      $('.counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $this.text('0');

        console.log(countTo);
        $({ countNum: $this.text() }).animate({
          countNum: countTo
        },
          {
            duration: 2500,
            easing: 'linear',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              console.log('finished');
            }
          });
      });

      checkForPage('events.html');
      checkForPage('speakers.html');
      $( ".btn-subscribe" ).on( "click", function() {
        console.log("click");
        swal("Newsletter was sent to your email")      });
    });

  });





})(jQuery, window, document);



