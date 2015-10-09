define([

	'jails'

], function( jails ){

	return jails.component('sticky', function( html, anno ){

		var cp = this, win, clss, top, target, bottom, reference, pin;

		this.init = function(){

			set();
			pin();

			win.on( 'scroll',  pin );
		};

		function set(){

			html = $(html);	
			win = $(window);
			top = anno.top || html.data('sticky-top') || 0;
			clss = anno.fixed || html.data('sticky-css') || 'fixed';
			bottom = anno.bottom || html.data('sticky-bottom') || 'bottom';

			target = anno.target || html.data('sticky-target');
			target = target? $(target) :html;

			reference = anno.reference || html.data('sticky-reference');
			reference = reference? $( reference ) :null;

			pin = reference? pin_reference : pin_single;
		}

		function pin_single(){

			if( win.scrollTop() >= top ){
				target.addClass( clss );
				cp.emit('topstart');
			}
			else{
				target.removeClass( clss );
				cp.emit('topend');
			}
		}

		function pin_reference(){

			var wt = win.scrollTop(),
			offset = reference.offset().top;

			//Top case
			if( wt >= offset ){
				target.addClass( clss );
				cp.emit('topstart');
			}
			else{
				target.removeClass( clss );
				cp.emit('topend');
			}

			//Bottom case
			if( wt >= reference.height() + offset - target.height() ){
				target.addClass( bottom );
				cp.emit('bottomin');
			}
			else{
				target.removeClass( bottom );
				cp.emit('bottomout');
			}
		}

	});
});
