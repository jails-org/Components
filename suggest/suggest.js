define([

	'jails',
	'mustache'

], function( jails, mustache ){

	return jails.component('suggest', function(input, anno){

		var cp = this, at, template, target, css;

		this.init = function(){

			at = anno.at || input.data('suggest-at') || 3;
			target = $(anno.target || input.data('suggest-target'));
			template = $(anno.template || input.data('suggest-template')).html();
			css = anno.css || input.data('suggest-css') || 'active';

			input.on('keyup', typo);
			target.on('click', 'a', selected);

			this.listen('list', render);
		};

		function typo(){

			var w = this.value;

			if(w.length >= at) cp.emit('request', w);
			else close();
		}

		function render(e, model){
			target.addClass( css ).html( mustache.render( template, model ) );
		}

		function selected(e){
			input.val( $(this).text() );
			cp.emit('selected', this);
			close();
		}

		function close(){
			render(null, []);
			target.removeClass( css );
		}

	});
});
