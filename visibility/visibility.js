define([
	'jails'
], function( jails ){

	var timer, instances = [];

	jails('visibility', function( component, element, anno){

		component.init = function(){
			instances.push({ component: component, element: element, anno: anno });
			check();
		};
	});

	jails.events.on( window, 'scroll', function(){
		clearTimeout( timer );
		timer = setTimeout(check, 350);
	});

	function update( instance ){

		var rect, html;

		rect = instance.element.getBoundingClientRect();
		html = document.documentElement;

		if( rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth) ){
			instance.component.emit('visible');
			return false;
		}

		return true;
	}

	function check(){

		instances = instances.filter( function( instance ){
			return update( instance );
		});

		if( !instances.length )
			jails.events.off( window, 'scroll', update );
	}
});
