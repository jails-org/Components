# submitter

>A post event emitter for Forms, sending all data as json or a serialized string.

>**Version** :`0.1.0`

>**Author**: [Eduardo Ottaviani](//github.com/javiani)

>**Sample**: [Codepen](//codepen.io/Javiani/pen/Gpvyrq)


---

The `submitter` is very useful and help us to not repeat ourselves by:

- Preventing default Form behavior on submit.
- Serializes it's data to string serialize format and json parameters.

## Markup

```html
<form data-component="submitter"></form>
```

## Annotations

```html
<!--@submitter({ emit :String })-->
<form data-component="submitter" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options	   |	 default	  |		values   |
|:--------------|:---------------:|:------------
| data-submitter-emit |	'post'	  |  `string`    |

- data-submitter-emit : Set's the emit event for each form you have in the page, if not set, it emits `submitter.post`.

## Usage

```html
<form data-component="submitter">
	<input type="hidden" name="username" value="Mario" />
	<input type="hidden" name="lastname" value="Bros" />
	<button>Send</button>
</form>
```

Listening submitter event using a Controller.
Controller will log after a submit call, when user clicks the `Send` button.

```js
define([
	'jails',
	'comps/submitter/submitter'
], function(jails, submitter){

	jails.controller('my-controller', function(html, data){

		this.init = function(){
			this.listen('submitter:post', log);
		};

		function log(e, formdata){
			console.log( formdata );
			/*{
				params :{ username:'Mario', lastname :'Bros' },
				serialize :'username=Mario&lastname=Bros'
			}*/
		}
	});
});
```
