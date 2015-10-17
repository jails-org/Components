# autopost

>Trigger form submit event on a given event and target settings.

>**Version** :`0.1.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

---

This component can be used on forms that don't have a button but needs to be submitted.

## Markup

```html
<section data-component="autopost"></section>
```

## Annotations

```html
<!--@autopost({ target :String selector, event :'change' })-->
<section data-component="litemodal" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   	|
|:--------------|:---------------:|:------------
| data-autopost-target 	| null	  	|  `string`    	|
| data-autopost-event	| 'click' 	|  `string` 	|

- data-litemodal-target : Form elements which will fire up submit event.
- data-litemodal-event: Which event should be fired.

## Usage

```html
<form action="#">
	<div data-component="autopost">
		<input type="radio" value="1" />
		<input type="radio" value="2" />
		<input type="radio" value="3" />
	</div>
</div>
```
