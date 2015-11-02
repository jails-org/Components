define([

	'jails'

], function( jails ){

	return jails.component('selectable', function(holder, anno){

		var cp = this, target, css, items;

		this.init = function(){

			target 	= anno.target || holder.getAttribute('data-selectable-target') || 'a';
			css 	= anno.css || holder.getAttribute('data-selectable-css') || 'active';
			items 	= holder.querySelectorAll( target );

			this.on('click', target, select);
		};

		function select(e){

			var current, len = items.length;

			for(var i = 0; i < len; i++){
				current = items[i];
				current.className = current.className.replace(css, '');
			}

			e.target.className += (' '+css);
		}

	});
});
