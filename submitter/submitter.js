define(['jails'],function( jails ){

	return jails.component('submitter', function(form, ann){

		var
			comp = this,
			action, serialize, params;

		this.init = function(){

			form = $(form);	
			action = ann.emit || form.data('emit');
			serialize = ann.serialize || form.data('serialize');
			params = ann.params || form.data('params');

			form.on('submit', send( action ));
		};

		this.serialize = function(){
			return form.serialize();
		};

		this.params = function(){
			return get_params(form);
		};

		function send(action){

			return function(e){

				var data = {};
					data.form = this;

				if(serialize) data.serialize = serialize? form.serialize() :null;
				if(params) data.params = get_params(form);

				comp.emit( action, data );
				e.preventDefault();
			};
		}
	});

	function get_params(f){
		var p = {};

		$.each(f.serializeArray(), function(){
			if(this.name) p[this.name] = this.value;
		});

		return p;
	}

});
