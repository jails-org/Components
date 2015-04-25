define([

	'jails',
	'mustache'

], function( jails, mustache ){

	jails.component('litemodal', function(html, anno){

		var cp = this, body, css_open, css_loading, button;

		this.init = function(){

			css_open = anno.open || html.data('litemodal-open') || 'open';
			css_loading = anno.loading || html.data('litemodal-loading') || 'loading';
			button_close = anno.close || html.data('litemodal-close') || 'a[rel=close]';
			button = anno.button || html.data('litemodal-button') || 'a[rel=litemodal]';
			body = $(document.body);

			this.win  = html;
			this.body = html.find('.m-body');

			body.on('click', '.litemodal', outsideclose);
			body.on('click', '.litemodal '+ button_close, prevent(this.close) );
			body.on('click', button, click_open );

			listening();
		};

		this.open = function(){
			html.addClass( css_open );
			this.emit('open', this);
		};

		this.close = function(){
			html.removeClass( css_open );
		};

		this.loading = function(){
			html.addClass( css_loading );
		};

		this.loaded = function(){
			html.removeClass( css_loading );
		};

		this.render = function(template){
			cp.body.html( template );
		};

		this.render_tpl = function(template, data){
			var htm = mustache.render( $(template).html(), data );
			cp.body.html( htm );
		};

		function listening(){
			$.each(cp, function(name){
				if(this.constructor == Function)
					cp.listen(name, prevent(this));
			});
		}

		function outsideclose(e){
			if( $(e.target).is('.litemodal') ){
				cp.close();
			}
		}

		function click_open(e){
			cp.open();
			e.preventDefault();
		}

		function prevent( method ){
			return function(){
				var args = Array.prototype.slice.call(arguments);
				args.shift();
				method.apply(cp, args);
			};
		}

	});
});
