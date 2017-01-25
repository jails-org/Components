define([

	'jails',
	'riot'

], function( jails, riot ){

	var id = 0,
		slice = Array.prototype.slice,
		clone = document.createElement('div');

	return jails('view', function( component, element, props ){

		var instance, tag, tpl, prop = props();

		tpl 	= prop.data.template || prop.template;
		tag 	= prop.riotTag;
		tag 	= tag || ('riot-view-' + (id++));

		component.init = function(){

			setTemplate();

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

		function setTemplate(){
			if( tpl ){
				var aux = document.querySelector(tpl);
				if( !aux ){ throw new Error('[view] - Template was not found.') }
				else { tpl = aux.innerHTML; }
			}else{
				tpl = element.innerHTML;
			}
		}

		function template( node ){

			slice.call( node.querySelectorAll('[data-value]') ).forEach(function(item){
				item.innerHTML = item.getAttribute('data-value');
			});

			return node.innerHTML.replace(/\t|\n/g, '');
		}
	});
});
