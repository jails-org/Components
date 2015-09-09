define([

	'jails',
	'mustache'

], function( jails, mustache ){

	var templates = {};
	var filters = {};
	var config = { type :'x-tmpl', prefix :'tmpl-' };

	main();

	return jails.component('view', function(element, anno){

		var cp = this;
		var tpl, render, global = jails.data();

		this.init = function(){

			tpl = get(anno.template) || get(element.data('template')) || generate(element);
			render = get(anno.render) || element.data('render');

			if(render) this.render(global);
		};

		this.template = function(vo, tmpl){
			return mustache.render( get(tmpl), vo, templates );
		};

		this.render = function(vo, template){

			var tmpl = template || tpl;
			this.partial(element, tmpl, vo);
		};

		this.partial = function(el, tmpl, vo){

			var newvo, html;
			vo = vo || global || {};
			tmpl = templates[tmpl] || tmpl;

			if(vo && vo.done){
				vo.done(function(response){ cp.partial(el, tmpl, response); });
			}
			else{
				newvo = $.extend({}, vo, filters);
				html = mustache.render( tmpl || tpl, newvo, templates );

				el.html( html );
				jails.refresh( el );
			}
		};

		this.filter = function(name, method){
			return filters[name] = function(){
				return function(text, render){
					return method( render(text) );
				};
			};
		};

		function get(name){
			return name?templates[name] :null;
		}

	});

	function generate(el){

		var html = el.html(), ch = $('<div />'), aux = $('<div />'), text, s_aux;

		aux.append( el.clone() );

		aux.find('[data-if]').each(function(){
			var it = $(this), v = it.data('if');
			it.before('<!--{{#'+v+'}}-->');
			it.after('<!--{{/'+v+'}}-->');
		});

		aux.find('[data-not]').each(function(){
			var it = $(this), v = it.data('not');
			it.before('<!--{{^'+v+'}}-->');
			it.after('<!--{{/'+v+'}}-->');
		});

		aux.find('[data-each]').each(function(){
			var it = $(this), child = it.children().eq(0), name = it.data('each');
			ch.empty().append(child);
			it.html('<!--{{#'+name +'}}-->'+ch.html()+'<!--{{/'+name+'}}-->');
		});

		aux.find('[data-value]').each(function(){
			var it = $(this), name = it.data('value'), filter = name.split(/\:/);
			if(!filter[1]) it.html( '{{'+ name +'}}');
			else it.html('{{#'+filter[1]+'}}{{' +filter[0]+ '}}{{/'+filter[1]+'}}');
		});

		aux.find('[data-out]').each(function(){
			$(this).before('{{#out}}').after('{{/out}}');
		});

		aux.find('[data-attr]').each(function(){
			var it = this, attributes = (new Function('return '+ $(it).data('attr')))();
			Object.keys( attributes ).forEach(function(attr){
				it.removeAttribute(attr);
			});
		});

		return $.trim( aux.html().replace(/(data-attr)="\{{1}(.*)\}{1}"/g, function(a, b, c, d){
			var attributes = ' ',  o = new Function('return {'+c +'}')();
			Object.keys(o).forEach(function(key){
				if( key ) attributes += (key + '=\"' + o[key] + '\" ');
			});
			return attributes;
		}));
	}

	function main(){

		var scripts = document.querySelectorAll('script[type*='+config.type+']');

		for(var i = 0; i < scripts.length; i++)
			partial( scripts[i] );

		//Injecting new Default out filter
		filters.out = function(text){
			var h = $(text), aux  = $('<div />'), script = h.data('out');
				h.html((new Function('return ' +script))());
				aux.append(h);
			return aux.html();
		};
	}

	function partial(el){
		var cfg = config.prefix;
		var name = el.id.split( cfg || 'tmpl-').pop();
		templates[name] = el.innerHTML.replace(/^\s+|\s+$/g, '');
	}

});
