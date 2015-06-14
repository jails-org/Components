define([

	'jails',
	'comps/dropfile/dropfile'

], function( jails ){

	jails.app('home', function(html, data){

		this.listen( 'dropfile:drop' , change );
	});

	function change(e, prop){
		console.log(prop);
	}

});
