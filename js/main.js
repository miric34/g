(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Плавная прокрутка к контактам по всем ссылкам с href="#contact"
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector('#contact');
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
        // Активный класс для меню, если нужно:
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
        // Найти пункт меню "Контакты" и выделить
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => {
          if (l.getAttribute('href') === '#contact') l.classList.add('active');
        });
      }
    });
  });
});

// Плавная прокрутка к меню по всем ссылкам с href="#menu"
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href="#menu"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector('#menu');
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
        // Активный класс для меню, если нужно:
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
        // Найти пункт меню "Меню" и выделить
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => {
          if (l.getAttribute('href') === '#menu') l.classList.add('active');
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      offset: 60
    });
  }
});

