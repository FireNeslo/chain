/**
 * returns this argument for chaining
 * @module nslo-chain
 * @author fireneslo@gmail.com
 * @param {function} fn - function to chain
 **/
function chain(fn) {'use strict';
	return function () {
		var result = fn.apply(this, arguments);
		return result === void 0 ? this : result;
	};
}

module.exports = chain;