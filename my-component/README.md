# {{my-component}}

>A brief description about what your component does.

>**Version** :`0.0.0`

>**Dependencies**: `lib1`, `lib2`, `lib3`

>**Author**: [Author's name](http://link-to-find-me)

>**Sample**: [Demo](//rawgit.com/jails-org/Components/master/component/sample/index.htm)


---

Sample is not mandatory, you can remove the sample line from the header.

Sample is not mandatory, you can remove the sample line from the header.
Also Dependencies are not mandatory, if your component doesn't have any, just remove that line too.

Semantic Versioning is welcome here =).

## Markup

It's always nice to show should be your component's markup

```html
<section data-component="my-component"></section>

```

## Annotations

Does it has annotations? Then show us =).

```html
<!--@notifier({ param1: String, param2 :String, param3 :Boolean })-->
<section data-component="my-component" />
```

## Optionals

If your component has markup or default parameters, you can use a simple table to show them.

| options       |     default      |        values
|:--------------|:----------------:|:-----------------
| data-option   |    null          |  `string` *Should be the name of something*
| data-init     |    false         |  `true`, `false` *Should be the state of something*

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
