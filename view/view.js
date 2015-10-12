define([

	'jails',
	'mustache'

], function( jails, mustache ){

	var View, Util, newmodel;

	View = jails.component('view', function( html, anno ){

		var cp = this, template, debug;

		this.init = function(){

			View.init();

			template = anno.template || html.getAttribute('data-template');
			template = template? View.templates[ template ] : View.generate( html );
			debug = anno.debug || html.getAttribute('data-template-debug');

			if( debug ) console.info( 'component.view[Template]: ' + template );
		};

		this.render = function( model ){

			if( model && model.done){
				model.done( this.render );
			}else{
				newmodel = extend( View.filters, model );
				newmodel = extend( View.formats, newmodel );
				html.innerHTML = mustache.render( template, newmodel, View.templates );
				jails.refresh( html );
			}
		};
	});

	View.type = 'x-tmpl';
	View.templates = {};
	View.filters = {};
	View.formats = {};

	View.init = function(){
		View.scan();
		this.init = function(){};
	};

	View.filter = function(name, method){
		return View.filters[name] = function(){
			return method.call(this, this, name);
		};
	};

	View.format = function(name, method){
		return View.formats[name] = function(){
			return function(text, render){
				return method( render(text) );
			};
		};
	};

	View.scan = function(){

		var scripts, len, script;

		scripts = get('script[type*='+this.type+']');
		len = scripts.length;

		for(var i = 0; i < len; i++){
			script = scripts[i];
			this.templates[ script.id.replace('tpl-', '') ] = script.innerHTML;
		}
	};

	View.generate = function( context ){

		var tpl = '', v,
		div = document.createElement('div'),
		aux = document.createElement('div');

		div.innerHTML = context.innerHTML;

		each( get('[data-if]', div ), function(i){
			v = this.getAttribute('data-if');
			before(this, '{{#'+v+'}}');
			after(this, '{{/'+v+'}}');
		});

		each( get('[data-not]', div ), function(i){
			v = this.getAttribute('data-not');
			before(this, '{{^'+v+'}}');
			after(this, '{{/'+v+'}}');
		});

		each( get('[data-each]', div ), function(i){
			v = this.getAttribute('data-each');
			aux.innerHTML = '';
			aux.appendChild( this.children[0] );
			this.innerHTML = '{{#'+v +'}}'+ aux.innerHTML +'{{/'+v+'}}';
		});

		each( get('[data-value]', div ), function(i){
			v = this.getAttribute('data-value');
			var filter = v.split(/\:/);
			if(!filter[1]) this.innerHTML = '{{'+v+'}}';
			else this.innerHTML = '{{#'+filter[1]+'}}{{' +filter[0]+ '}}{{/'+filter[1]+'}}' ;
		});

		each( get('[data-attr]', div ), function(i){
			var it = this, attributes = (new Function('return '+ this.getAttribute('data-attr')))();
			Object.keys( attributes ).forEach(function(attr){
				it.removeAttribute(attr);
			});
		});

		return Util.decode(div.innerHTML.replace(/(data-attr)="\{{1}(.*)\}{1}"/g, function(a, b, c, d){
			var attributes = ' ',  o = new Function('return {'+c +'}')();
			Object.keys(o).forEach(function(key){
				if( key ) attributes += (key + '=\"' + o[key] + '\" ');
			});
			return attributes;
		}).trim().replace(/\t|\n/g, ''));
	};

	Util = {
		textarea :document.createElement('textarea'),
		decode :function( string ){
			var t = this.textarea;
			t.innerHTML = string;
			return t.value;
		}
	};

	function get( query, context ){
		return (context||document).querySelectorAll( query );
	}

	function after(el, text){
		el.parentNode.insertBefore(document.createTextNode(text), el.nextSibling);
	}

	function before(el, text){
		el.parentNode.insertBefore(document.createTextNode(text), el);
	}

	function extend(a, b){
		for(var i in a) b[i] = a[i];
		return b;
	}

	function each(args, fn){
		args = Array.prototype.slice.call(args);
		var len = args.length;
		for( var i = 0; i < len; i++ ) fn.call( args[i], i );
	}

	function decode(string){
		var textarea = document.createElement('textarea');
		textarea.innerHTML = string;
		return textarea.value;
	}

	return View;
});
