define([

	'jails'

], function( jails ){

	return jails.component('include', function(node, anno){

		var url, loading, cp = this;

		this.init = function(){

			url = anno.url || node.data('include');
			loading = anno.loading || node.data('loading') || 'loading';

			node.addClass( loading );
			$.get( url ).done( load );
		};

		function load( response ){

			node.html( response );
			jails.refresh( node );

			node.removeClass( loading );

			cp.emit('load', node);
		}

	});

});
