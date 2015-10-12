require.config({

	baseUrl :'assets/js/',
	deps    :['jails', global.page],

	paths   :{
		jails	:'//rawgit.com/jails-org/Jails/rebuild/jails/source/jails.min',
		mustache:'//cdnjs.cloudflare.com/ajax/libs/mustache.js/2.1.3/mustache.min'
	},

	callback :function( jails ){
		jails.start();
	}
});
