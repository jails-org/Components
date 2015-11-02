# selectable

> A selecting and unselecting UI Component.

>**Version** :`0.1.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

---

This silly component helps you to keep your code DRY, many of your applications will have any selected and unselected states, there's no reason to code them for each instances of that.

## Markup

```html
<section data-component="selectable">
	<a href="#1">1</a>
	<a href="#2">2</a>
	<a href="#3">3</a>
</section>
```

## Annotations

```html
<!--@submitter({ target :String selector, css:String })-->
<section data-component="selectable" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   |
|:--------------|:---------------:|:----------------------  |
| data-selectable-target |	'a'	  |  `string` selector      |
| data-selectable-css 	 |	'active' |  `string` class name |


- data-selectable-css: Use this if your selected class name is different from 'active'.
- data-selectable-target: Target your element which will be clicked. It will be the same element that's gonna be applied the css class.
