const UserModel = require('../models/User');

// essa função aqui é o princípio do O, onde cada vez que precisar criar uma nova categoria de usuario eu só acrescento um campo no array

const isRoleValid = (role, validRoles) => {
  return validRoles.includes(role);
};

const isEmailValid = (email) => {
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
  return passwordRegex.test(password);
};

const isUserValid ({ email, password, role }, validRoles) => 
  isEmailValid(email) &&
  isPasswordValid(password) &&
  isRoleValid(role, validRoles);

const createUser = async (user, validRoles) => {
  const { username, email, password, role } = user;

  if (!isUserValid(user, validRoles)) {
    return {
      ok: false,
      error: {
        code: 'invalid_data',
        message: 'User data is not valid'
      }
    }
  }
  
  return UserModel.create(username, email, password, role)
    .then(result => {
      return {
        ok: true,
        result
      }
    })
    .catch(err => {
      return {
        ok: false,
        error: {
          code: 'internal_error',
          message: err.message
        }
      }
    });
}

const getUserService = (validRoles) => ({
  createUser: function (user) {
    return createUser(user, validRoles);
  }
})

module.exports = {
  getUserService
};
