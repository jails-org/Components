require([

	'jails'

],function( jails ){

	jails.component('fb-connect', function(html){

		var
			cp 			= this,
			global		= window,
			language 	= html.data('lang') || 'en_US',
			xfbml 		= html.data('xfbml') || false,
			id 			= html.data('appid');

		this.init = function(){
			require(['//connect.facebook.net/'+language+'/sdk.js']);
		};

		this.status = function(param){

			FB.getLoginStatus(function(response) {
				cp.states( response, param );
				cp.emit('status', { data :response, options :param });
			});
		};

		this.states = function(){
			console.log('Component', this.name, 'warning.', 'You need to implement .states() method.');
		};

		global.fbAsyncInit = function(){

			FB.init({
				appId      : id,
				xfbml      : xfbml,
				version    : 'v2.1',
				cookie		:true
			});

			cp.status();
		};

	});
});
