define([

	'jails',
	'../../../../view'

], function( jails, view ){

	view.filter('fullname', function(model){
		return model.name + ' ' + model.lastname;
	});

	view.format('uppercase', function(text){
		return text.toUpperCase();
	});

	view.filter('radios', function( model ){

		var newitems = [];

		model.items.forEach(function(item){
			newitems.push({
				classname :item.selected? 'active' :'',
				state	  :item.selected? 'checked':'',
				label	  :item.label,
				value     :item.value
			});
		});

		return newitems;
	});

	jails.app('sample', function(html, data){

		var view = this.x('[data-component=view]');

		this.init = function(){

			view('render', {
				items :[
						{ label: 'Chocolate', selected :false, value :1 },
						{ label: 'Vanilla', selected:true, value :2 },
						{ label: 'Strawberry', selected :false, value :3 }
					]
			});
		};

	});

});
