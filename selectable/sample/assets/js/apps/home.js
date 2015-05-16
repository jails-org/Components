define([

	'jails',
	'comps/selectable/selectable'

], function( jails ){

	jails.app('home', function(html, data){

		this.listen( 'selectable:select' , change );
	});

	function change(e, prop){
		console.log('App/home output => selectable.item = ', prop);
	}

});
