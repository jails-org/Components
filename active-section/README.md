# activesection

>Add a class to a given element when window scroll is on his top.

>**Version** :`0.1.0`

>**Author**: [Danilo Riedel](//github.com/driedel)

---

This component can be used on any element on page.

## Markup

```html
<section data-component="activesection"></section>
```

## Annotations

```html
<!--@activesection({ diference :Number, activeClass:String })-->
<section data-activesection-diference="-150" />
<section data-activesection-class="visible" />
```

## Optionals

If your component hasn't markup or default parameters, this are the default values.

- data-activesection-diference : 0.
- data-activesection-class: -activesection.

## Usage

```html
<div data-component="activesection" data-activesection-diference="-150" data-activesection-class="visible">
	<h1 class="main-title">My Title</h1>
	<p class="base-text">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore facilis architecto voluptates nobis porro voluptatibus quam distinctio officiis iusto? Iste tempora eum cumque nobis, vitae debitis autem sunt laudantium ipsum!
	</p>
</div>
```

Listening activesection event using a Controller.
Controller will log the element when window scroll is on his top.

```js
define([
	'jails',
	'comps/active-section/active-section'
], function(jails, activesection){

	jails.controller('my-controller', function(html, data){

		this.init = function(){
			this.listen('activesection:visible', log);
		};

		function log(e){
			console.log( e );
		}
	});
});
```
