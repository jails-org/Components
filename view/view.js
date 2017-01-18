define([

	'jails',
	'riot'

], function( jails, riot ){

	var id = 0,
		slice = Array.prototype.slice,
		clone = document.createElement('div');

	return jails('view', function( component, element, anno ){

		var instance, tag, tpl;

		tpl 	= element.getAttribute('data-template');
		tag 	= element.getAttribute('riot-tag');
		tag 	= tag || ('riot-view-' + (id++));

		component.init = function(){

			tpl = tpl? document.querySelector(tpl).innerHTML :element.innerHTML;
			element.setAttribute( 'riot-tag', tag );
			clone.innerHTML = tpl;
			riot.tag( tag, template( clone ), set );

			return component;
		};

		component.update = function( model ){

			riot.mount( element );
			component.update = update;
			update( model );
		};

		function update( model ){
			model = model || {};
			if( model.done )
				model.done(function(m){ instance.update(m); });
			else
				instance.update( model );
			jails.refresh(element);
		}

		function set(){
			instance = this;
		}

		function template( node ){

			slice.call( node.querySelectorAll('[data-value]') ).forEach(function(item){
				item.innerHTML = item.getAttribute('data-value');
			});

			return node.innerHTML.replace(/\t|\n/g, '');
		}
	});
});
