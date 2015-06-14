# notifier

>Wraps a simple logic to display messages to the user.

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

This component can be used to display warning, error and information messages to the user in your page.


## Live Example

- [Demo](//rawgit.com/jails-org/Components/master/notifier/sample/index.htm)

---


## Options

- `data-notifier-show` : The css class used to display notifier container. Default : **show**
- `data-notifier-hide` : The css class used to hide notifier container.
- `data-notifier-close`: The selector of the element that triggers closing dialog event. Default : **.notifier-close**
- `data-notifier-alert`: The messages html container to be used as template for the next messages. Default : **.alert**
- `data-notifier-dismiss`: The selector of the element that triggers the removing item event. Default : **.close**


---

## Markup

```html
<section data-component="notifier">

    <a href="#" class="notifier-close">Close</a>
    <p class="alert">
        <a href="#/" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></a>
    </p>

</section>

```

## Annotations

```html
<!--@notifier({ show: String, hide :String, close :String, alert :String, dismiss :String })-->
<section data-component="notifier" />
```

## Methods

### .open()

Just opens the dialog.

---

### .close()

Closes the dialog.

---

### .message(String text, [String css])

Sends a message to be appended on notifier, it takes a optional second parameter with css class name of the appended element.

---

### .notify(String text, [String css])

Calls `.open()` and then `.message()` methods.
Basically is the same of `.message()` method, but it will always open the notifier dialog.

---

### .dismiss( [Int index] )

Removes a item of the list on a specific position, or remove all the list if no argument is passed.
