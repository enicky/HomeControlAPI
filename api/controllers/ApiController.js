/**
 * ApiController
 *
 * @description :: Server-side logic for managing Apis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index : function(req, res){
    sails.log('debug','ApiRequest ... index');
    var returnObject = {result : true};
    sails.log('res : ', req.user);
    return res.json(returnObject);
  }
};

