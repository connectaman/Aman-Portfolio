(function ($) {
	"use strict"
    
    
    $(document).ready(function($){


        /* Responsive mobile menu */
        if ($.fn.slicknav) {
            $("#main-menu").slicknav({
                'label' : ' ',
                'prependTo' : '.responsive-menu-wrap'
            });
        }
        
        
        /* One Page Nav*/
        if ($.fn.onePageNav) {
            $('.nav').onePageNav({
                scrollThreshold: 0.1,
            });
        }
        
        
        /* Active magnificPopup */
        if ($.fn.magnificPopup) {
            $('.popup-image').magnificPopup({
              type: 'image',
              gallery:{
                enabled:true
              }
              // other options
            });
        }
        
        
        
        /* About Me Carousel */
        if ($.fn.owlCarousel) {
            $(".aboutme-carousol").owlCarousel({
                items: 3,
                nav: true,
                dots: false,
                autoplay: false,
                margin: 15,
                loop: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        loop: true
                    },
                    620: {
                        items: 2,
                        loop: true
                    },
                    768: {
                        items: 3,
                        loop: true
                    },
                }
            }); 
        }


        /* Our service slides */
        if ($.fn.owlCarousel) {
            $(".service-slides").owlCarousel({
                items: 3,
                nav: true,
                dots: false,
                autoplay: false,
                loop: true,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        loop: true
                    },
                    620: {
                        items: 2,
                        loop: true
                    },
                    768: {
                        items: 3,
                        loop: true
                    },
                }
            }); 
        }
        
        
        /* isotope for work gallery */
        $("#works-menu li").on('click', function() {

            $("#works-menu li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $(".works-items").isotope({
                filter: selector,
                masonry: {
                    
                }
            });

        })
        
        
        /* Fan Fact Counter */
        if ($.fn.countTo) {
            var timer = $('.timer')
            if($.fn.countTo) {
              timer.appear(function () {
                timer.countTo();
              });
            }
        }
        
        
        /* This code is for progress bar */
        if ($.fn.barfiller){
            var barfiller_custom = $('.barfiller'),
                bar_default_collor = '#f5ab35';
            
            barfiller_custom.appear(function () {
                barfiller_custom.each(function() {
                    var bar_color = $(this).attr('data-color');

                    if( bar_color ===  undefined ){
                        bar_color = bar_default_collor;
                    }
                    $(this).barfiller({
                        barColor: bar_color,
                        duration: 3000
                    });
                });
            });
        }
        
        
        /* Click event for scroll to top */
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        })
        
        
        /* Touch support in bootstrap slider */
        if ($.fn.swipe){
            $(".carousel").swipe({

              swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

                if (direction == 'left') $(this).carousel('next');
                if (direction == 'right') $(this).carousel('prev');

              },
              allowPageScroll:"vertical"

            });
        }
        
        
        /*Google map JS*/
        if ($.fn.gmap3){
            $('.map')
              .gmap3({
                center:[41.850033, -87.650052],
                zoom:12,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
              })
              .marker({
                position: [41.850033, -87.650052],
                icon: 'http://maps.google.com/mapfiles/marker_green.png'
              })
              .styledmaptype(
                "shadeOfGrey",
                [
                  {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
                  {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
                  {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                  {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
                  {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
                  {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
                  {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
                  {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
                  {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
                  {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
                  {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
                  {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
                  {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
                ],
                {name: "Shades of Grey"}
            );  
        }
    });


    $(window).load(function() {
        
        /*isotop behavier when window load*/
        if ($.fn.isotope) {
            $(".works-items").isotope();
        }
        
        
        /*site preloader*/
        $(".muni-preloader-wrap").fadeOut(500);
        
    });
    
    
    /* Page scrill active */
    $(window).scroll(function() {
        
        /*Sticky nav bar*/
        if($('.navbar-wrapper').offset().top > 50){
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav-collapse');
        }
        
        
        /*Check to see if the window is top if not then display button*/
        if ($(this).scrollTop() > 900) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
        
    });


}(jQuery));	


