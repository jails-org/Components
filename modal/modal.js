define([

	'jails'

], function( jails ){

	return jails('modal', function( component, element, anno ){

		var cssopen, cssclose;

		component.init = function(){

			cssopen = anno.open || element.getAttribute('data-litemodal-open') || 'open';
			cssclose = anno.close || element.getAttribute('data-litemodal-close') || '.close';

			component.on('click', cssclose, component.close);
			component.on('click', outside);
		};

		component.open = function(){
			element.className = element.className.replace(cssopen, '') + ' ' + cssopen;
			jails.events.on(document, 'keyup', esc);
		};

		component.close = function(){
			element.className = element.className.replace(cssopen, '');
			jails.events.off(document, 'keyup', esc);
		};

		function outside(e){
			if(e.target == element) component.close();
		}

		function esc(e){
			if(e.which == 27) component.close();
		}
	});
});
