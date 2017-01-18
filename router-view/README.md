# router-view

> Switch view content accordingly with URL changes.

>**Dependencies** :`riot`

>**Version** :`1.0.0`

>**Author**: [Eduardo Ottaviani](//github.com/Javiani)

---

# Markup

```html
<section data-component="router-view">
    <section data-name="index">
        <h1>/Index</h1>
    </section>
    <section data-name="a">
        <h1>/A</h1>
    </section>
    <section data-name="b">
        <h1>/B</h1>
    </section>
    <section data-name="c">
        <h1>/C</h1>
    </section>
</section>
```

# Annotations
```html
<!--
@router-view({
    target    :'section',
    url       :'/page/',
    index     :'index'
})
-->
```

# Options
```html
<section
	data-component="router-view"
	data-router-view-url="/page/"
	data-router-view-index="index"
	data-router-view-target="section"
/>
```

These following url's will emit the reespective events:

[http://localhost:3000/page/](#)
- emits `router-view:enter` sending `index` html element.

[http://localhost:3000/page/a](#)
- emits `router-view:leave` sending `index` html element.
- emits `router-view:enter` sending `a` html element.

[http://localhost:3000/page/b](#)
- emits `router-view:leave` sending `a` html element.
- emits `router-view:enter` sending `b` html element.

[http://localhost:3000/page/c](#)
- emits `router-view:leave` sending `b` html element.
- emits `router-view:enter` sending `c` html element.

---

router-view will emit `router-view:404` if no element `data-name` matches with url.

## Why triggering events ?

You might be wondering why just not show or hide the view instead of firing events. Well, maybe you need animation transitions between the views, so behavior may vary and it can be very difficult to tweak it to be exactly the way you want if we set default actions.
