/**
 *	@name Custom Messages
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

	var M = Validator.internal('Message');

	M.add_all({
		required : 'Este campo é obrigatório',
		email    : 'Preencha um email valido',
		number: 'Preencha apenas com números'
	});

	return M;
}));
