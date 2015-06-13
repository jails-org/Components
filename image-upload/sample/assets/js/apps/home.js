define([

	'jails',
	'comps/image-upload/image-upload'

], function( jails ){

	var image, json, code;

	jails.app('home', function(html, data){

		this.init = function(){

			image = html.find('.thumbnail img');
			code = html.find('textarea');
			json = $.get('json.htm');

			json.done( display );
			this.listen( 'image-upload:load' , load );
		};

	});

	function load(e, w){
		image.attr('src', w.result.url);
	}

	function display( response ){
		code.val( response );
	}

});
