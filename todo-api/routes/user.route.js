const express = require('express');
let userService = require('../services/user.service');
let authMiddleware = require('../middleware/auth.middleware');

function userRouteModule() {

  let router = express.Router()
  // change access of user to admin
  router.post('/changeaccess',userService.updateAccess);
  /// register user
  /**
   * - authentication token is available or not? 
   * - check is validate auth token
   * - check wether user is having access = 1 - admin 0 - normal
   * - load all users and return back
  */
  router.post('/allusers',[
    authMiddleware.isAdminUser,
    userService.loadAlluser
  ]);
  router.post('/register',userService.createNewUser);
  // login
  /**
   *  1- should validate the body payload
   *  2- should validate the email strength
   *  3- should validate the passsword strength
   *  4- check wether user with provided email is in db
   *  5- get password from req and compare it with password got in above query by decrypting it.
   *  6- generate the jwt token for login 
   */

  /* Please go through the blog
    https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens
  */

  /**
   * please go through the login 
   * https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
  */

  router.post('/login',[
    authMiddleware.isValidPassword,
    userService.loginUser])

  return router;
}

module.exports = userRouteModule;


