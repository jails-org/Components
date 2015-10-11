require.config({

	baseUrl :'assets/js/',
	deps    :['jquery', 'jails', global.page],

	paths   :{

		jails		:'//rawgit.com/Javiani/Jails/master/source/jails.min',
		mods		:'//rawgit.com/jails-org/Modules/jquery/zepto',
		comps		:'//rawgit.com/jails-org/Components/jquery/zepto',
		jquery 		:'//code.jquery.com/jquery-2.1.1.min',
		riot		:'//cdnjs.cloudflare.com/ajax/libs/riot/2.1.0/riot.min'
	},

	callback :function( jquery, jails ){

		jails.start({ base :jquery });
	}
});
