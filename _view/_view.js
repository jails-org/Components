define([

	'jails',
	'_'

], function( jails, _ ){

	var decoder, templates, config;

	decoder = document.createElement('textarea');
	templates = {};
	config = { type :'x-tmpl', prefix :'tmpl-' };

	function main(){

		var scripts = document.querySelectorAll('script[type*='+config.type+']');

		for(var i = 0; i < scripts.length; i++)
			partial( scripts[i] );
	}

	function partial(el){

		var cfg = config.prefix;
		var name = el.id.split( cfg || 'tmpl-').pop();

		decoder.innerHTML = el.innerHTML.replace(/^\s+|\s+$/g, '');
		templates[name] = decoder.innerText;
	}

	main();
	return jails.component('view', function(html, anno){

		var cp = this, template;

		this.init = function(){
			decoder.innerHTML = html.innerHTML;
			template = _.template( decoder.innerText );
		};

		this.render = function( vo, tpl ){
			var data = jails.data();
			var tmpl = tpl || template(vo || data);
			partial(html, tmpl, vo || data);
		};

		this.templates = function( callback ){
			callback? callback(templates) :null;
		};

		function partial(el, tmpl, vo){

			var newvo, html;
			vo = vo || {};
			tmpl = templates[tmpl] || tmpl;

			if(vo && vo.done){
				vo.done(function(response){ cp.partial(el, tmpl, response); });
			}
			else{
				html = _.template( tmpl || tpl )( vo );
				el.innerHTML = html;
				jails.refresh( el );
			}
		};

	});

});
