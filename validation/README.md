# validation

>A wrapper component for the [validator](//github.com/Javiani/Validator) module.

>**Dependencies** : `validator`, `validator.messages`, `validator.rules`

>**Version** :`1.0.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

---

The **validation** component utilizes `validator` module to validate a form, triggering events for `success` and `error` events, also, creates validation dynamically using annotations and data properties.

This component needs the validator setup in the project, this means you need a `validator.message.js` file and `validator.rules` js file, in order to be ready to use the validator module.

## Markup

```html
<form data-component="submitter" data-validation-rules="required email">
	<input type="text" class="required email" />
</form>
```

## Annotations

```html
<!--@validation({ rules :[ String ] })-->
<form data-component="submitter">
	<input type="text" class="required email" />
</form>
```

## Public Method

### .set( Function ) : Validator
You can set and use all validator methods but setting a callback to the `.set` method.
This way you can totally change validation default behavior.


## Usage

```js
define([

	'jails',
	'comps/validation/validation'

], function( jails ){

	jails('component-a', function(component, html, data){

		var validator;
		var validation = this.x('[data-component*=validation]')

		component.init = function(){

			validation('set', set);
			component.listen('validation:success', success);
			component.listen('validation:error', error);
		};

		function set( instance ){
			validator = instance;
		}

		function success(){}
		function error(){}

	});
});
```
