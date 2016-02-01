/**
* Messages.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    uuid : {type : 'string'},
    message : {type : 'string'},
    from : {type : 'string'}
  },
  afterCreate : function(newlyInsertedRecord, cb){
    pubnub.publishMessage({
      channel  : pubnub.adminChannelName,
      message  : { text : newlyInsertedRecord.message, target: newlyInsertedRecord.uuid }
    }, function(){
      return cb();
    });

  }
};

