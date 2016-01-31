/**
 * Created by nicholase on 17/01/16.
 */
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

module.exports = function(req, accessToken, refreshToken, profile, next) {

  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user

  var rest =require('restler');
  var query = {
    identifier : profile.id,
    protocol : 'auth0',
    tokens : { accessToken : accessToken}
  };
  sails.log('debug','accesstoken : ' + accessToken);
  if(refreshToken !== undefined){
    query.tokens.refreshToken = refreshToken;
  }
  var data = {
    client_id : 'Te51IapTbN96hBOWs6neimnMNhUDmFtb',
    redirect_uri:'http://iotservice.gitlab.be:1337/auth/auth0/callback',
    client_secret : 'MuhoBPjFHTen0gcU074s8RVap0UloJxIwn1UDLDytX7672JocAfBsLrCy1jkoTPM',
    code : accessToken,
    grant_type:'authorization_code'

  };
  var url = 'https://enicky.eu.auth0.com/oauth/token';
  var dataString = 'client_id=' + data.client_id + '&redirect_uri=' + data.redirect_uri + '&client_secret=' + data.client_secret + '&code='+data.code+'&grant_type=' + data.grant_type;

  var dataToTest = 'client_id=vvQNfAbCbDRhnP8oCnZv4vIGWyuCbSa4&username=ne%40cegeka.be&password=Aveve2008&grant_type=password&scope=openid&connection=Username-Password-Authentication';
  var urlToTest = 'https://nicky.auth0.com/oauth/ro';
  console.log('posting : ', data);
  //console.log('rest :', rest);
  var needle = require('needle');
  needle.post(url,dataString, function(err, response){
    sails.log('debug','respo : ', response.body);
    sails.log('debug','err : ', err);
  });
  passport.connect(req, query, profile, next);
  console.log('finished ... ');
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
