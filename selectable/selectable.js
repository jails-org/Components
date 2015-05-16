define([

	'jails'

], function( jails ){

	jails.component('selectable', function(html, anno){

		var cp = this, target, ignore, css, prevent;

		this.init = function(){

			ignore 	= anno.ignore || html.data('selectable-ignore');
			target 	= anno.target || html.data('selectable-target') || 'a';
			css		= anno.css || html.data('selectable-css') || 'active';
			prevent = anno.prevent || html.data('selectable-prevent');

			html.on( 'click', target, select );
		};

		function select(e){

			var
				_self = $(this),
				bypass = _self.is( ignore ) || _self.hasClass( css );

			if( bypass ) return;

			html.find( target ).removeClass( css );
			_self.addClass( css );

			cp.emit('select', this);

			if( prevent ) e.preventDefault();
		}

	});
});
