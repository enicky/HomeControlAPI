/**
 * Created by nicholase on 20/01/16.
 */
var pubnub = require("pubnub")({
  ssl           : true,  // <- enable TLS Tunneling over TCP
  publish_key   : "pub-c-9f39a037-5a14-4248-bab8-b594254acd19",
  subscribe_key : "sub-c-a4ef82ba-9688-11e5-b53d-0619f8945a4f",
  uuid : 'console_app'
});



module.exports = {
  channelName : 'Channel-dx9b182es',
  adminChannelName : 'CHANNEL_ADMIN',
  initializePubNub : function(options){
    pubnub.subscribe({
      channel : sails.services.pubnub.adminChannelName,

      callback : function(message){
        sails.log('debug',' > ',  message);
      },
      presence: function(m){console.log(' presence : ', m)},
      message: function(m){console.log(' message : ', m)}
    });
  /*  pubnub.here_now({
      channel : sails.services.pubnub.channelName,
      callback : function(m){console.log(' here_now : ', m)}
    })*/
  },
  whoIsThere : function(channelName, cb){
    pubnub.here_now({
      channel: channelName,
      callback : function(m){
        sails.log('debug','Here now response : ', m);
        return cb(m);
      }
    })
  },
  unsubscribe : function(cb){
    sails.log('debug','Unsubscribing ... ');
    pubnub.unsubscribe({
      channel : sails.services.pubnub.channelName
    }, function(){
      console.log('done sleep ... call cb() ');
      cb();
    });
    sails.log('debug', 'Finished unsubscribing ... ');


  }
};
