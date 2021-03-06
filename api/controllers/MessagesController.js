/**
 * MessagesController
 *
 * @description :: Server-side logic for managing Messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
    pubnub.whoIsThere(pubnub.adminChannelName, function(m){
      var messagesModel = {
        uuids : m.uuids
      }
      return res.render('./auth/messages/index', messagesModel);
    });

  }
};

