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
});