/**
 * @preserve
 * jQuery Scroll To Anchor
 * Copyright (c) Karsten Müller
 */

/**
 * jQuery Plugin which adds a smooth scrolling animation to “anchor links”,
 * means links which point to an internal target location within the current HTML document.
 */

(function ( $ ){

    var defaults = {
        speed: 3000, // Scrolling speed (in pixels per second)
        duration_min: 200, // Minimum duration (in ms)
	selector: "a[href^='#'], a[href^='/#']" // Selector for triggers
    };

    $.fn.scrollToAnchor = function(options){

        var options = options || {};

        return this.each(function(){

            var container = $(this),
                settings = $.extend({}, defaults, options);

            if ($(settings.selector, container).length !== 0){

                $(settings.selector, container).each(function(e){

                    var id = $(this).attr("href").replace(/.*#/, "");

                    $(this).click(function(e){

                        e.preventDefault();

                        if (id === "" || $("#" + id).length === 0){
                            var top = 0;
                        } else {
                            var top = $("#" + id).offset().top;
                        }

                        var distance = Math.abs($(window).scrollTop() - top);

                        var duration = distance/settings.speed * 1000;

                        duration = duration < settings.duration_min ? settings.duration_min : duration;

                        $("html, body").animate(
                            { scrollTop: top },
                            duration,
                            function(){
                                location.hash = id;
                            }
                        );

                    });

                });

            }

        });

    }

}( jQuery ));
