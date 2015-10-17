# litemodal

>A component wrapper to open and close `litemodal` dialog window.

>**Version** :`0.1.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

---

Litemodal project simplifies the way to open a modal window.
It's not have a plenty of methods you don't want, it only opens a dialog.

A huge advantage on using this css based project is the fact that the holder is not detached from the DOM,
So it will keep all the events and state of your dialog window.

More about litemodal project : [Litemodal](//github.com/Javiani/Litemodal)

## Markup

```html
<div class="litemodal open" data-component="litemodal">
	<div class="m-body"></div>
</div>
```

## Annotations

```html
<!--@litemodal({ open :String, close :String selector })-->
<div class="litemodal open" data-component="litemodal" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   |
|:--------------|:---------------:|:------------
| data-litemodal-open |	'open'	  |  `string`    |
| data-litemodal-close|	'.close'  |  `string` selector    |

- data-litemodal-open : Set the css class name to be used to open modal.
- data-litemodal-close: Set the css selector that will close the modal on `click` event.

Also, modal will be closed on `esc` key press, on overlay `click`.

## Usage

```js
define([

	'jails',
	'components/litemodal'

], function(jails, litemodal){

	jails.app('sample', function(html, data) {

		var modal = this.x('[data-component*=litemodal]');

		this.init = function(){
			modal('open'); // To open
			//modal('close'); // To close
		};
	});
});
```
