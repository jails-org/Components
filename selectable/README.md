# selectable

>Adds a selecting behavior to html elements by adding class or removing on `click` events.

---

### Markup

```html
<ul data-component="selectable" data-selectable-target="li">
    <li><a href="#/">1</a></li>
    <li><a href="#/">2</a></li>
    <li><a href="#/">3</a></li>
    (...)
</ul>
```

## Optionals

| options                |     default      |        values
|:--------------         |:----------------:|:-----------------
| data-click-target      |    `a`          |  `string` element selector that will fire click event. e.g 'a', for links.
| data-active-class      |    `active`      |  `string` a css class name.
| data-selectable-target |    `a`           |  `string` element that will have the class changed. e.g 'li' to specify that li parent will get the class, not the < a> element.


## Instance Methods

### .select( `number` index) : `null`
It will set the current class in the element of the list on `.eq(index)` position.

## Emit Events

### selectable:selected
`selectable:selected` will be fired on click event, and it will send current element as parameter.

```js
//My controller/view

(...)

this.listen('selectable:selected', log);

function log(e, element){
    console.log(element, 'is selected!!!');
}
```
