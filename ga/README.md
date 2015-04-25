#ga

>This component adds **Google Analytics** snipplet and wraps the ga() method.

---

### Markup

```html
<script data-component="ga" data-ua="UA-XXXX-Y"></script>
```

### Annotations
```html
<!--@ga({ ua:String })-->
<script data-component="ga"></script>
```

## Optionals

| options       |     default      |        values
|:--------------|:----------------:|:-----------------
| data-ua       |    null          |  `string` UA Code
| data-debug    |    false         |  `true`, `false`

\* *if setted, data-ua will call `ga('create', 'UA-XXXX-Y', 'auto')` automatically.*

## Instance Methods

### .ga() : `null`
This method will call original `ga()` and it will log parameters if `data-debug` is setted.

### .ga-mode( [String dev, String prod] ) `null`
If it's on "dev" mode, `.ga()` will log parameters, otherwise if it's on 'prod' mode it will call original `ga()` method instead.

### Example

```js
    // From a Controller/View or App
    this.broadcast('component:ga-mode', 'dev');
    this.broadcast('component:ga', 'send', 'pageview');
    //...
    this.broadcast('component:ga', 'event', 'category', 'action');
```
