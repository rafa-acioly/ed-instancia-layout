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

  $('.tabs li').on('click', function (event) {
    event.preventDefault();
    // tabs to toggle "is-active" class.
    const tabs = $('.tabs ul li');
    // current tab clicked
    const it = $(this);
    // current data attribute
    const thisdata = it.data('tab');
    // get all contents
    const contents = $('.tabs-content p[data-content]');
    /**
     * Loop over all contents, if it is not the 
     * same data attribute then hide.
     */
    contents.each(function(index, element) {
      if ($(element).data('content') !== thisdata) {
        element.classList.add('is-hidden');
      } else {
        element.classList.remove('is-hidden');
      }
    });
    // Toggle class from another tabs that is not the clicked one.
    tabs.not(it).removeClass('is-active');
    // add active class to clicked
    it.addClass('is-active');
  });

  $('a[href="#contact"').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
  });
});