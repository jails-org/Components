define(['jails'], function( jails ){

	return jails.component('dropfile', function(html, ann){

		var
			cp = this, input, form,
			url, dropbox, css, dropcss;

		this.init = function(){

			input	= html.get(0);
			form	= input.form;
			f 		= $(form);

			dropbox	= $(ann.drop || html.data('drop'));
			css 	= ann.dragcss || html.data('dragcss') || 'dragover';
			dropcss = ann.dropcss || html.data('dropcss') || 'dropped';

			register();
		};

		function send(e){

			cp.emit('change', {
				ev: e,
				formdata :get_files( input.files )
			});
		}

		function get_files(files){

			if(!files.length) return;

			var formdata = new FormData(form);

			$.each(files, function(){
				formdata.append(input.name, this);
			});

			return formdata;
		}

		function drop(e){

			var files = e.dataTransfer ?
				 e.dataTransfer.files
				:e.originalEvent.dataTransfer.files;

			dropbox.removeClass(css).addClass(dropcss);

			cp.emit('drop', {
				ev: e,
				formdata: get_files(files),
				files :files
			});

			e.preventDefault();
		}

		function dragover(e){

			dropbox.addClass(css);
			cp.emit('dragover', { ev: e});
			e.preventDefault();
		}

		function dragleave(e){

			dropbox.removeClass(css);
			cp.emit('dragleave', { ev: e});
			e.preventDefault();
		}

		function register(){

			$(input).on('change', send);

			if( dropbox.length ){
				dropbox
					.on('dragover', dragover)
					.on('drop', drop)
					.on('dragleave', dragleave);
			}
		}

	});

});
