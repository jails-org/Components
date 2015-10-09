define([

	'jails',
	'validator',
	'messages',
	'rules',
	'mask'

], function( jails, validator ){

	return jails.component('validation', function(form, ann){

		var cp = this, instance, rules;

		this.init = function(){

			form = $(form);	
			instance = validator.create({ holder :form });

			load_rules();

			form.on( 'submit', validate );

			instance.add_all( rules );
			instance.on( 'validator:error', error );
			instance.on( 'validator:success', success );
		};

		this.instance = function( callback ){
			callback({ validator :instance, form :form });
		};

		function validate(e){
			return instance.validate();
		}

		function error(data){
			cp.emit('error', data);
		}

		function success(data){
			cp.emit('success', data);
		}

		function create_rules(rules){

			var r = {}, n, aux, clss;

			for( var i = 0; i < rules.length; i++ ){

				n = rules[i];
				clss  = '.'+n;
				r[ clss ] = { rules:{} };
				r[ clss ].rules[ n ] = true;
			}

			return r;
		}

		function create_masks( masks, r ){

			var n, aux, clss, m = r || {};

			for( var i = 0; i < masks.length; i++ ){

				n = masks[i];
				clss  = '.'+n;

				m[ clss ] = m[ clss ] || {};
				m[ clss ].mask = n;
				m[ clss].rules = m[clss].rules || {};
			}

			return m;
		}

		function load_rules(){

			var r, m;
				r = form.data('rules');
				m = form.data('masks');

			if( r ){
				r = r.replace(/\s/, '');
				rules = create_rules( r.split(/\,/) );
			}else if( ann.rules )
				rules = create_rules( ann.rules );

			if( m ){
				m = m.replace(/\s/, '');
				rules = create_masks( m.split(/\,/), rules );
			}else if( ann.masks )
				rules = create_masks( ann.masks, rules );
		}

	});

});
