/**
 * Created by nicholase on 17/01/16.
 */
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

module.exports = function(req, accessToken, refreshToken, profile, next) {

  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user


  var query = {
    identifier : profile.id,
    protocol : 'auth0',
    tokens : { accessToken : accessToken}
  };
  if(refreshToken !== undefined){
    query.tokens.refreshToken = refreshToken;
  }

  sails.log('debug','auth0 protocol : ', query);
  return passport.connect(req, query, profile, next);

};


/*function (req, accessToken, refreshToken, profile, next) {
  var query    = {
    identifier : profile.id
    , protocol   : 'oauth2'
    , tokens     : { accessToken: accessToken }
  };

  if (refreshToken !== undefined) {
    query.tokens.refreshToken = refreshToken;
  }

  passport.connect(req, query, profile, next);
};*/
