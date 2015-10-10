# {{my-component}}

>A brief description about what your component does.

>**Dependencies**: `lib1`, `lib2`, `lib3`

>**Author**: [Author's name](http://link-to-find-me)

>**Sample**: [Demo](//rawgit.com/jails-org/Components/master/notifier/sample/index.htm)

---

Sample is not mandatory, you can remove the sample line from the header.

## Markup

It's always nice to show should be your component's markup

```html
<section data-component="my-component"></section>

```

## Annotations

Does it has annotations? Then show us =).

```html
<!--@notifier({ show: String, hide :String, close :String, alert :String, dismiss :String })-->
<section data-component="my-component" />
```

## Methods

## .method
    .method();

Show your component's public methods.

---

### .another
    .another(String text, [String css]);

Also if it has parameters.

---

### .method2
    .method2();

If you need to show code:

```js
jails.component('my-component', function(element, anno){

    this.init = function(){
        //Stuffs
    };
});
```

---
