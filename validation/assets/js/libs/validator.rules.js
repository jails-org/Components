/**
 *	@name Custom Rules
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

	var R = Validator.internal('Rule');

	R.add('required', function(element){

		var
			el = element,
			type = el.type.toLowerCase(),
			valid = false;

		if (type == 'radio' || type == 'checkbox') {
			var checked = $('[name="'+el.name+'"]:checked').length;
			return !!checked || valid;
		}

		return ( !!( el.checked || $.trim(el.value) ) || valid );
	});

	R.add('email', function(element){

		var
			value = element.value,
			match = value.match(/\b[a-z0-9._%-]+@[a-z0-9.-]+\.\w{2,4}\b/);

		if(!value) return true;

		return !!match;
	});

	return R;
}));
