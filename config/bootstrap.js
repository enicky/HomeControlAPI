/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  sails.services.passport.loadStrategies();
  sails.services.pubnub.initializePubNub();

  process.on('uncaughtException', function (er) {
    sails.log('error','uncaughtException');
    sails.log('debug',er);
    process.exit(1)
  })
  process.on('SIGTERM', function() {
    console.log('sigterm ... ');
  });
  process.on('exit', function(){
    sails.log('debug','Exit has been called ... ');
    sails.services.pubnub.unsubscribe(function(){
      console.log('call exit ... ');
      process.exit();
    });
    sails.log('debug','Post unsubscribe stuff ... ');

  })

  process.on('SIGINT', function() {
    console.log('sigint ... ');

    console.log('sigint end ... ');
  });


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
