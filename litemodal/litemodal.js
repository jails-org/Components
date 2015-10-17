define([

	'jails'

], function( jails ){

	return jails.component('litemodal', function(element, anno){

		var cp = this, cssopen, cssclose;

		this.init = function(){

			cssopen = anno.open || element.getAttribute('data-litemodal-open') || 'open';
			cssclose = anno.close || element.getAttribute('data-litemodal-close') || '.close';

			this.on('click', cssclose, this.close);
			this.on('click', outside);
		};

		this.open = function(){
			element.className = element.className.replace(cssopen, '') + ' ' + cssopen;
			jails.events.on(document, 'keyup', esc);
		};

		this.close = function(){
			element.className = element.className.replace(cssopen, '');
			jails.events.off(document, 'keyup', esc);
		};

		function outside(e){
			if(e.target == element) cp.close();
		}

		function esc(e){
			if(e.which == 27) cp.close();
		}
	});
});
