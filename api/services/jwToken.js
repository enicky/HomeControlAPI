/**
 * jwToken
 *
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var
  jwt = require('jsonwebtoken'),
  tokenSecret = "secretissecet",
  expressjwt = require('express-jwt');

var secret = 'Rx17-06Ijndg5bu-EgjjNanDBgCNE7pCKl-fjFdAf4fd03TvwXHBow7qF5rFI2Tn';
var audience = 'vvQNfAbCbDRhnP8oCnZv4vIGWyuCbSa4';

module.exports.jwtCheck = expressjwt({
  secret : new Buffer(secret, 'base64'),
  audience : audience
});

// Generates a token from supplied payload
module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    secret, // Token Secret that we sign it with
    {
      audience : audience,
      expiresIn : 5*60 // Token Expire time
    }
  );
};

// Verifies token on a request
module.exports.verify = function(token, callback) {
  return jwt.verify(
    token, // The token to be verified
    tokenSecret, // Same token we used to sign
    {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    callback //Pass errors or decoded token to callback
  );
};
