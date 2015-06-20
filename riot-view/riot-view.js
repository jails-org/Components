define([

	'jails',
	'riot'

], function( jails, Riot ){

	return jails.component('riot', function(html, anno){

		var cp = this, node, hide, attr, name;

		this.riot = null;

		this.init = function( options ){

			node = html.get(0);
			hide = anno.hide || html.data('riot-hide') || 'hide';
			options = options || anno.options || html.data('riot-options');

			attr = node.getAttribute('riot-tag');
			name = attr || node.nodeName.toLowerCase();

			Riot.tag( name, node.innerHTML, mount);
			Riot.mount( node, options );

			return this.riot;
		};

		this.update = function( model ){
			cp.riot.update( model );
		};

		this.get = function(callback){
			if( callback ) callback( cp.riot );
			return cp.riot;
		};

		function mount( opts ){

			cp.riot = this;
			html.removeClass( hide );
		}

	});
});
