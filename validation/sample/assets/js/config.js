require.config({

	baseUrl :'assets/js/',
	deps    :['jails', 'zepto', global.page],

	paths   :{

		zepto 		:'libs/zepto',

		validator	:'libs/validator',
		messages	:'libs/validator.messages',
		rules		:'libs/validator.rules',
		mask		:'libs/validator.mask',

		jails		:'//rawgit.com/jails-org/Jails/master/source/jails.min',
		mustache  	:'//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min',
		mods		:'//rawgit.com/jails-org/Modules/master',
		comps		:'//rawgit.com/jails-org/Components/master'
	},

	callback :function( jails ){

		jails.start({ base :Zepto });
	}
});
