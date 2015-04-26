# litemodal

>Opens a dialog window using [litemodal](//github.com/Javiani/Litemodal) css project.

>**Dependencies**:`mustache`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

Emits `litemodal:open` after dialog is opened.

## Markup

```html
<div class="litemodal" data-component="litemodal">
    <div class="m-body"></div>
</div>
```

## Annotations

```html
<!--@litemodal({ button:String, open :String, loading :String, close :String })-->
<div class="litemodal" data-component="litemodal">
    <div class="m-body"></div>
</div>
```

## Optionals

| options                |     default           |        values
|:--------------         |:---------------------:|:-----------------
| data-litemodal-button  |    `a[rel=litemodal]` |  `string`, the selector of the element which will open modal window.
| data-litemodal-open    |    `open`             |  `string`, the css class name used to display dialog window.
| data-litemodal-loading |    `loading`          |  `string`, the css class name used for loading state.
| data-litemodal-close   |    `a[rel=close]`     |  `string`, the selector of the close element.


## Attributes

### .win
The reference of the *litemodal* html holder.
You should use this holder to add css classes.

### .body
The inner element of the dialog window, this is where content should be placed.


## Methods

All the component methods will be available also as events, so
for `.open()` method, there's a equivalent `open` event.

### .open()
Just shows the dialog window

### .close()
The oposite of `.open`.

### .loading()
Adds loading state.

### .loaded()
Removes loading state.

### .render( String | DOM )
Adds content to `body` of dialog window.

### .render_tpl( String, Object )
Renders the selector of template in the first parameter using mustache to mix the data object.


## Usage

You can use any higher class module to listen to modal and grab the modal instance:

```html

<a href="#" rel="litemodal">OPEN!!</a>

<div data-view="modal">
    <div class="litemodal" data-component="litemodal">
        <div class="m-body"></div>
    </div>
</div>

<script id="tmpl-modal" type="x-tmpl-mustache">
    <a href="#" class="m-close" rel="close">Close</a>
    {{content}}
</script>
```

After user clicks on `a[rel=litemodal]` link, the dialog is opened and emits a `litemodal:open` event.
The second argument of callback function is the instance of **litemodal** component.

```js
jails.view('modal', function(html, data){

	this.init = function(){
		this.listen('litemodal:open', modal);
	};

	function modal(e, litemodal){
		litemodal.render_tpl('#tmpl-modal', {content:'test'});
	}
});
```

You can change the default element to open the window by setting a `data-litemodal-button` attribute or just the button annotation:

```html
<div id="open-modal-element">click me!</div>

<!--@litemodal({ button :'#open-modal-element' })-->
<div class="litemodal" data-component="litemodal">
	<div class="m-body"></div>
</div>
```

Or just opening using js :

```js
jails.view('my-view', function(){

    this.init = function(){
        //Using the class name
        this.broadcast('.litemodal', 'open');
    }
}
```
