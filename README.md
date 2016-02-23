# scroll-to-anchor

jQuery Plugin which adds a smooth scrolling animation to on-page links (means links which point to an internal target location within the current HTML document).

Otherwise then the most similar plugins the duration of the animation depends on how far the content has to be scrolled, so all scrolling animations have the same speed.


## Getting started

Check if your on-page links are formatted correctly and the target is valid:

	<a href="#getting-started">Jump to readme</a>
	
	<section id="getting-started">
		<h2>Getting started</h2> 
	</section>

Include jQuery in the head of our your HTML document (e.g. by using the jQuery CDN):

	<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
	
Include the JavaScript file “scroll-to-anchor.js” right after the jQuery script tag:

	<script src="js/scroll-to-anchor.js"></script>
	
Init the plugin by inserting the following script at the bottom of your document, right before the body closing tag:

	<script>
		$(document).scrollToAnchor();
	</script>


## Options


### Attach animation only to selected links

If you know jQuery it is easy to attach the animation only on selected elements, e.g.:

	$('.main-nav').scrollToAnchor();
	
The plugin always attaches the effect to all on-page links (the ones that start with a hash `#`) nested in the selected element.


### Change the scrolling speed

You can change the scrolling speed by add an object with the option `speed`. The speed is set an number in pixels per second, so the greater value is the faster the page get scrolled (default is 3000).

	$(document).scrollToAnchor({
		speed: 1000
	});


### Change the minimum duration

You can set a minimum for the duration, so short distances will be also pretty animated. The duration is set as an number in milliseconds (default is 200).

	$(document).scrollToAnchor({
		duration_min: 500
	});
