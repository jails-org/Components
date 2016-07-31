define([

	'jails'

], function( jails ){

	var submitter = jails('submitter', function( component, form, ann ){

		var action;

		component.init = function(){
			action = ann.emit || form.getAttribute('data-submitter-emit') || 'post';
			component.on('submit', callback);
		};

		function callback( e ){
			emit( create( this.elements ) );
			e.preventDefault();
		}

		function emit( data ){
			component.emit( action, data );
		}
	});

	function create( elements ){
		var len = elements.length, params = {}, serialize = [];
		for(var i = 0, el = elements[i]; i < len; i++, el = elements[i]){
			if(el.name){
				params[el.name] = el.value;
				serialize.push([ el.name, el.value ].join('='));
			}
		}
		return { params :params, serialize :serialize.join('&') };
	}

	return submitter;
});
