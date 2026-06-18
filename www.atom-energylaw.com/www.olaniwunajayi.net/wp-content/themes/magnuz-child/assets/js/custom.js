document.addEventListener('DOMContentLoaded', function() {
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
                slidesPerView: 2
            }
        }
    });
    new Swiper(".team-slider-home", {
        spaceBetween: 20,
        slidesPerView: 1,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev"
        // },
        breakpoints: {
            525: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            }
        },
    });
});

jQuery(function($) {
    function loadLawyerSlider() {
        $.ajax({
            url: ajaxurl,
            type: "POST",
            data: {
                action: "load_lawyer_slider"
            },
            beforeSend: function() {
                $('.team-slider-wrap').html('<p>Loading...</p>');
            },
            success: function(response) {
                $('.team-slider-wrap').html(response);

                new Swiper(".team-slider-home", {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }
                });
            }
        });
    }

    // call ajax
    loadLawyerSlider();
    $('ul li').each(function() {
        this.innerHTML = this.innerHTML.replace(/&nbsp;/g, '');
    });

    jQuery("#custom-cursor,#custom-cursor-inner").remove();
    if (jQuery(".biography-content").length) {
        jQuery(".biography-heading").show();
    }
    if (jQuery(".certifications-content").length) {
        jQuery(".certifications-heading").show();
    }
    if (jQuery(".publications-content").length) {
        jQuery(".publications-heading").show();
    }
    if (jQuery(".recognitions-content").length) {
        jQuery(".recognitions-heading").show();
    }
    if (jQuery(".awards-content").length) {
        jQuery(".awards-heading").show();
    }

    function getHashLocation() {
        var hash = window.location.hash; // e.g. "#London/"
        if (hash) {
            // Remove leading '#' and any trailing slash
            return hash.replace(/^#/, '').replace(/\/$/, '');
        }
        return null;
    }
    //$.post('/wp-admin/admin-ajax.php', {
    jQuery(document).ready(function() {
        var career_list = jQuery(".job-area");
        jQuery(".career_filter .vacancies").on("click", function() {
            jQuery(".job-area").fadeIn();
            jQuery('html, body').animate({
                scrollTop: jQuery(".job-area").offset().top - 200
            }, 600);
            career_list.show();
        })
        jQuery("#career-search").on('input', function() {
            var search = jQuery(this).val();
            clearTimeout(window.searchTimer);
            window.searchTimer = setTimeout(function() {
                jQuery(".job-area").fadeIn();
                jQuery("html, body").animate({
                    scrollTop: jQuery(".job-area").offset().top - 200
                }, 600);
                career_list.show();
            }, 50);
            fetchcareer(search);
        });

        function fetchcareer(searchTerm) {
            jQuery.post('/wp-admin/admin-ajax.php', {
                action: 'filter_career',
                search: searchTerm,
            }, function(response) {
                console.log(response); // 👈 Check this
                jQuery('.job-area').show();
                jQuery('.job-area').html(response.html);
            }, 'json');
        }

    });


    function fetchLawyers(page = 1, append = false) {
        var category = jQuery('#filter-category').val();
        var level = jQuery('#filter-level').val();
        var location = jQuery('#filter-location').val();
        var search = jQuery('#lawyer-search').val();

        // ✅ Disable load more button during AJAX request
        var $loadMoreBtn = jQuery('#load-more');
        $loadMoreBtn.prop('disabled', true).addClass('loading');

        // ✅ If location is empty, check hash (#London/)
        if (!location) {
            var hashLocation = getHashLocation();
            if (hashLocation) {
                location = hashLocation;
                jQuery('#filter-location').val(location);
            }
        }

        jQuery.post('/wp-admin/admin-ajax.php', {
            action: 'filter_lawyers',
            page: page,
            category: category,
            level: level,
            location: location,
            search: search
        }, function(response) {
            // ✅ Re-enable button when AJAX completes
            $loadMoreBtn.prop('disabled', false).removeClass('loading');

            if (!append) {
                jQuery('#lawyer-container').html(response.html);
                $loadMoreBtn.data('page', 1);
            } else {
                jQuery('#lawyer-container').append(response.html);
                $loadMoreBtn.data('page', page);
            }

            // Show/hide Load More button
            if (response.max_pages > page) {
                $loadMoreBtn.show();
            } else {
                $loadMoreBtn.hide();
            }
        }, 'json').fail(function() {
            // ✅ Also re-enable button on AJAX failure
            $loadMoreBtn.prop('disabled', false).removeClass('loading');
        });
    }

    // On dropdown change
    jQuery('#filter-category, #filter-level, #filter-location').on('change', function() {
        fetchLawyers(1, false);
    });

    // ✅ Fetch on page load with hash param
    jQuery(document).ready(function() {
        var hash = window.location.hash.substring(1);

        if (hash) {
            fetchLawyers(1, false);
        }
    });

    // Search with debounce
    let typingTimer;
    $('#lawyer-search').on('keyup', function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function() {
            fetchLawyers(1, false);
        }, 400); // wait 400ms after typing
    });

    // Load more click
    jQuery('#load-more').on('click', function() {
        var $btn = jQuery(this);

        // ✅ Prevent multiple clicks while disabled
        if ($btn.prop('disabled')) {
            return false;
        }

        var nextPage = parseInt($btn.data('page')) + 1;
        fetchLawyers(nextPage, true);
    });
});


jQuery(document).ready(function($) {
    jQuery('.ctct-submit').on('click', function(e) {
        jQuery(".email-error").remove();
        //e.preventDefault(); // Prevent default submission

        var emailField = jQuery('.ctct-form .ctct-email');
        var email = emailField.val().trim();
        var errorMessage = '';

        // Remove previous error
        jQuery('.email-error').remove();

        // Check if empty
        if (email === '') {
            errorMessage = 'This field is required.';
        }
        // Check if invalid email
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errorMessage = 'Please enter a valid email address.';
        }

        if (errorMessage !== '') {
            jQuery(".ctct-form").after('<span class="email-error" style="color:red; font-size:14px;">' + errorMessage + '</span>');
        }
    });
});