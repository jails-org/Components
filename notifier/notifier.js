define([

	'jails'

], function( jails ){

	return jails.component('notifier', function(container, anno){

		var cp = this,
			first, target,
			message, show, hide,
			close_item, close, item;

		this.init = function(){

			container = $(container);
			show	= anno.show  || container.data('notifier-show') || 'show';
			hide 	= anno.hide  || container.data('notifier-hide') || '';
			close	= anno.close || container.data('notifier-close') || '.notifier-close';
			item 	= anno.alert || container.data('notifier-alert') || '.alert';
			close_item	= anno.dismiss || container.data('notifier-dismiss') || '.close';

			first = container.find(item).eq(0);
			target = first.parent();
			first.remove();

			container.on('click', close_item, dismiss);
			container.on('click', close, this.close);
		};

		this.open = function(){
			container.removeClass(hide).addClass(show);
		};

		this.close = function(){
			container.removeClass(show).addClass(hide);
		};

		this.notify = function( msg, css ){
			this.open();
			this.message( msg, css );
		};

		this.dismiss = function( index ){
			if( arguments.length ){
				container.find(item).eq(index).remove();
			}else{
				container.find(item).remove();
			}
		};

		this.message = function( msg, css ){

			var newmessage = first.clone();
				newmessage.append( msg );

			target.prepend( newmessage );
			newmessage.addClass(css);
		};

		function dismiss(){

			$(this).parents(item).remove();

			if(!container.find(item).length){
				cp.close();
			}
		}

	});

});
