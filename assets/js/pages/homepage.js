/**
 * Created by nicholase on 19/01/16.
 */
  $(function(){
var lock = new Auth0Lock('Te51IapTbN96hBOWs6neimnMNhUDmFtb', 'enicky.eu.auth0.com');


function signin() {
  $('.btn-login').on('click', function(e){
    e.preventDefault();
    lock.show(function(err, profile, token){
      if (err) {
        // Error callback
        alert('There was an error');
      } else {
        // Success callback
        var p = $('.getting-started').find('p');
        if(p != null){
          p.text('Username : '+ profile.name + ' email : ' + profile.email);
        }
        // Save the JWT token.
        localStorage.setItem('userToken', token);

        // Save the profile
        userProfile = profile;
      }
    })
  })

}

    signin();
  })
