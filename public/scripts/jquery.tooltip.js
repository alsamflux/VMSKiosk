/*
	bgColor: whiteGloss, blackGloss, greenGloss, azureGloss, redGloss, pinkGloss, brownGloss
*/
(function ($) {
	// FUNCTIONS
	function setBg(bg, tt, bh, mh, sh) {
	    if (bg == "whiteGloss" ||
			bg == "blackGloss" ||
			bg == "greenGloss" ||
			bg == "azureGloss" ||
			bg == "redGloss" ||
			bg == "pinkGloss" ||
			bg == "brownGloss") {
	        tt.addClass(bg);
	        bh.addClass(bg);
	        mh.addClass(bg);
	        sh.addClass(bg);
	    }
	    else {
	        tt.css('background-color', bg);
	        bh.css('background-color', bg);
	        mh.css('background-color', bg);
	        sh.css('background-color', bg);
	    }
	}
	
	$.fn.tooltip = function (options) {
		var defaults = {
			text: "Tooltip plugin",
			bgColor: "whiteGloss",
			horzdir: 1,
			vertdir: -1.1,  // When going up, it needs to stretch a little farther
			//vertdir: 0.3,  // When going down, tighten it up
			shiftboxhorz: -100, // The text box; shift it left or right; leave the bubbles where they are
			shiftbubblestartpointhorz: 0.0, // Where the bubbles start from over/under the element; we want for this specific thought to start further left or right.
			curvatureofbubbleshorz: 1.2
		};

		var o = $.extend(defaults, options);

		return this.each(function () {
			var $e = $(this);
			$e.attr('title', '');
			$e.hover(function(){
				$('<div class="tooltip"></div>')
					.text(o.text)
					.appendTo('body')
					.css('top', ($e.offset().top + (65.0 * ((o.vertdir / 1.1) + (1.0 * Math.sign(o.vertdir))))) + 'px')
					.css('left', ($e.offset().left + (68 * o.horzdir)) + o.shiftboxhorz + o.shiftbubblestartpointhorz + 'px')
                    .css('width', o.width)
					.fadeIn('slow');
				
				$('<div class="holderBig"></div>')
					.appendTo('body')
					.css('top', ($e.offset().top + (35.0 * ((o.vertdir / 1.5) + (1.0 * Math.sign(o.vertdir))))) + 'px')
					.css('left', ($e.offset().left + ((46 * Math.pow(o.curvatureofbubbleshorz, 2.0)) * o.horzdir)) + o.shiftbubblestartpointhorz + 'px')
					.fadeIn('slow');

				$('<div class="holderMedium"></div>')
					.appendTo('body')
					.css('top', ($e.offset().top + (25.0 * ((o.vertdir / 2.0) + (1.0 * Math.sign(o.vertdir))))) + 'px')
					.css('left', ($e.offset().left + ((25.0 * Math.pow(o.curvatureofbubbleshorz, 2.0)) * o.horzdir)) + o.shiftbubblestartpointhorz + 'px')
					.fadeIn('slow');

				$('<div class="holderSmall"></div>')
					.appendTo('body')
					.css('top', ($e.offset().top + (17.0 * Math.sign(o.vertdir))) + 'px')
					.css('left', ($e.offset().left + (17 * o.horzdir)) + o.shiftbubblestartpointhorz + 'px')
					.fadeIn('slow');
				
				setBg(o.bgColor, $('.tooltip'), $('.holderBig'), $('.holderMedium'), $('.holderSmall'));
			}, function() {
				$('.tooltip, .holderBig, .holderMedium, .holderSmall').fadeOut('fast', function(){
					$(this).remove();
				});
			})/*.mousemove(function(){
				$('.tooltip')
					.css('top', (event.pageY + (55 * o.vertdir)) + 'px')
					.css('left', (event.pageX + (55 * o.horzdir)) + 'px');
				
				$('.holderBig')
					.css('top', (event.pageY + (35 * o.vertdir)) + 'px')
					.css('left', (event.pageX + (35 * o.horzdir)) + 'px');

				$('.holderMedium')
					.css('top', (event.pageY + (25 * o.vertdir)) + 'px')
					.css('left', (event.pageX + (25 * o.horzdir)) + 'px');

				$('.holderSmall')
					.css('top', (event.pageY + (17 * o.vertdir)) + 'px')
					.css('left', (event.pageX + (17 * o.horzdir)) + 'px');
			})*/;
		});
   }
})(jQuery);
