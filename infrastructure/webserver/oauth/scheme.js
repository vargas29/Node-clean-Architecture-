'use strict';

const AuthorizationController = require('../../../infrastructure/interfaces/Controllers/AuthorizationController');

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};