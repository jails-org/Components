define([

	'jails'

], function( jails ){

	return jails.component('preloader', function(html, anno){

		var cp = this,
		loading, error, image, complete,
		lazy, h, win;

		this.init = function(){
			html = $(html);	
			settings();

			html.addClass( loading );
			image.on('load', loaded).on('error', exception);
			lazy_load();
			load_cache();
		};

		function loaded(){
			html.removeClass( loading ).addClass(complete);
		}

		function exception(){
			html.removeClass( loading ).addClass( error );
		}

		function settings(){

			loading = anno.loading || html.data('preloader-loading') || 'loading';
			complete = anno.complete || html.data('preloader-complete') || 'complete';
			error = anno.error || html.data('preloader-error') || 'error';
			lazy = anno.lazy || html.data('preloader-lazy') || false;
			image = html.find('img');
		}

		function is_visible(){

			x = window.scrollY;
			y = window.innerHeight;
			z = html.offset().top;

			return !(((z+h) <= x) || (x+y) < z);
		}

		function lazy_load(){

			if(!lazy) return;

			h = html.get(0).scrollHeight;
			win = $(window).on('scroll', check_and_set);
			check_and_set();
		}

		function check_and_set(){

			if( is_visible() ){
				image.prop('src', lazy);
				win.off('scroll', check_and_set);
			}
		}

		function load_cache(){
			if( image[0].complete ){
				image.load();
			}
		}
	});
});
