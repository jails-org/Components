define([

	'jails',
	'comps/riot-view/riot-view'

], function( jails, Riot ){

	return jails.component('todo', function( html, anno ){

		var cp = this, view, model = {};

		this.init = function(){

			view = new Riot( html, anno ).init();

			model.list = [];

			html.on('submit', 'form.remove', this.remove);
			html.on('submit', 'form.add', this.add);
		};

		this.add = function(e){

			var item = this.item;
			if(! item.value ) return;

			model.list.push({ item:item.value });

			item.value = '';
			view.update( model );

			e.preventDefault();
		};

		this.remove = function(e){
			var item, index;

			item = this.item;

			$.grep(model.list, function(i, ind){
				if(i.item == item.value) index = ind;
			});

			model.list.splice( index, 1 );

			view.update( model );
			e.preventDefault();
		};

	});
});
