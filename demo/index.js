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