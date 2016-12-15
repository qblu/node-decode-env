# decode-env

A micro-library for decoding environment variables by name.

## What?

This library provides a function which will decode specific environment variables, according to name patterns, into usable plaintext environment variables. By default, it will base64-decode all environment variables named like `<FOO>_BASE64` into plaintext variables named like `<FOO>`. If the variables already exist, they will not be overwritten.

## Why?

AWS Lambda environment variables may not contain commas. Certain types of secret strings commonly passed via environment variables, such as MongoDB connect strings, may contain commas. AWS CloudFormation templates provide an intrinsic function `Fn::Base64` for base64-encoding values. To work around the limitation of Lambda, we may for example encode a MongoDB connect string into environment variable `MONGO_URI_BASE64` in our CloudFormation template and run the `decodeEnv` function once at the beginning of our Lambda handler script to decode the value into another variable named `MONGO_URI`, as opposed to manually decoding it in every place that we use the value.

## How?

For the base64 use case, simply require the module and run the `decodeEnv` function:

```
const decodeEnv = require('decode-env');
decodeEnv();
```

For more complex uses, including supporting other decoders, see the [examples](examples/).
