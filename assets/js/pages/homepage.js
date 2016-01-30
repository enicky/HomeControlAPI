/**
 * Created by nicholase on 19/01/16.
 */
var lock = new Auth0Lock('Te51IapTbN96hBOWs6neimnMNhUDmFtb', 'enicky.eu.auth0.com');


function signin() {
  lock.showSignin(/*{
    callbackURL: 'http://localhost:1337/auth/auth0/callback'
    , responseType: 'code'
    , authParams: {
      scope: 'openid profile'
    }
  },*/function(err, profile, token){
    console.log('err : ', err);
    console.log('profile : ', profile);
    console.log('token : ', token);
  });
}
