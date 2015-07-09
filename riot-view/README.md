# riot-view

> A wrapper to the great Riot.js the React-Like User Interface Library

>**Dependencies:** `riot`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

[
    ![Riot](http://javiani.files.wordpress.com/2015/06/screen-shot-2015-06-20-at-12-58-18.png)
](//muut.com/riotjs/)


This wrapper instantiates and initiates the [Riot](//muut.com/riotjs/) library, and apply the Jails component standards. You can use the Jails component calls or use the raw **Riot** instance.


## Live Example

[Live demo](//rawgit.com/jails-org/Components/master/riot-view/sample/index.htm)

## Markup

You need ot use the `riot-tag` attribute if you're using an existing html tag:

```html
<div
    riot-tag="mytag"
    data-component="view"
/>
```

To use custom tags, you just need to set them without `riot-tag` attribute.

```html
<mytag title="World" data-component="view">
    Hello {title}
</mytag>
```

**Optionals**

- `data-riot-options="{title:'Hello!'}"`: To set default `riot.opts` options.
- `data-riot-hide="hide"` : To set the css class to hide element while javascript isn't ready. The default class is "hide".


## Annotations

```html
<!-- @view({ hide :String, options :Object }) -->
<mytag title="World" data-component="view" />
```

---

## TODO list template example

```html
<ul riot-tag="todo" title="Todo List" data-component="todo" class="hide">

    <li><p>{opts.title}</p></li>

    <li each={list}>
		<p>{name}</p>
		<form action="#/remove" class="remove">
			<input type="hidden" name="item" value={index} />
			<button>Delete</button>
		</form>
	</li>
	<li>
		<form action="#/add" class="add">
			<input type="text" name="username" />
			<button>Add</button>
		</form>
	</li>
</ul>

```

---

## Methods


### .update
    .update( data );

Updates the template html with a model.


### .get
    .get( [callback] );

Get the raw Riot instance, you can pass a `Function` as a callback if you're trying to get the instance through an event.


#Usage

- Updating using a Controller or an App.

```js

jails.controller('my-controller', function(html, data){

    var riot = this.x('[data-component*="view"]');

    this.init = function(){

        //Using .update() component method
        riot('update', { title :'Hello World'});

        //Using .get() component method
        riot('get', function( rawriot ){
            rawriot.update({ title :'Hello World Again' });
        });
    };

});

```

- Updating using a instance on other Jails component.

```js
require([

    'jails',
    'component/riot-view'

], function(jails, Riotview){

    jails.component('my-component', function(html, anno){

        var view = new Riotview(html, anno);

        this.init = function(){

            // The jails component riot-view returns
            // raw Riot instance on .init() method.
            var rawriot = view.init({ some :'options' });

            //Using Jails component Updates
            view.update({ title :'Hello World'});

            //Using Riot raw instance
            rawriot.update({ title :'Hello World' });
        };
    });
});

```
