'use strict';

module.exports = ({ userRepository }) => {
  return userRepository.getByFirstName();
};
