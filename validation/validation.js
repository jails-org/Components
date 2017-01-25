define([

	'jails',
	'validator',
	'validator.messages',
	'validator.rules'

], function( jails, validator ){

	return jails('validation', function( component, form, props ){

		var rules, instance, prop = props();

		component.init = function(){

			rules = get_rules( form, prop );
			instance = validator.create({ holder :$(form) });

			instance.add_all( add_all() );
			instance.on('validator.success', success);
			instance.on('validator.error', error);

			component.on('submit', post);
		};

		component.set = function( fn ){
			fn.call( component, instance );
		};

		function success(){
			component.emit('success');
		}

		function error(err){
			component.emit('error', err);
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

	function get_rules( form, p ){
		return p.rules || p.data.validationRules || ''.split(/\s/);
	}

});
