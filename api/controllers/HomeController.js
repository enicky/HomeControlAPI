/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
    pubnub.whoIsThere(pubnub.adminChannelName, function(m){
      var model = {
        uuids : m.uuids
      };
      res.view('./auth/dashboard/dashboard', model);
    });

  }
};

