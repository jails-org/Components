#include

> Include loads an external html and appends it inside the component element.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

### Markup

```html
<section
    data-component="include"
    data-include="url/partial/file.htm"
    data-loading="loading" />
```

### Annotations

```html
<!-- @include({ url:String, loading :String }) -->
<section data-component="include" />
```

## Optionals

| options       |     default      |        values
|:--------------|:----------------:|:-----------------
|data-loading   |    'loading'     |  `string` the css class name for loading state.
