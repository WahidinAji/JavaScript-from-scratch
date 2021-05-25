## ES6 Export & Import
* package.json

jangan lupa tambahin type untuk memberitahu nodejs bahwa kita menggunakan ES6 module
```json
"main": "main.js",
"type": "module",
```

* export 
 - export class Wolf.js
```js
 export default Wolf;
```
 - export class Tiger.js
```js
 export default Tiger;
```
 - export class main.js
```js
 export {fight, myTiger, myWolf, result};
```

* import
 - import class Tiger.js & Wolf.js to main.js
 ```js
 import Tiger from "./Tiger.js";
 import Wolf from "./Wolf.js";
```

## before ES6 Export & Import
* package.json

tidak perlu menambahkan type untuk memberitahu nodejs bahwa kita menggunakan ES6 module, jika tambahkan akan error
```json
"main": "main.js",
"type": "module",
```

* export 
 - export class Wolf.js
```js
 module.exports = Wolf;
```
 - export class Tiger.js
```js
 module.exports = Tiger;
```
 - export class main.js
```js
 module.exports = {fight, myTiger, myWolf, result};
```

* import
 - import class Tiger.js & Wolf.js to main.js
 ```js
 const Tiger = require('./Tiger');
 const Wolf = require('./Wolf');
```