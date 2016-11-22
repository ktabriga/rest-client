# rest-client
A tiny library for javascript client projects that simplify requests to a rest api

## Usage

A basic usage in a react-native projects

```js

import { AsyncStorage } from 'react-native';
import restClient from './lib/rest-client';
import { SERVER_URL } from './env';

restClient.init({
  serverUrl: SERVER_URL,
  authHeader: 'Authorization',  
  globalHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
AsyncStorage.getItem('token-auth')
  .then(restClient.setToken);  


restClient.fetch('foo')
  .then(res => res.json());    
```


### Methods

#### init(options)
Initialize the object.

options:
```js
{
  serverUrl: SERVER_URL, //Server's url
  authHeader: 'Authorization',  // Header to be sent in every request for authentication
  globalHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }// Headers to be default in all requests
}
```

#### setToken(token: any)
Update token

#### clearToken()
Remove token

#### fetch(url, options)
Make request to api with the configuration. All options are the same in default [fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) browser.
