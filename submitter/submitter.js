define(['jails'],function( jails ){

	jails.component('submitter', function(form){

		var
			comp = this,
			action, serialize, params;

		this.init = function(){

			action = form.data('emit');
			serialize = form.data('serialize');
			params = form.data('params');

			form.on('submit', send( action ));
		};

		this.serialize = function(){
			return form.serialize();
		};

		this.params = function(){
			return get_params(form.get(0));
		};

		function send(action){

			return function(e){

				var data = {};
					data.form = this;

				if(serialize) data.serialize = serialize? form.serialize() :null;
				if(params) data.params = get_params(this);

				comp.emit( action, data );
				e.preventDefault();
			};
		}
	});

	function get_params(f){
		var p = {}, elements = f.elements;

		$.each(elements, function(){
			if(this.name) p[this.name] = this.value;
		});

		return p;
	}
});
