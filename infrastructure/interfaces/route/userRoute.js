'use strict';

const UsersController = require('../Controllers/controllerUser');

module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/users',
        handler: UsersController.findUsers,
        options: {
          description: 'List all users',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/usersFirstName',
        handler: UsersController.findUsersByFirstName,
        options: {
          description: 'List all users with FirstName',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/users',
        handler: UsersController.createUser,
        options: {
          description: 'Create a user',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/users/{id}',
        handler: UsersController.getUser,
        options: {
          description: 'Get a user by its {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/users/{id}',
        handler: UsersController.deleteUser,
        options: {
          description: 'Delete a user',
          tags: ['api'],
        },
      },
    ]);
  }
};