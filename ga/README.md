#ga

>This component adds **Google Analytics** snipplet and wraps the ga() method.

---

### Markup

```html
<script data-component="ga" data-ua="UA-XXXX-Y"></script>
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

### .mode( [String dev, String prod] ) `null`
If it's on "dev" mode, `.ga()` will log parameters, otherwise if it's on 'prod' mode it will call original `ga()` method instead.

### Example

```js
var analytics = this.get('component', 'ga').instance();
    analytics.ga('send', 'pageview');
    analytics.ga('send', 'event', 'category', 'action');
```
