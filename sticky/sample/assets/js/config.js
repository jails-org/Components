require.config({

	baseUrl :'assets/js',
	deps    :[ 'jquery', 'jails', global.page ],
	include :['config'],

	paths   :{
		jails		:'../../../Jails/source/jails',
		mods		:'//rawgit.com/jails-org/Modules/master',
		comps		:'//rawgit.com/jails-org/Components/master',
		jquery 		:'//code.jquery.com/jquery-2.1.1.min',
		cp			:'../../../Components'
	},

	callback :function( jquery, jails ){
		jails.start({ base :jquery });
	}
});
