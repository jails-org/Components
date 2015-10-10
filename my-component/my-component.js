define([

	'jails'

], function( jails ){

	return jails.component('my-component', function( html, anno ){

		var cp = this;

		this.init = function(){
			html.append('Yey, my component is here!');
		};

	});

});
