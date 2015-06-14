define([

	'jails',
	'../../../../notifier'

], function( jails, notifier ){

	jails.app('home', function(html, data){

		var notification = this.x('[data-component=notifier]');

		this.init = function(){

			this.watch('form', 'submit', notify);
			html.find('.forms').removeClass('loading');
		};

		function notify(){

			var form, button, field, css;

			form = $(this);
			button = form.find('button');
			field = form.find('input[type=text]');
			css = button.prop('value') + ' animated flash';

			notification('notify', field.val(), css );
			field.val('');
		}

	});

});
