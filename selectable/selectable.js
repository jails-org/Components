define(['jails'],function( jails ){

	jails.component('selectable', function(html){

		var
			cmp = this,

		target		= html.data('click-target'),
		buttons		= html.find(target || 'a'),
		css			= html.data('active-class') || 'active',
		selectable	= html.data('selectable-target') || '';

		this.init = function(){
			buttons.on('click', select);
		};

		this.select = function(index){
			change( buttons.eq(index) );
		};

		function select(){

			var element = $(this);

			change( $(this) );
			cmp.emit('selected', this);
		}

		function change( element ){

			if(!selectable){
				buttons.removeClass( css );
				element.addClass( css );
			}
			else{
				buttons.parents( selectable ).removeClass( css );
				element.parents( selectable ).addClass( css );
			}
		}
	});

});
