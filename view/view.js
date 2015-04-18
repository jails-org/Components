define([

	'jails',
	'mustache'

], function( jails, mustache ){

	jails.component('view', function(element, anno){

		var cp = this;
		var tpl, templates, render, global = jails.data();

		this.init = function(){

			templates = jails.templates;

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
			vo = vo || {};
			tmpl = templates[tmpl] || tmpl;

			if(vo && vo.done){
				vo.done(function(response){ cp.partial(el, tmpl, response); });
			}
			else{
				newvo = $.extend({}, vo, jails.filters);
				html = mustache.render( tmpl || tpl, newvo, templates );

				el.html( html );
				jails.refresh( el );
			}
		};

		function get(name){
			return name?templates[name] :null;
		}

	});

	function generate(el){

		var html = el.html(), ch = $('<div />'), aux = $('<div />'), text;

		aux.append( html );

		aux.find('[data-if]').each(function(){
			var it = $(this), v = it.data('if');
			it.before('{{#'+v+'}}');
			it.after('{{/'+v+'}}');
		});

		aux.find('[data-not]').each(function(){
			var it = $(this), v = it.data('not');
			it.before('{{^'+v+'}}');
			it.after('{{/'+v+'}}');
		});

		aux.find('[data-each]').each(function(){
			var it = $(this), child = it.children().eq(0), name = it.data('each');
			ch.empty().append(child);
			it.html('{{#'+name +'}}'+ch.html()+'{{/'+name+'}}');
		});

		aux.find('[data-value]').each(function(){
			var it = $(this), name = it.data('value'), filter = name.split(/\:/);
			if(!filter[1]) it.html( '{{'+ name +'}}');
			else it.html('{{#'+filter[1]+'}}{{' +filter[0]+ '}}{{/'+filter[1]+'}}');
		});

		aux.find('[data-out]').each(function(){
			$(this).before('{{#out}}').after('{{/out}}');
		});

		//http://stackoverflow.com/questions/317053/regular-expression-for-extracting-tag-attributes
		return $.trim(aux.html().replace(/(data-attr)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g, function(a, b, c, d){
			return c;
		}));
	}

});
