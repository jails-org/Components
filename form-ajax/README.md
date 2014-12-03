
#Form AJAX

>This component adds **ajax** behavior to a `form` and extends it with new `events`.

---

### Markup

```html
<form data-component="form-ajax" data-service="/my/rest/"></form>
```

## Optionals
| options       |     default      | values
|:-------------:|:----------------:|:--------:
| data-method   |    `get`         |  `post`, `get`, `getScript`, `getJSON`
| data-loading  |   `loading`      | Any css class name for loading state

## Events

| Events            |           callback
|:------------------|:--------------------------|
| **listen(**"form-ajax:success"**)**   | **Function**(`event`, `response`)   |
| **listen(**"form-ajax.error"**)**     | **Function**(`event`, `exception`)  |
| **.trigger(**"form-ajax:post"**)** | Triggers the post event the same as form.submit() |


## Instance Methods

###.post() : `null`
The same as form.submit() jQuery call.
