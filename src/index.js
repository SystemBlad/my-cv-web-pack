require('normalize.css/normalize.css');
require('./assets/icons/styles.css');
require('./styles/third-party.css');
require('./styles/index.scss');
require('./styles/responsive.css');
import 'jquery';
import 'bootstrap';
import Wow from 'wow.js';
import Typed from 'typed.js';
import homeIcon from '../src/assets/Jaime-Luna-CV.pdf';

document.addEventListener("DOMContentLoaded", () => {

    var homeImg = document.getElementById('dcv');
    homeImg.href = homeIcon;

    $(window).on('load', function () {

        'use strict';
        // will first fade out the loading animation
        jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });

    /* =================================
   ANIMATION
=================================== */
    var wow = new Wow(
        {
            mobile: false  // trigger animations on mobile devices (default is true)
        }
    );
    wow.init();

    /* start typed element */

    var typed2 = new Typed('.sub-element', {
        strings: ['', 'Hello. ', 'I am Jaime ', 'Nice to meet you.'],
        typeSpeed: 20,
        fadeOut: true,
        loop: true,
        startDelay: 1300,
    });
    /* end typed element */

    /* ================================
===  VIDEO PLAY BUTTON         ====
================================= */
    $('.play-button').click(function () {

        var url = $('#video-expand .embed-responsive-item').attr('src');
        url = url.replace('autoplay=0', 'autoplay=1');
        $('#video-expand .embed-responsive-item').attr('src', url);

        var collapsed = $(this).find('span').hasClass('icon-music-play-button');

        $('.play-button').find('span').removeClass('icon-arrows-circle-remove');

        $('.play-button').find('span').addClass('icon-music-play-button');

        if (collapsed) {
            $(this).find('span').toggleClass('icon-music-play-button icon-arrows-circle-remove');
        }
        if (!collapsed) {
            var urlstop = $('#video-expand .embed-responsive-item').attr('src');
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

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });
});


