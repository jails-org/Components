define([

	'jails',
	'validator',
	'validator.messages',
	'validator.rules'

], function( jails, validator ){

	return jails('validation', function( component, form, anno ){

		var rules, instance;

		component.init = function(){

			rules = get_rules( form, anno );
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

	function get_rules( form, anno ){
		return anno.rules ||
			(form.getAttribute('data-validation-rules') || '')
			.split(/\s/);
	}

});
