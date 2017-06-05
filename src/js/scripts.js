(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    //////////////////////////////////////////////////////////////////////
    // index.html
    //////////////////////////////////////////////////////////////////////

    // Loading components

    $(function () {
      $('#site-header').load('components/header.html');
    });
    $(function () {
      $('#intro-page-color-bg').load('components/intro-page.html');
    });
    $(function () {
      $('#banner').load('components/banner.html');
    });
    $(function () {
      $('#about').load('components/about.html');
    });
    $(function () {
      $('#speakers').load('components/speakers.html');
    });
    $(function () {
      $('#tickets').load('components/tickets.html');
    });
    $(function () {
      $('#sponsors').load('components/sponsors.html');
    });
    $(function () {
      $('#footer').load('components/footer.html');
    });
    $(function () {
      $('#social-banner').load('components/social-banner.html');
    });
    $(function () {
      $('#team').load('components/team.html');
    });
    $(function () {
      $('#events').load('components/events.html');
    });
    $(function () {
      $('#events2').load('components/events2.html');
    });
    $(function () {
      $('#calendar').load('components/calendar.html');
    });

    // Partners images scrolling

    setTimeout(function () {
      console.log("slick");
      $('.partner-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
      });
    }, 1000);


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
    });

  });





})(jQuery, window, document);



