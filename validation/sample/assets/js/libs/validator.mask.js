/**
 *	@name Custom Plugins
 *	@author Eduardo Ottaviani
 */
(function (root, factory) {

	if(typeof exports === 'object' && exports) {
		module.exports = factory( require('validator') );
	}else{

		if(typeof define === 'function' && define.amd) {
			define(['validator'], factory); // AMD
		}else{
			factory( root.Validator ); // <script>
		}
	}

}(this, function( Validator ){

	var Mask, P, masks;

	P = Validator.internal('Plugin');
	masks = {};

	P.add('mask', Mask = {

		initialize :function(elements, options){
			mask( elements, options );
		},

		add :function(o){
			masks[o.name] = o.method;
		}
	});

	Mask.add({
		"name" : "email",
		"method": function(v){ return v.replace(/[^a-z|\d|\-\_@.]/g,""); }
	});

	Mask.add({
		"name": "digits",
		"method": function(v){ return v.replace(/\D/g, ""); }
	});

	Mask.add({
		"name" : "letters",
		"method": function(v){ return v.replace(/\d/g, ""); }
	});

	function test(object, mask){

		var method = masks[mask];
		if(!method) return console.log('Mask.test::exception', 'mask not exists =>', mask);

		object.value = method( object.value );
	}

	function mask(element, Mask){

		var _self = this;

		element.bind('keyup.mask',function(e){

			switch(e.keyCode){
				case 8:  //backspace
				case 9:  //tab
				case 37: //arrow left
				case 38: //arrow up
				case 39: //arrow right
				case 40: //arrow down
				case 34: //page up
				case 33: //page down
				case 35: //end
				case 36: //home
				case 16: //shift
				case 18: //option
				case 17: //control
				case 91: //command
				return true;
			}
			var split = Mask.split("|");
				for (var y = 0; y < split.length; y++)
					test( this, split[y] );
		}).trigger('keyup.mask');
	}

	return P;
}));
