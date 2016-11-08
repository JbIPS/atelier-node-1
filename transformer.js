'use strict';

const Transform = require('stream').Transform;

class RequestTransformer extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    callback(null, chunk);
  }

  _flush(callback) {
    callback();
  }
}

module.exports = RequestTransformer;
