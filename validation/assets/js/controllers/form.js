define([

	'jails',
	'components/validation'

], function( jails ){

	jails.controller('form', function(html, data){

		var messages, validation, input, validator;

		this.init = function(){

			messages = html.find('.text-danger');
			validation = this.x('[data-component]');
			input = html.find('input');

			//Getting validator instance;
			validation('instance', get_validator);

			input.on('blur', blur);
			this.listen('validation:error', feedback);
		};

		function feedback(e, err){

			messages.text('');

			$.each(err.list, function(){
				print_msg( this );
			});
		}

		function blur(e){
			var el = validator.test(this);
			print_msg( el );
		}

		function get_validator( o ){
			validator = o.validator;
		}
	});


	function print_msg(instance){

		var msg = instance.messages.list[0];

		$(instance.element).parents('.form-group')
			.find('.text-danger')
			.text( msg );
	}

});
