define([

	'jails',
	'comps/riot-view/riot-view'

], function( jails, Riot ){

	return jails.component('todo', function( html, anno ){

		var cp = this, view, model = {};

		this.init = function(){

			view = new Riot( html, anno ).init();

			model.list = [];
			model.opts = { title:'Meu teste' };

			html.on('submit', 'form.remove', this.remove);
			html.on('submit', 'form.add', this.add);
		};

		this.add = function(e){

			if(! this.item.value )
				return;

			model.list.push({
				name	:this.item.value,
				index	:model.list.length
			});

			this.item.value = '';
			view.update( model );

			e.preventDefault();
		};

		this.remove = function(e){

			model.list.splice( this.item.value, 1 );
			view.update( model );

			e.preventDefault();
		};

	});
});
