
#Facebook Connect

>It loads Facebook SDK, connects to Facebook Api and normalize status event handling.

---

### Markup

```html
<script data-component="fb-connect" data-appid="YOUR_APP_ID"></script>
```

## Optionals

| options       |     default      | values
|:-------------:|:----------------:|:--------:
| data-lang     |    `en_US`       | Any facebook available language, e.g `pt_BR`
| data-xfbml    |   `false`        | `true`, `false`

## Events

| Events            |           callback
|:------------------|:--------------------------|
| **.emit(**"fb-connect.status"**)**   | **Function**(`event`, `status`) |


## Instance Methods

### .status( [String param]) : `null`
Fires status on FB api, some parameter can be passed to be used on `states()` method.

### .states( param )
You can implement `.states()` to catch the state of current user, and add logic to each states.

## Usage

```js

//Controller login.js
facebook = this.get('component', 'fb-connect').instance();

// Defining states
facebook.states = function(response, action){

    // I want to know if I'm trying to login here
    // and if the status are not connected
    // If so, I try to connect.
    if( action == 'login' && response.status != 'connected'){
        return FB.login( get_user_data );
    }

    // When user is connected then I can by-pass that login
    // Just executing the default function
    if(response.status == 'connected'){
        get_user_data();
    }
};

function get_user_data(){

    FB.api('/me',{ fields: 'picture, first_name' }, function(user){
        console.log( user.first_name );
        console.log( user.picture.data.url );
    });
}

// Triggering login action
// 'login' is just a flag to be used on facebook.states => action.
facebook.status('login');

```
