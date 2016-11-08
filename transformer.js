'use strict';

const Transform = require('stream').Transform;

class RequestTransformer extends Transform {
  constructor(options, dictionary) {
    super(options);
    this.dictionary = dictionary;
  }

  _transform(chunk, encoding, callback) {
    const input = chunk.toString();
    const randomWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    callback(null, `${input} ${randomWord}`);
  }

  _flush(callback) {
    callback();
  }
}

module.exports = RequestTransformer;
