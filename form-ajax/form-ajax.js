define([ 'jails' ],function(jails){

	/*
		@Component <Form Ajax>

		@Description
			This component sets ajax behavior to a form
			and extends it with new events.

		@Attributes
			data-service	<String>
			data-method		<String> - Default :"get" [get, post, getScript, getJSON]
			data-loading	<String> - Default :"loading"

		@Events
			form-ajax.success
			form-ajax.error

		@Triggers
			form-ajax.post
			form-ajax.off

		@Example
			<form data-service="/my/rest/" data-method="post" />
	*/

	jails.component('form-ajax', function(form){

		var
			_self = this,
			name = this.name,
			service, method, loading;

		this.init = function(){

			this.options = {
				service :form.data('service') || 'You need to set a data-service on your form...',
				method	:form.data('method') || 'get',
				loading :form.data('loading') || 'loading'
			};

			form.on( 'submit.' + name, post );
			form.on( name+'.off', off );
		};

		this.post = function(){

			var params = form.serialize();

			form.addClass( _self.options.loading );
			$[_self.options.method]( _self.options.service, params ).done(success).fail(error);
		};

		function post(e){

			_self.post();
			e.preventDefault();
		}

		function success(result){

			form.removeClass( loading );
			form.trigger( name +'.'+ 'success', result );
		}

		function error(e, exception){

			form.removeClass( loading );
			form.trigger('name' +'.'+ 'error', exception);
		}

		function off(){
			form.off('submit.'+name);
		}

	});

});
