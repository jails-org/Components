define([

	'jails'

], function( jails ){

	jails.component('media-image', function(html, data){

		var cp = this, min, max, css;

		min = 0;
		max = screen.width;

		this.init = function(){

			min = +( html.data('media-min') || min );
			max = +( html.data('media-max') || max );
			css = html.data('media-css') || 'show';

			$(window).resize( change );
			change();
		};


		function change(){

			var w = document.body.clientWidth;

			if( w >= min && w <= max )
				html.prop('src', html.data('src')).addClass(css);
			else
				html.prop('src', '').removeClass(css);
		}

	});
});
