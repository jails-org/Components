# sticky

>Let's a html element fixed at some scrolling target

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

Set a css class on a element at some `y` point of scrolling. Useful to set a header sticky at some scroll point.

## Live Example

[Live demo](//rawgit.com/jails-org/Components/jquery/zepto/sticky/sample/index.htm)

## Markup

```html
<header
    data-component="sticky"
    data-sticky-top
    data-sticky-css
    data-sticky-target
/>

```

## Annotations

```html
<!-- @sticky({ top :Number, css :String, target :$() }) -->
<header data-component="sticky" />
```

## Optionals

| options                |     default
|:--------------         |:----------------:
| data-sticky-top        |    `0`
| data-sticky-css        |    `fixed`
| data-sticky-target     |    The current component element
