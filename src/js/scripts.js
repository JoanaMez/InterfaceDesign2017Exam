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

      } catch (e) {

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

    function loadEvents() {
      $('.editing-heads, .input-new, .content-item-admin, #sponsors-content-admin').hide();
      $('#events-editing-head, #input-new-event, #event-content-admin').show();
    }

    function loadAdmins() {
      $('.editing-heads, .input-new, #sponsors-content-admin, #event-content-admin').hide();
      $('#admins-editing-head, #input-new-admin, #admins-content-admin').show();
    }

    function loadSponsors() {
      $('.editing-heads, .input-new, .content-item-admin').hide();
      $('#sponsors-editing-head, #input-new-sponsor, #sponsors-content-admin').show();
    }

    $(document).ready(function () {
      loadEvents();
    });

    $('#events-editing').on('click', function () {
      loadEvents();
    });

    $('#sponsors-editing').on('click', function () {
      loadSponsors();
    });

    $('#admins-editing').on('click', function () {
      loadAdmins();
    });


    ///////////////// ADMIN LOGIN ///////////////////////////

    $('#btn-login').on('click', function () {
      adminLogin();
    });

    function adminLogin () {

      var rightName = "admin1";
      var rightPass = "123";
      var usernameInput = $('#admin-username').val();
      var passwordInput = $('#admin-password').val();

      console.log(usernameInput+passwordInput);

      if (rightName == usernameInput && rightPass == passwordInput ) {
        window.location.replace("http://localhost:3000/adminpage.html");
      }

      else {
        $('#login-box').append('<h4>Username or password is not valid</h4>');
      };


    }


    /////////////////////////////////////////////////////////

    ///////////// DELETING BY ADMIN ////////////////////////

         $(document).on('click', '.btn-delete', function (){
            $(this).parent().hide('slow');
        });

    ///////////// ADDING SPONSORS BY ADMIN ////////////////////////
        $("#btn-add-sponsor").on("click", function () {

          console.log("add-sponsor");
          $("#sponsor-name").val('');
          $("#sponsor-pic").val('');

          $("#sponsors-content-admin").prepend('<div class="sponsor-card-admin"><img src="assets/img/microsoft.png"><button class="btn-edit sponsor-edit">Edit</button><button class="btn-delete">Delete</button></div>');
          $("#btn-cancel").hide();
        });

    ///////////// EDITING SPONSORS BY ADMIN ////////////////////////
          $(document).on('click', '.sponsor-edit', function (){
          console.log("edit-sponsor");
          $("#sponsor-name").val('Microsoft');
          $("#sponsor-pic").val('assets/img/microsoft.png');
          $('<button id="btn-cancel">CANCEL</button>').insertAfter( "#btn-add-sponsor" );
        });


          $(document).on('click', '#btn-cancel', function (){
          $("#sponsor-name").val('');
          $("#sponsor-pic").val('');
          $(this).hide();


        });

    ////////////////////////////////////////////////////////


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
        $({countNum: $this.text()}).animate({
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
      $(".btn-subscribe").on("click", function () {
        console.log("click");
        swal("Newsletter was sent to your email")
      });

      try{
        $( "#accordion" ).accordion();

        $("#accordion img").click(function () {
          swal({
            title: "Sweet!",
            text: "mpor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." +
            " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata u",
            imageUrl: "assets/img/39507.jpg"
          });

        })
      }catch (e){

      }
    });

  });


})(jQuery, window, document);



