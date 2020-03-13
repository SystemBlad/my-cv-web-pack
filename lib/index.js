import 'jquery/dist/jquery.slim.min'; // import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap/js/collapse';
import 'bootstrap/js/dropdown';
import Wow from 'wow.js';
import Typed from 'typed.js';
import homeIcon from '../src/assets/Jaime-Luna-CV.pdf';
import 'normalize.css/normalize.css';
import 'animate.css/animate.min.css';
import './assets/icons/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import './styles/responsive.css';
import './styles/skills.css';
document.addEventListener("DOMContentLoaded", () => {
  let dcv = document.getElementById('dcv');
  dcv.href = homeIcon;
  $(window).on('load', function () {
    'use strict'; // will first fade out the loading animation

    jQuery(".status").fadeOut(); // will fade out the whole DIV that covers the website.

    jQuery(".preloader").delay(1000).fadeOut("slow");
  });
  /* =================================
  ANIMATION
  =================================== */

  let wow = new Wow();
  wow.init();
  /* start typed element */

  const typed2 = new Typed('.sub-element', {
    strings: ['', 'Hello. ', 'I am Jaime ', 'Nice to meet you.'],
    typeSpeed: 20,
    fadeOut: true,
    loop: true,
    startDelay: 1300
  });
  /* end typed element */

  /* ================================
  ===  VIDEO PLAY BUTTON         ====
  ================================= */

  $('.play-button').click(function () {
    let url = $('#video-expand .embed-responsive-item').attr('src');
    url = url.replace('autoplay=0', 'autoplay=1');
    $('#video-expand .embed-responsive-item').attr('src', url);
    let collapsed = $(this).find('span').hasClass('icon-music-play-button');
    $('.play-button').find('span').removeClass('icon-arrows-circle-remove');
    $('.play-button').find('span').addClass('icon-music-play-button');

    if (collapsed) {
      $(this).find('span').toggleClass('icon-music-play-button icon-arrows-circle-remove');
    }

    if (!collapsed) {
      let urlstop = $('#video-expand .embed-responsive-item').attr('src');
      urlstop = urlstop.replace('autoplay=1', 'autoplay=0');
      $('#video-expand .embed-responsive-item').attr('src', urlstop);
    }
  });
  /* ================================
  ===  IN PAGE SCROLL OPTIONS    ====
  ================================= */

  $(document).ready(function () {
    $('.smooth-scroll a, a.smooth-scroll').on('click', function (e) {
      e.preventDefault();
      let target = this.hash;
      let $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
  });
});