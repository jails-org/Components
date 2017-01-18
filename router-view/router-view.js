define([

	'jails',
	'riot'

], function( jails, riot ){

	return jails('router-view', function( component, element, anno ){

		var current = null,
			index 	= anno.index || element.getAttribute('data-router-view-index') ||'index',
			target	= anno.target || element.getAttribute('data-router-view-target'),
			url		= anno.url || element.getAttribute('data-router-view-url'),
			list	= Array.prototype.slice.call( element.querySelectorAll( target ) );

		component.init = function(){
			start();
			riot.route( url + '*', go);
			riot.route.start( true );
		};

		function start(){
			list.map(function(item){
				if( item.getAttribute('data-name') != index )
					element.removeChild( item );
				else current = item;
			});
		}

		function go( name ){

			var item = list.filter(function(i){
				return i.getAttribute('name') == name;
			})[0];

			if( item ){
				if( current && current != item )
					component.emit('leave', { item :current, holder :element });
				current = item;
				component.emit('enter', { item: item, name: name, holder: element });
			}else{
				component.emit('404', {
					index	: index,
					router 	: riot,
					location: url
				});
			}
		}

	});
});
