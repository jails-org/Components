#preloader

> Preloader and Lazy loader for images.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

The preloader sets a `loading` class to the image html wrapper and waits for image to fully load before remove the loading class from it.

It can also save an image url and load that image only when it's visible for user.

## Markup

```html
<div data-component="preloader">
    <img src="my/image/url.jpg" alt="Some Info About Image" />
</div>
```

## Annotations

```html
<!-- @preloader({ lazy :String, loading :String, error :String, complete :String }) -->
<div data-component="preloader">
    <img src="my/image/url.jpg" alt="Some Info About Image" />
</div>
```

### Optionals

| options       |     default      |        values
|:--------------|:----------------:|:-----------------
|data-preloader-lazy |    null        |  `string` The url of the image to load when image is visible in the page viewport.
|data-preloader-loading | 'loading'   | `string` The css class name to be placed on the html element when image is in loading state.
|data-preloader-error   | 'error'     | `string` The css class name to be placed on the html element when image is broken.
|data-preloader-complete | 'complete' | `string` The css class name to be placed when image is complete and loaded successfully.
