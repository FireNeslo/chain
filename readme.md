nslo-chain - v0.4.0
===
chaining decorator
## Install
### npm
```bash
$ npm install FireNeslo/chain --save
```
### bower
```bash
$ bower install FireNeslo/chain --save
```
## Usage
```js
var chain = require('..');

var chainable = {
	val : chain (function (value) {
		if(!value) return this.value;
		this.value = value; 
	})
};

var value = chainable
  .val('value')
  .val()

console.log(value);
```
## Test
```bash
$ npm install -g mocha
$ npm test
```
##API

<!-- Start /home/fireneslo/Dropbox/nslo/chain/index.js -->

## chain(fn)

returns this argument for chaining

Author: fireneslo@gmail.com

### Params: 

* **function** *fn* - function to chain

<!-- End /home/fireneslo/Dropbox/nslo/chain/index.js -->

