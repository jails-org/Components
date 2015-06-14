define([

	'jails'

], function( jails ){

	return jails.component('media-image', function(image, ann){

		var cp = this, min, max, src, css;

		min = 0;
		max = Infinity;

		this.init = function(){

			min = +( ann.min || image.data('media-min') || min );
			max = +( ann.max || image.data('media-max') || max );
			css = ann.css || image.data('media-css') || 'show';
			src = ann.src || image.data('src');

			$(window).resize( change );
			change();
		};

		function change(){

			var w = document.body.clientWidth;

			if( w >= min && w <= max )
				image.prop('src', src).addClass(css);
			else
				image.prop('src', '').removeClass(css);
		}

	});
});
