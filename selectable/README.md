# selectable

>Selectable handles active and unactive css toggling and prevent default action aswell.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

Emits:

- `selectable:select`

## Live Example

[Live demo](//rawgit.com/jails-org/Components/jquery/zepto/selectable/sample/index.htm)

## Markup

**Optional** :`data-selectable-ignore`, `data-selectable-target`, `data-selectable-css`, `data-selectable-prevent`.


---

```html
<ul data-component="selectable"

    data-selectable-ignore=".ignored"
    data-selectable-target="a"
    data-selectable-css="active"
    data-selectable-prevent="false"
/>
```

## Annotations

```html
<!-- @selectable({ ignore :String, target :String, css :String, prevent :Boolean }) -->
<ul data-component="selectable">...</ul>
```
