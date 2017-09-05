import $ from 'jquery';
var iconBase = require('../images/pin-map.png');

$(document).ready(function () {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(-23.526776, -46.339726),
    mapTypeId: 'terrain'
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-23.526776, -46.339726),
    icon: iconBase,
    map: map
  });

  $('a[href="#contact"').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });

  $('.logo-float .fa').on('click', function() {
    const $this = $(this);
    let classe = $(this).hasClass('fa-close');
    $('.logo-float img, .logo-float p').fadeToggle('fast', function () {
      $this.toggleClass('fa-angle-left', classe).toggleClass('fa-close', !classe);
    });
  });
  
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});