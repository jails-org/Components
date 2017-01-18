# modal

>A component to open and close `modal` window.

>**Version** :`1.0.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

---

Modal project simplifies the way to open a modal window.
It's not have a plenty of methods you don't want, it only opens a modal window.

## Markup

```html
<div class="modal open" data-component="modal">
	<div class="m-body"></div>
</div>
```

## Annotations

```html
<!--@modal({ open :String, close :String CssSelector })-->
<div class="modal open" data-component="modal" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   |
|:--------------|:---------------:|:------------
| data-modal-open |	'open'	  |  `string`    |
| data-modal-close|	'.close'  |  `string` CssSelector    |

- data-modal-open : Set the css class name to be used to open modal.
- data-modal-close: Set the css selector that will close the modal on `click` event.

Also, modal will be closed on `esc` key press, on overlay `click`.

## Usage

```js
define([

	'jails',
	'components/modal'

], function( jails ){

	jails('sample', function( component, html, data) {

		var modal = component.get('[data-component*=modal]');

		component.init = function(){
			modal('open'); // To open
			//modal('close'); // To close
		};
	});
});
```
