'use strict';

const predicateRot13 = function predicateRot13(key) {
	let match = key.match(/^(.+)_ROT13$/);
	if (match) {
		return match[1];
	}
};

const decodeRot13 = function decodeRot13(encodedValue) {
	return encodedValue.replace(/[a-z]/gi, ch => {
		return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
			"NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(ch)
		);
	});
};

const encodeRot13 = decodeRot13;

const mappingRot13 = {
	predicate: predicateRot13,
	decode: decodeRot13,
};

module.exports = {
	predicate: predicateRot13,
	decode: decodeRot13,
	encode: encodeRot13,
	mapping: mappingRot13,
};
