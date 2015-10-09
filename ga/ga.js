define(['jails'],function( jails ){

	return jails.component('ga', function(html, ann){

		var _self = this, ua, mode, name;

		this.init = function(){
			html 	= $(html);	
			name	= this.name;
			ua		= ann.ua || html.data('ua');
			mode	= ann.debug || html.data('debug')? 'dev' :'prod';

			sniplet();
			create();

			this.listen('ga', _ga);
			this.listen('ga-mode', _mode);
		};

		function _ga(){

			var args = Array.prototype.slice.call( arguments );
				args.shift();

			if(mode == 'prod') ga.apply(null, args);
			if(mode == 'dev'){
				console.log.apply(console, [name+' ->'].concat(args));
			}
		}

		function _mode(e, type){

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
