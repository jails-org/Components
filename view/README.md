# view

>The official Jails view component, handles templating and rendering html code.

>**Version** :`0.1.1`

>**Dependencies**: `mustache`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

>**Sample**: [Codepen](//codepen.io/Javiani/pen/Gpvyrq), [Plunker](//plnkr.co/edit/hbQkrg)


---

The `view` component is a wrapper for `Mustache` template engine.

- The view accepts `object` models and also `promises` aswell.
- Scans all the template tags from the page and stores it.
- Support filter and transformation methods
- And also template imports.

## Markup

```html
<section data-component="view"></section>
```

Using templates:
```html
<script type="x-tmpl-mustache" id="tpl-card">
	<div class="card">
		{{>author}}
	</div>
</script>
<script type="x-tmpl-mustache" id="tpl-author">
	<p>{{name}}</p>
	<p>{{lastname}}</p>
</script>

```

Using html:
```html
<div class="card">
	{{>author}}
</div>
<!--or-->
<div class="card">
	<p data-value="name"></p>
	<p data-value="lastname"></p>
</div>
```

HTML templating uses `data` attributes to call mustache methods.
- `data-each` : Loops over a model's property. Uses first child of that element to be the item's template.
- `data-if` :Display html element if model property is `truthy`.
- `data-not`:Display html element if model property is `falsy` or not present.
- `data-value`: Performs .innerHTML in the html element with property value.

## Annotations

```html
<!--@view({ debug :Boolean, template :String })-->
<section data-component="my-component" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   |
|:--------------|:----------------:|:------------
| data-debug    |	false		  |  `boolean`   |
| data-template |	null		  |  `string`    |

- data-debug : console logs the generated template.
- data-template : Points to a mustache template in the page.

## Instance Methods

### .render
	.render( Object | Promise );

Merge model with html template and renders the result. Accepts a plain `Object` and also a `Promise`. In the Promises case, it will render after promise is **done**.

---

## Static Methods

### .format
	.format( String, Function );

Register a function to be used on string formatting.
Considering a `uppercase` format created, you can use it like this:

```js

define([
    'view'
], function(view){
    view.format('uppercase', function(text){
        return text.toUpperCase();
    });
});
```

```html
//Using template
{{#uppercase}}Some text{{/uppercase}}

//Using html template, considering firstname as data
<p data-value="firstname:uppercase"></p>

```

### .filter
	.filter( String, Function );

Register a function that can transform model data into something useful to rendering process.

Consider the following model:

```js
Model :	{
	items :[
			{ label: 'Chocolate', selected :true, value :1 },
			{ label: 'Vanilla', selected:false, value :2 },
			{ label: 'Strawberry', selected :false, value :3 }
	]
}
```

If you want to trasform data which is relevant for UI purposes,
then it's reasonable to do that on view instead of your model.

In this particular case, we want to show radios, so we need `checked` instead of `selected`, also,
we want to display a css class to the parent node when it's on active state.

```js
define([
    'view'
], function(view){

	view.filter('radios', function( model ){

		var newitems = [];

		model.items.forEach(function(item){
			newitems.push({
				classname :item.selected? 'active' :'',
				state	  :item.selected? 'checked':'',
				label	  :item.label,
				value     :item.value
			});
		});

		return newitems;
	});

});
```

Now, on template, instead of looping each `items` we loop over `radios` filters.
With that we can solve UI issues outside our Models classes, allows us to avoid to create unnecessary models to deal with UI states and also helps us to keep the `json` data simplified.

```html
<section data-component="view">
	<ul data-each="radios">
		<li class="{{classname}}">
			<input type="radio" name="flavor" value="{{value}}" {{state}} id="flavor-{{value}}" />
			&nbsp;<label for="flavor-{{value}}" data-value="label">Carregando....</label>
		</li>
	</ul>
</section>
```
