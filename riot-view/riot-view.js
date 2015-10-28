define([

	'jails',
	'riot'

], function( jails, riot ){

	//@static
	var id = 0,
		slice = Array.prototype.slice,
		clone = document.createElement('div');

	return jails.component('riot-view', function( element, anno ){

		var instance, tag, cp, tpl;

		cp		= this;
		tpl 	= element.getAttribute('data-template');
		tag 	= element.getAttribute('riot-tag');
		tag 	= tag || ('riot-view-' + (id++));

		this.init = function(){

			tpl = tpl? element.querySelector(tpl).innerHTML :element.innerHTML;
			element.setAttribute( 'riot-tag', tag );
			clone.innerHTML = tpl;
			riot.tag( tag, template( clone ), set );

			return cp;
		};

		this.update = function( model ){

			riot.mount( element );
			cp.update = update;
			update( model );
		};

		this.empty = function(){
			while( element.firstChild ) element.removeChild( element.firstChild );
			return cp;
		};

		function update( model ){
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
