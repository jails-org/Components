# dropfile

>Drag and Drop file component.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

Emits:

- `dropfile:dragover`
- `dropfile:dragleave`
- `dropfile:drop`

## Live Example

[Live demo](//rawgit.com/jails-org/Components/jquery/zepto/dropfile/sample/index.htm)


## Markup

**Required** :`data-drop`

**Optional** :`data-dragcss`, `data-dropcss`

---

```html
<input type="file" data-component="dropfile"
    data-drop=".my-drop-div"
    data-dragcss="drag"
    data-dropcss="dropped"
/>
```

## Annotations

```html
<!-- @dropfile({ drop :String, dragcss :String, dropcss :String }) -->
<input type="file" data-component="dropfile" />
```
