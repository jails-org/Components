define([

	'jails',
	'validator',
	'validator.messages',
	'validator.rules'

], function( jails, validator ){

	jails.component('validation', function( form, anno ){

		var cp = this, rules, instance;

		this.init = function(){

			rules = get_rules( form, anno );
			instance = validator.create({ holder :$(form) });

			instance.add_all( add_all() );
			instance.on('validator.success', success);
			instance.on('validator.error', error);

			this.on('submit', post);
		};

		this.set = function( fn ){
			fn.call( cp, instance );
		};

		function success(){
			cp.emit('success');
		}

		function error(err){
			cp.emit('error', err);
		}

		function post(e){
			if( !instance.validate() ){
				e.preventDefault();
			}
		}

		function add_all(){
			return rules.reduce(function(acc, item){
				var rule = {};
					rule[item] = true;
				acc['.' + item] = { rules :rule };
				return acc;
			}, {});
		}

	});

	function get_rules( form, anno ){
		return anno.rules ||
			(form.getAttribute('data-validation-rules') || '')
			.split(/\s/);
	}

});
