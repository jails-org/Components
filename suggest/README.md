# suggest

> A simple suggestion component.

---

Emits `suggest:request` when user inputs some text in the text box.

Emits `suggest:selected` when user selects a list element.

Listen to `list` event with a model within to render the suggestion list.

## Markup

```html
<input data-component="suggest" data-suggest-template="#tmpl-list" data-suggest-target=".dropdown-menu" />

<ul class="dropdown-menu"></ul>

<script id="tmpl-list" type="x-tmpl-mustache">
	{{#list}}
		<li><a href="#">{{name}}</a></li>
	{{/list}}
</script>
```

## Annotations

```html
<!--@suggest({  at:2 , target :'.dropdown-menu', template :'#tmpl-list', css:'show' })-->
<input data-component="suggest" />
(...)
```

## Optionals

| options                |     default      |        values
|:--------------         |:----------------:|:-----------------
| data-suggest-css       |    `active`      |       `String`, the css class name of the list when some data is available
| data-suggest-at        |    `3`           |       `Number`, the minimum string length to request a data.
