# view 

>A wrapper Component for templates using the power of excellent Riot.js Virtual DOM library.

>**Dependencies** :`riot.js`

>**Version** :`1.0.0`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

>**Demo**: [TodoMVC](//rawgit.com/jails-org/Demos/master/TodoMVC/index.htm)

---

Riot.js is one of the best micro-libraries out there, and you can use all the power of virtual dom of it on your `views`.

This is an alternative for the default `view` Jails component.

[![Riot](http://javiani.files.wordpress.com/2015/06/screen-shot-2015-06-20-at-12-58-18.png)](//muut.com/riotjs/)

# Virtual DOM

Riot.js implements Virtual DOM technique which means that you're view should only update what is changed.
This is a huge improvement on performance on your applications.

# Templating

Riot.js give us a few directives on html to loop and print data. `if`, `each` and `{}`.
The `riot-view` component extend the template view with new features.

1. View will not be updated once the tag is mounted by riot. This is specially useful when your view already have relevant data printed by server-side. So you have to clear-up component before an initial .update() call.
2. `data-value`,  a lazy expression evaluation. `<p data-value="{name}" />` will be replaced by `<p>{name}</p>` in memory and will be replaced after the first `.update()` call. This is also a practical explanation for the item `1`.
3. `data-template`, points to a script tag instead to be used as template. `data-template="#my-template"`.

# Methods

### .update / .render
	.update( Object | Promise );

Merge model with html template and renders the result. Accepts a plain `Object` and also a `Promise`. In the Promises case, it will render after promise is **done**.


### Markup

```js
<section data-component="riot-view" />
```

### JS using a Controller

```js
define([

	'jails'

], function( jails ){

	return jails.controller('todo', function( element, anno, opts ){

		var view;
		this.init = function(){
			view = this.x('[data-component*=riot-view]');
			view('update', {});
		};
	});
});

```

## More information

If you need more information about Riot.js, I really recommend you to visit [Riot's site](//riotjs.com/).
