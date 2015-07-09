# \_view

> A underscore template component

>**Dependencies:** `underscore`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This component is just a wrapper that renders views using underscore templating system.
You can use this component to render views if you're using underscore on your project instead of other template engines such as `mustache`.

## Markup

```html
<div data-component="view">
    My name is <%=name%>
</div>
```

or

```html
<script type="x-tmpl" id="tpl-user">
    My name is <%=name%>
</script>
```

## .render
    .render( data, [template]);

`data` can be either a `Object` or a `Promise`.
View will render the html mixing the data object with a specified template.

## .templates
    .templates( callback );

Sends back to a function all the stored templates in the page. The view component stores in a object all the script tags inner text templates rendered in the page.

Using the html as template:

```html
    <div data-component="view">
        My name is <%=name%>
    </div>
```

```js
jails.controller('my-controller', function(){

    var view = this.x('[data-component=view]');

    this.init = function(){
        view('render', { name:'Clark Kent!!' });
    };
});
```

Using script template:

```js
jails.controller('my-controller', function(){

    var view = this.x('[data-component=view]');

    this.init = function(){
        view('render', { name:'My name!!' }, 'user');
    };
});
```

```html
<div data-component="view"></div>
<script type="x-tmpl" id="tpl-user">
    My name is <%=name%>
</script>
```
