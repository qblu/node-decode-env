'use strict';

const decodeEnv = require('../index');

const base64 = require('../decoders/base64');
const rot13 = require('../decoders/rot13');
const urlsafe = require('../decoders/urlsafe');

const mappings = [
	base64.mapping,
	rot13.mapping,
	urlsafe.mapping,
];

const msg = 'Hello, world!';

const envVars = [
	'DECODE_ENV_TEST1_BASE64',
	'DECODE_ENV_TEST2_ROT13',
	'DECODE_ENV_TEST3_URLSAFE',
	'DECODE_ENV_TEST1',
	'DECODE_ENV_TEST2',
	'DECODE_ENV_TEST3',
];

process.env.DECODE_ENV_TEST1_BASE64 = base64.encode(msg);
process.env.DECODE_ENV_TEST2_ROT13 = rot13.encode(msg);
process.env.DECODE_ENV_TEST3_URLSAFE = urlsafe.encode(msg);

console.log('Before decode:');
envVars.forEach(envVar => {
	console.log(`process.env.${envVar} = ${process.env[envVar]}`);
});

decodeEnv(mappings);

console.log('\nAfter decode:');
envVars.forEach(envVar => {
	console.log(`process.env.${envVar} = ${process.env[envVar]}`);
});
