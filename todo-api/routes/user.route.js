const express = require('express');
let userService = require('../services/user.service');
let authMiddleware = require('../middleware/auth.middleware');

const PERMISSION = {
  ADMIN: 1,
  NORMAL: 0
}

function userRouteModule() {

  let router = express.Router()
  // change access of user to admin
  router.post('/changeaccess',
    [authMiddleware.validJWTNeeded,
    authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
    userService.updateAccess]);
  /// register user
  /**
   * - authentication token is available or not? 
   * - check is validate auth token
   * - check wether user is having access = 1 - admin 0 - normal
   * - load all users and return back
  */
  router.get('/allusers',[
    authMiddleware.validJWTNeeded,
    authMiddleware.minimumPermissionLevelRequired(PERMISSION.ADMIN),
    userService.loadAlluser
  ]);

  // TO register new user

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
   * 
   *  - check wether the user with provided email is exist in system
   *  - check the password proveded is valid or not.
   *  - generate the token so that user can refer to get other resouces.
   * 
  */

  router.post('/login',[
    authMiddleware.isValidPassword,
    userService.generateToken
  ])

  return router;
}

module.exports = userRouteModule;


