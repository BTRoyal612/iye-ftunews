$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    // $(window).on('load', function(event) {
    //     $('.preloader').delay(500).fadeOut(500);
    // });
    
    
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-area").removeClass("shadow");

        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-area").addClass("shadow");
        }
    });

    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a clicked

    $(".nav-opt").on('click', function () {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").removeClass('active');
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== Sidebar

    $('[href="#side-menu-left"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').addClass('open');
    });

    $('[href="#close"], .overlay-left').on('click', function (event) {
        $('.sidebar-left, .overlay-left').removeClass('open');
    });
    
    
    //===== Round information
    // $('.round-info1').hover(function(){
    //     $('.hide-text1').removeClass('d-none');
    //     }, function(){
    //     $('.hide-text1').addClass('d-none');
    // });
    // $('.round-info2').hover(function(){
    //     $('.hide-text2').removeClass('d-none');
    //     }, function(){
    //     $('.hide-text2').addClass('d-none');
    // });
    // $('.round-info3').hover(function(){
    //     $('.hide-text3').removeClass('d-none');
    //     }, function(){
    //     $('.hide-text3').addClass('d-none');
    // });
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(100)
        } else{
            $('.back-to-top').fadeOut(100)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 100);
    });
    
    
    //===== Count down time
    var countDownDate = new Date("May 04, 2022 23:59:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("day").firstElementChild.innerHTML = days;
        document.getElementById("hour").firstElementChild.innerHTML = hours;
        document.getElementById("minute").firstElementChild.innerHTML = minutes;
        document.getElementById("second").firstElementChild.innerHTML = seconds;
        // If the count down is finished, set all to 00
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("day").firstElementChild.innerHTML = "00";
            document.getElementById("hour").firstElementChild.innerHTML = "00";
            document.getElementById("minute").firstElementChild.innerHTML = "00";
            document.getElementById("second").firstElementChild.innerHTML = "00";
        }
    }, 1000);
});