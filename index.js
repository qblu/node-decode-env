'use strict';

module.exports = function decodeEnv(mappings, options) {
	if (!mappings) {
		mappings = [
			require('./decoders/base64').mapping,
		];
	}

	if (!options) {
		options = {};
	}

	if (typeof options.overwrite === 'undefined') {
		options.overwrite = false;
	}

	Object.keys(process.env).forEach(key => {
		for (let i = 0; i < mappings.length; ++i) {
			let decodedKey = mappings[i].predicate(key);
			if (decodedKey) {
				if (options.overwrite || typeof process.env[decodedKey] === 'undefined') {
					process.env[decodedKey] = mappings[i].decode(process.env[key]);
				}
				break;
			}
		}
	});
};
