define([ 'jails' ],function(jails){

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
			_self.emit('success', result);
		}

		function error(e, exception){

			form.removeClass( loading );
			_self.emit('error', exception);
		}

		function off(){
			form.off('submit.'+name);
		}

	});

});
