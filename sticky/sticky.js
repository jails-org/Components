define([

	'jails'

], function( jails ){

	jails.component('sticky', function(html, anno){

		var
			cp = this, win = $(window),
			clss, top, target;

		this.init = function(){

			top = anno.top || html.data('sticky-top') || 0;
			clss = anno.fixed || html.data('sticky-css') || 'fixed';
			target = anno.target || html.data('sticky-target');
			target = target? $(target) :html;

			win.on('scroll', pin);
		};

		function pin(){

			if( win.scrollTop() >= top )
				target.addClass( clss );
			else
				target.removeClass( clss );
		}

	});
});
