# image-upload

>Submits an image to server via hidden iframe as a normal form post, emulating ajax for binary files.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This component lets you to submit an image for preview by posting it to an action using a hidden iframe. It's usually called fake ajax request, since the page is not reloaded and in the same time it lets you to submit binary files.


**Optionals**
`data-image-upload-hiddens`, `data-image-upload-url`

---

```html
<form action="url/to/service" data-image-upload-hiddens="input:hidden" data-image-upload-url="some/service/url">
    <input type="file" name="upload" data-component="image-upload" />
    <input type="hidden" name="somevar" value="10" />
</form>
```

## Annotations

```html
<!--@image-upload({ url: 'json.htm', hiddens :'input:hidden' })-->
<input type="file" data-component="image-upload" />
```

## Live Example

[Live demo](//rawgit.com/jails-org/Components/master/image-upload/sample/index.htm)
