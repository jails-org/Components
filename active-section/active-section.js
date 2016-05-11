define([

	'jails'

], function( jails ){

	return jails.component('activesection', function( element, anno ){

		var self 		= this,
			diference 	= anno.diference || (+element.getAttribute('data-activesection-diference')) || 0,
			activeClass = anno.activeClass || element.getAttribute('data-activesection-class') || '-activesection',
			etop 		= element.offsetTop,
			interval 	= '',
			timer 		= '',
			w 			= window;

		this.init = function(){
			addEvent();
			interval = setInterval(watch, 300);
		};

		function watch() {
			if (w.pageYOffset >= etop + diference) {
				clearInterval(interval);

				self.emit('visible', element);
				if (element.className.indexOf(activeClass) !== -1) { return; }
				element.className = element.className + ' ' + activeClass;
			}
		}

		function addEvent() {
			if (w.attachEvent) {
				w.attachEvent('onresize', update);
			} else if(w.addEventListener) {
				w.addEventListener('resize', update, true);
			}
		}

		function update() {
			clearTimeout(timer);
			timer = setTimeout(function() {
				etop = element.offsetTop;
			}, 250);
		}
	});
});
