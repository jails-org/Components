# autopost

> Triggers .submit() method of the form after a pre-defined event on some html element.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This component is very useful when you want to submit form automatically, when there's no need to click on a button to post data. For instance, when you have a combobox and want to submit the form when user selects an option, or when you want to post data when user selects a radio option.


Emits:

- `autopost:post`

## Markup

**Required** :`data-autopost-target`

**Optional** :`data-autopost-event`, Default :`change`

---

```html
<select data-component="autopost" />
```

## Annotations

```html
<!-- @autopost({ target :String, event :String }) -->
<select data-component="autopost" />
```

### autopost on select option:

```html
<!--@autopost({ target :'.my-select' })-->
<form data-component="autopost">
    <select class="my-select">
        <option>1</option>
        <option>2</option>
    </select>
</form>
```
