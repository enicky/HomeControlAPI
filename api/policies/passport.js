/**
 * Passport Middleware
 *
 * Policy for Sails that initializes Passport.js and as well as its built-in
 * session support.
 *
 * In a typical web application, the credentials used to authenticate a user
 * will only be transmitted during the login request. If authentication
 * succeeds, a session will be established and maintained via a cookie set in
 * the user's browser.
 *
 * Each subsequent request will not contain credentials, but rather the unique
 * cookie that identifies the session. In order to support login sessions,
 * Passport will serialize and deserialize user instances to and from the
 * session.
 *
 * For more information on the Passport.js middleware, check out:
 * http://passportjs.org/guide/configure/
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
module.exports = function (req, res, next) {
  // Initialize Passport
  passport.initialize()(req, res, function () {
    sails.log('debug','passport initialize performed');
    // Use the built-in sessions
    passport.session()(req, res, function () {
      sails.log('debug','passport session performed ... ');
      // Make the user available throughout the frontend
      if(req.user != null){

        var token = jwToken.issue({id : req.user.id });
        sails.log('debug','jwtToken : ', token);
      }
      res.locals.user = req.user;

      next();
    });
  });
};
