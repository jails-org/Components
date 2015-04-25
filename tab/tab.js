define(['jails'], function( jails ){

	jails.component('tab', function(html, anno){

		var cp = this, content, buttons, css;

		this.init = function(){

			content = $(anno.target || html.data('tab-target'));
			buttons = $(anno.click || html.data('tab-click'));
			css		= anno.css	|| html.data('tab-css') || 'active';

			register();
		};

		function register(){
			buttons.each( each_buttons );
		}

		function each_buttons(i){
			$(this).click( click_event(i) );
		}

		function click_event(index){

			var b, c;

			return function(e){

				b = buttons.eq(index);
				c = content.eq(index);

				cp.emit('change', { tab :b, content :c });

				buttons.removeClass( css );
				b.addClass( css );

				content.removeClass( css )
				c.addClass( css );

				e.preventDefault();
			};
		}
	});
});
