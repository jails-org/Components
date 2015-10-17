define([

	'jails'

], function( jails ){

	return jails.component('autopost', function( element, anno ){

		var cp = this, ev, target;

		this.init = function(){

			var list;

			ev 		= anno.event 	|| element.getAttribute('data-autopost-event') || 'click';
			target 	= anno.target 	|| element.getAttribute('data-autopost-target');
			list = element.querySelectorAll( target );

			this.on( ev, target, post );
		};

		function post(){
			cp.trigger( this.form, 'submit' );
		}
	});
});
