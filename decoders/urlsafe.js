'use strict';

const predicateUrlSafe = function predicateUrlSafe(key) {
	let match = key.match(/^(.+)_URLSAFE$/);
	if (match) {
		return match[1];
	}
};

const decodeUrlSafe = function decodeUrlSafe(encodedValue) {
	return decodeURIComponent(encodedValue);
};

const encodeUrlSafe = function encodeUrlSafe(value) {
	return encodeURIComponent(value);
};

const mappingUrlSafe = {
	predicate: predicateUrlSafe,
	decode: decodeUrlSafe,
};

module.exports = {
	predicate: predicateUrlSafe,
	decode: decodeUrlSafe,
	encode: encodeUrlSafe,
	mapping: mappingUrlSafe,
};
