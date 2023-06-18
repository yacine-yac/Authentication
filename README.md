# Authentication System based Express Js.

## Introduction:
This app is build using `node js`, which handle user interactions like Authentication & Authorization.
It enable junior learners to have an idea how Authentication systems are build.

1. Purposes:
   with this project will be learn:
   
* Learn how to handle user requests.
* Authenticate user based credientials.
* Register a user in database.
* Implement Authorization middleware.
* Handle dynamic and static routes.
* Create router dom.

## Dev Envirment:
this app run on node js dev envirment and mysql for database management system.

The dev server is running using supervisor command.

```command line
     supervisor index.js
```
**Changes .env file variables values appropriate to your envirment**

## App endpoints:
This app has a limited ressources
* **/** : root app 
* **/register** : sign up user
* **/about** : it's a protected page
* **/\*** : for the rest of page it will be redirected into 404 page.


## Folders structure.

* **router**: routes handlers.
* **controller**: controllers classes responsible on the validation of external inputs.
* **model** : classes responsible for providing data.
* **db** : handling database operations.
* **passport** : handle authentication operations.
* **static** : static ressources like icons, style and scripts.
* **views** : web pages will be matched by routes.
* **templates** : provide templates.

