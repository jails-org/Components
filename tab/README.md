# tab

>Just a simple tab behavior.

---

Emits `tab:change` on **click** event, sending current tab and current content.

## Markup

```html
<ul data-component="tab" data-tab-target=".some-class" data-tab-click="ul li">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

<div class="some-class">Content 1</div>
<div class="some-class">Content 2</div>
<div class="some-class">Content 3</div>
```

## Annotations

```html
<!-- @tab({ target :String, click :String, css :String }) -->
<ul data-component="tab" >
    (...)
</ul>
(...)
```

## Optionals

| options                |     default      |        values
|:--------------         |:----------------:|:-----------------
| data-tab-css           |    `active`      |       `String`
