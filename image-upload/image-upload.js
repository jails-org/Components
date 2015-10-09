define([

	'jails'

], function( jails ){

	var attributes = {
		method	:'post',
		enctype :'multipart/form-data',
		encoding:'multipart/form-data'
	};

	return jails.component('image-upload', function(file, anno){

		var cp = this, body, iframe, form, id, name, url, hiddens;

		this.init = function(){
			file = $(file);	
			body = $(document.body);
			name = file.attr('name');
			id = 'iframe-upload-' + name;
			url = anno.url || file.get(0).form.action;
			hiddens = anno.hiddens || file.data('image-upload-hiddens');

			create();
			append();
			register();
		};

		function append(){
			form.append( iframe );
			body.append( form );
		}

		function create(){

			iframe = $(document.createElement('iframe'));
			iframe.prop('name', id);

			form = $(document.createElement('form'));
			form.prop( attributes ).prop({
				target :id, action :url
			}).hide();
		}

		function register(){

			file.on('change', change);
			iframe.on('load', load);
		}

		function change(){

			cp.emit('change', this);

			var fake = $(document.createElement('input'));
			fake.prop({ type: 'file', name :name }).on('change', change);

			file.replaceWith( fake );
			form.append( file ).append( $(hiddens).clone() );

			form.submit();
			file = fake;
		}

		function load(){
			cp.emit('load', this.contentWindow);
			$(form.get(0).elements).remove();
		}

	});
});
