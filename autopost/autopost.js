define([

	'jails'

], function( jails ){

	return jails.component('autopost', function( html, anno ){

		var cp = this, target, ev;

		this.init = function(){
			html = $(html);
			target = anno.target || html.data('autopost-target');
			ev = anno.event || html.data('autopost-event') || 'change';

			html.on( ev, target, submit );
		};

		function submit(){

			cp.emit('post', this);
			$( this.form ).submit();
		}

	});
});
