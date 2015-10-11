require.config({

	baseUrl :'assets/js',
	deps    :[ 'jquery', 'jails', global.page ],
	include :['config'],

	paths   :{
		jails		:'//rawgit.com/jails-org/Jails/master/source/jails.min',
		mods		:'//rawgit.com/jails-org/Modules/jquery/zepto',
		comps		:'//rawgit.com/jails-org/Components/jquery/zepto',
		jquery 		:'//code.jquery.com/jquery-2.1.1.min',
		cp			:'../../../Components'
	},

	callback :function( jquery, jails ){
		jails.start({ base :jquery });
	}
});
