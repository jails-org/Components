# visibility

>Triggers a custom event when element is visible in the viewport

>**Version** :`1.0.0`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This component will emit a `visible` custom event, you can set this component in the same markup of your component and listen to the `visible` event.

### Usage

```js
<section data-component="my-component visibility" />
```

### JS using a Controller

```js
define([

	'jails'

], function( jails ){

	return jails('my-component', function( component, element, anno ){

		component.init = function(){
			component.listen('visibility:visible', log);
		};

		function log(){
			console.log('hey, I am visible right now!!!');
		}
	});
});

```
