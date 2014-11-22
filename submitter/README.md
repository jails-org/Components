# submitter

>Prevents submit default behavior of a form and emit's itself.

---

## Usage

Every time form is submitted it will emit the `login` message.

```html
<form
    data-component="submitter" data-emit="login"
    data-params="true"
    data-serialize="true">
    (...)
</form>

```

```js
//My App/Controller/View

this.listen('submitter:login', log);

function log(e, data){

    console.log('User is trying to login');
    console.log(data);
    //form:[HtmlElementForm],
    //serialize :'name=eduardo&lastname=ottaviani' }
    //params :{ name :'eduardo', lastname :'ottaviani'}
}
```

## Optionals

| options                |     default      |        values
|:--------------         |:----------------:|:-----------------
| data-serialize         |    `false`         |  `true` to send form serialized, `false` to omit it.
| data-params            |    `false`         |  `true` to send form data as an object, `false` to omit it.


## Methods

### .params() : `Object`
Get the hash of form's elements.

### .serialize() : `String`
Get the form serialized.
