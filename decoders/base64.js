'use strict';

const predicateBase64 = function predicateBase64(key) {
	let match = key.match(/^(.+)_BASE64$/);
	if (match) {
		return match[1];
	}
};

const decodeBase64 = function decodeBase64(encodedValue) {
	return new Buffer(encodedValue, 'base64').toString();
};

const encodeBase64 = function encodeBase64(value) {
	return new Buffer(value).toString('base64');
};

const mappingBase64 = {
	predicate: predicateBase64,
	decode: decodeBase64,
};

module.exports = {
	predicate: predicateBase64,
	decode: decodeBase64,
	encode: encodeBase64,
	mapping: mappingBase64,
};
