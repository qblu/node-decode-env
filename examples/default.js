'use strict';

const decodeEnv = require('../index');
const base64 = require('../decoders/base64');

const msg = 'Hello, world!';

const envVars = [
	'DECODE_ENV_TEST1_BASE64',
	'DECODE_ENV_TEST2_BASE64',
	'DECODE_ENV_TEST1',
	'DECODE_ENV_TEST2',
];

process.env.DECODE_ENV_TEST1_BASE64 = base64.encode(msg);
process.env.DECODE_ENV_TEST2_BASE64 = base64.encode(msg);

process.env.DECODE_ENV_TEST2 = 'Don\'t overwrite this';


console.log('Before decode:');
envVars.forEach(envVar => {
	console.log(`process.env.${envVar} = ${process.env[envVar]}`);
});

decodeEnv();

console.log('\nAfter decode:');
envVars.forEach(envVar => {
	console.log(`process.env.${envVar} = ${process.env[envVar]}`);
});
