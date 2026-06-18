document.addEventListener('DOMContentLoaded', function() {

    // HERO SLIDER
    var menu = [];
    var heroSlides = document.querySelectorAll('.hero-slide-container .swiper-slide');
    heroSlides.forEach(function(slide) {
        menu.push(slide.querySelector('.slide-inner').getAttribute("data-text"));
    });

    var thumbnails = document.querySelectorAll('.hero-slider-thumbnail > div');

    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        watchSlidesProgress: true,

        pagination: {
            el: '.hero-slider-thumbnail',
            clickable: true,
            renderBullet: function(index, className) {
                // target <a> instead of <div>
                var thumbnail = document.querySelectorAll('.hero-slider-thumbnail > a')[index];
                if (!thumbnail) return ''; // safety check

                var spanText = thumbnail.querySelector('span').textContent;
                var h1Text = thumbnail.querySelector('h1').textContent;
                var href = thumbnail.getAttribute('href');

                // Create clickable <a> element (not interfering with swiper pagination)
                return `
                <a href="${href}" class="thumb-content ${className}">
                    <span>${spanText}</span>
                    <h1>${h1Text}</h1>
                </a>
            `;
            },
            /*renderBullet: function (index, className) {
                var thumbnail = document.querySelectorAll('.hero-slider-thumbnail > div')[index];
                var spanText = thumbnail.querySelector('span').textContent;
                var h1Text = thumbnail.querySelector('h1').textContent;
                return '<div class="thumb-content ' + className + '"><span>' + spanText + '</span><h1>' + h1Text + '</h1></div>';
            },*/
        },
        on: {
            progress: function() {

            },

            touchStart: function() {

            },

            setTransition: function(speed) {

            }
        }
    };

    var swiper = new Swiper(".hero-slide-container", swiperOptions);

    document.querySelectorAll('.hero-slider-thumbnail a').forEach(a => {
        a.addEventListener('click', e => {
            e.stopPropagation(); // prevent swiper click
        });
    });


    // Testimonial Slider Initialization
    var swiper3 = new Swiper(".testimonial-slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        speed: 1500,
        loop: false,
        navigation: {
            nextEl: ".testimonial-button-next",
            prevEl: ".testimonial-button-prev",
        }
    });

    // Gallery Slider Initialization
    var swiper2 = new Swiper(".gallery-slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            525: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Team Slider Initialization
    var swiper4 = new Swiper(".team-slider", {
        spaceBetween: 20,
        slidesPerView: 2,
        breakpoints: {
            525: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        }
    });

    // Hero Slider 2 Initialization
    //     var swiper4 = new Swiper(".hero-slide-container2", {
    // 		loop: true,
    //         spaceBetween: 20,
    //         slidesPerView: 1,
    //         autoplay: {
    //             delay: 5500,
    //             disableOnInteraction: false,
    //         },
    //         fadeEffect: { crossFade: true },
    //         effect: 'fade',
    //         navigation: {
    //             nextEl: ".hero-slider-2-next",
    //             prevEl: ".hero-slider-2-prev",
    //         },
    //         pagination: {
    //             el: '.hero-slider-2-pagination',
    //             clickable: true,
    //             renderBullet: function (index, className) {
    //                 return '<span class="' + className + '"></span>';
    //             },
    //         },

    // 		on: {
    // 			progress: function () {

    // 			},

    // 			touchStart: function () {

    // 			},

    // 			setTransition: function (speed) {

    // 			}
    // 		}
    //     });
    //     
    var swiper4 = new Swiper(".hero-slide-container2", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
            delay: 5500,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }, // You already have the fade effect set
        navigation: {
            nextEl: ".hero-slider-2-next",
            prevEl: ".hero-slider-2-prev",
        },
        pagination: {
            el: '.hero-slider-2-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        on: {
            init: function() {
                console.log('Swiper initialized');
            },
            slideChange: function() {
                console.log('Slide changed to:', this.activeIndex);
            }
        },
        allowTouchMove: false,
    });

    // Portfolio Slider Initialization
    var swiper5 = new Swiper(".portfolio-slider", {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
        speed: 10000,
        grabCursor: false,
        mousewheelControl: false,
        pauseOnMouseEnter: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            525: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Gallery 2 Slider Initialization
    var swiper6 = new Swiper(".gallery2-slider", {
        slidesPerView: 3,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 50,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            525: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Inner Pages Slider Initialization
    var swiper7 = new Swiper(".innerpages-slider", {
        slidesPerView: 3,
        spaceBetween: 52,
        speed: 1500,
        breakpoints: {
            525: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

    // Sidebar Initialization
    var sidebarIcon = document.querySelector('.sidebar-icon a');
    if (sidebarIcon) {
        sidebarIcon.addEventListener('click', function(e) {
            e.preventDefault();
            var fixedSidebar = document.getElementById('fixed-sidebar');
            if (fixedSidebar) {
                fixedSidebar.classList.add('active');
            }
            var responsiveMenu = document.querySelector('.responsive-menu');
            if (responsiveMenu) {
                responsiveMenu.classList.toggle('active');
            }
            this.classList.toggle('hide-on-responsive');
            this.classList.toggle('active-hum');
        });

        var closeSidebar = document.getElementById('close-sidebar');
        if (closeSidebar) {
            closeSidebar.addEventListener('click', function(e) {
                e.preventDefault();
                var fixedSidebar = document.getElementById('fixed-sidebar');
                if (fixedSidebar) {
                    fixedSidebar.classList.remove('active');
                }
            });
        }
    }

    // Highlighting Sections
    var sections = document.querySelectorAll('.section-highlight');
    window.addEventListener('scroll', function() {
        sections.forEach(function(section) {
            highlightSection(section);
        });
    });

    function highlightSection(sectionId) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var section = sectionId.getBoundingClientRect();
        var elementOffset = section.top + scrollTop;
        var distance = elementOffset - scrollTop;
        var sectionHeight = section.height;

        if (distance <= sectionHeight + 400 && distance >= (200 - sectionHeight)) {
            setTimeout(function() {
                sectionId.classList.add('active');
            }, 1500);
        } else {
            sectionId.classList.remove('active');
        }
    }

    // Video Play Buttons
    var videoPlayBtns = document.querySelectorAll('.video-play-btn');
    videoPlayBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            //jQuery(".btn-play-video a").trigger('click');
            var videoPopover = document.querySelector('.video-popover');
            videoPopover.classList.add('active');
            playVideo();

            /*var videoIframe = document.querySelector('.video-popover iframe');
            
            if (videoPopover && videoIframe) {
                // Get the video URL from data-src and set it to src
                var videoSrc = videoIframe.getAttribute('data-src');
                if (videoSrc) {
                    videoIframe.setAttribute('src', videoSrc);
                }
                videoPopover.classList.add('active');
            }*/
        });
    });

    // Close Video Popover Button
    var closeVideoPopover = document.getElementById('close-video-popover');
    if (closeVideoPopover) {
        closeVideoPopover.addEventListener('click', function() {
            var videoPopover = document.querySelector('.video-popover');
            videoPopover.classList.remove('active');
            stopVideo();
            /*var videoIframe = document.querySelector('.video-popover iframe');
            
            if (videoPopover && videoIframe) {
                // Remove src attribute to stop video playback
                videoIframe.removeAttribute('src');
                videoPopover.classList.remove('active');
            }*/
        });
    }
    // Initialize AOS (Animate on Scroll) on elementor
    jQuery(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {
            AOS.init();
        });
    });

    // Initialize AOS (Animate on Scroll) library
    AOS.init({
        once: true,
        duration: 500,
    });

    // Counter Up
    //     var counters = document.querySelectorAll('.counter');
    // 	if (counters) {
    // 		counters.forEach(function(counter) {
    jQuery('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // 		});
    // 	}

    // Service Boxes Hover Effect
    var serviceBoxes = document.querySelectorAll('.service6-box');
    serviceBoxes.forEach(function(box) {
        box.addEventListener('mouseover', function() {
            serviceBoxes.forEach(function(box) {
                box.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Responsive Menu Dropdown
    var responsiveMenuItems = document.querySelectorAll('.responsive-menu .dropdown-item');

    responsiveMenuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the event from bubbling up to the document

            // Check if the clicked item is already active
            if (this.classList.contains('dropdown-active')) {
                this.classList.remove('dropdown-active');
            } else {
                // Remove active class from all dropdown items
                responsiveMenuItems.forEach(function(item) {
                    item.classList.remove('dropdown-active');
                });
                // Add active class to the clicked item
                this.classList.add('dropdown-active');
            }
        });
    });

    // Close Responsive Menu Dropdown on Outside Click
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.responsive-menu')) {
            responsiveMenuItems.forEach(function(item) {
                item.classList.remove('dropdown-active');
            });
        }
    });

    // Interactive Portfolio Image Manipulation
    var interactivePortfolios = document.querySelectorAll('.interactive-portfolio');
    interactivePortfolios.forEach(function(portfolio) {
        var textElement = portfolio.querySelector('.interactive-portfolio .title');
        var imagePath = portfolio.getAttribute('data-image-path');
        var imageElement = portfolio.querySelector('.interactive-portfolio img');

        textElement.addEventListener('mousemove', function(event) {
            var mouseX = event.clientX;
            var mouseY = event.clientY;

            // Manipulate imageElement as needed
        });

        textElement.addEventListener('mouseleave', function() {
            // Reset imageElement as needed
        });
    });

    // Video Background Responsive Dimensions
    if (window.innerWidth < 600) {
        var videoBg = document.querySelector('.video-bg iframe');
        if (videoBg) {
            function setResponsiveDimensions() {
                var aspectRatio = videoBg.getAttribute('height') / videoBg.getAttribute('width');
                var newWidth = videoBg.parentNode.clientWidth;
                var newHeight = newWidth * aspectRatio;
                videoBg.setAttribute('width', newWidth);
                videoBg.setAttribute('height', newHeight);
                var iframeWrap = document.querySelector('.video2-area .video-bg');
                iframeWrap.style.height = newHeight + 'px';
                iframeWrap.style.height = newHeight + 'px';
            }
            setResponsiveDimensions();
        }
    }


    // Custom Cursor
    /*var customCursor = document.getElementById('custom-cursor');
    var customCursorInner = document.getElementById('custom-cursor-inner');
    var hoverLinks = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(event) {
    	var cursorX = event.clientX + 'px';
    	var cursorY = event.clientY + 'px';

    	customCursor.style.transform = 'translate(' + cursorX + ', ' + cursorY + ')';
    	customCursorInner.style.transform = 'translate(' + cursorX + ', ' + cursorY + ')';

    	var isHovered = false;
    	hoverLinks.forEach(function(link) {
    		var rect = link.getBoundingClientRect();
    		if (
    			event.clientX >= rect.left &&
    			event.clientX <= rect.right &&
    			event.clientY >= rect.top &&
    			event.clientY <= rect.bottom
    		) {
    			isHovered = true;
    		}
    	});

    	if (isHovered) {
    		customCursor.classList.add('zoom');
    		customCursorInner.classList.add('zoom');
    	} else {
    		customCursor.classList.remove('zoom');
    		customCursorInner.classList.remove('zoom');
    	}
    });*/

    // Highlight current menu item

    var menuItems = document.querySelectorAll('.dropdown-item');

    menuItems.forEach(function(item) {
        var links = item.querySelectorAll('a');

        links.forEach(function(link) {
            // Check if the current URL matches the link's href
            if (link.href === window.location.href) {
                item.classList.add('active');
                var dropdownMenu = link.closest('.menu li');
                if (dropdownMenu) {
                    dropdownMenu.classList.add('active-menu');
                }
            }

            // Add click event listener to each link
            link.addEventListener('click', function(event) {
                event.preventDefault();

                // Remove 'active' class from all menu items
                menuItems.forEach(function(el) {
                    el.classList.remove('active');
                    var dropdown = el.querySelector('.menu li');
                    if (dropdown) {
                        dropdown.classList.remove('active-menu');
                    }
                });

                // Add 'active' class to the clicked item
                item.classList.add('active');

                // Redefine dropdownMenu to ensure it refers to the clicked item's dropdown
                var dropdownMenu = link.closest('.menu li');
                if (dropdownMenu) {
                    dropdownMenu.classList.add('active-menu');
                }

                // Handle navigation
                window.location.href = link.href;
            });
        });
    });
});