meteor-plivo
===============

Meteor wrapper for Plivo NodeJs helper library.

##Install
```bach
meteor add risul:plivo
```

##Use
Add this to your settings.json or METEOR_SETTINGS env variable containing all settings as JSON

```json
{
    "plivo": {
        "authId": "********",
        "authToken": "********"
}
```

This package also support use of ENV variables instead of settings:

PLIVO_AUTH_ID
PLIVO_AUTH_TOKEN



More info
=======================================
Refer here https://github.com/plivo/plivo-node/ for more info about plivo-node.
Refer here https://www.plivo.com/docs/api/ API documentation.
Example nodejs app: https://github.com/plivo/plivo-examples-node