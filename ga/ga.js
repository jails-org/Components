define([

	'jails'

],function( jails ){

	jails.component('ga', function(html){

		var _self = this, ua, mode, name;

		this.init = function(){

			name	= this.name;
			ua		= html.data('ua');
			mode	= html.data('debug')? 'dev' :'prod';

			sniplet();
			create();
		};

		this.ga = function(){

			if(mode == 'prod') ga.apply(null, arguments);
			if(mode == 'dev'){
				var args = Array.prototype.slice.call( arguments );
				console.log.apply(console, [name+' ->'].concat(arguments));
			}
		};

		this.mode = function(type){

			if(type == 'dev' || type == 'dev')
				mode = type;
			else
				console.log(name+' ->', 'There\'s no mode like', type, ' your options are:[ dev, prod ]');
		};

		function create(){
			if( ua ) _self.ga('create', ua, 'auto');
		}

		function sniplet(){
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		}

	});

});
