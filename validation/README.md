# validation

>Wrapper component to validate forms.

> deps : `validator`, `validator.rules`, `validator.messages`, `validator.mask`

---

Validator component uses the validator library in order to easily create html form markup with validations.
More info and documentations: [Here](//github.com/Javiani/Validator2)

## Markup

```html
<form data-component="validation" data-rules="required,email" data-mask="digits,letters" />
```

## Annotations

```html
<!-- @validation({ rules :Array, masks: Array }) -->
<form data-component="validation" />
```

## Usage

Validations rules and messages may vary based on your `rules.js`, `messages.js` files.

The component will try to match your rules and masks name with html elements classes.

So, considering that you already have defined some rules and messages to your project,
you can use the markup just like that:

```html
<!--@validation({ rules :['required', 'email'], masks :['email','letters'] })-->
<form action="/" data-component="validation" novalidate>
    <label>Name</label>
    <input type="text" name="user" class="required letters" />

    <label>Email</label>
    <input type="text" name="email" class="required email" />
</form>

```

# Emits

This component emits just 2 events: `validation:error`, `validation:success`.
It sends the `validator` error object in case of error, more info about it please visit [Validator Project](//github.com/Javiani/Validator2)


## Methods

### .instance

This method returns the `validator` instance.
Since you can just invoke component methods by events, to get the instance you must do by using callbacks:

```js
jails.controller('form', function(html, data){

    this.init = function(){

        var validator;
        var v = this.x('[data-component]');

        //Getting validator instance;
        validation('instance', function(options){
            validtor = options.validator;
        });

        // Now you already have validator instance.
        // console.log( validator );
    };
});
```

## Live Example

The sample is in this repository also, if you want to see the source code.

[Sample](//rawgit.com/jails-org/Components/tree/master/validation/sample/index.htm)
