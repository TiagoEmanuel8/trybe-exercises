const changeUserStatus = (userArray, userId, status) => {
  const myUser = userArray.find(({id}) => id == userId)

  if(!myUser) return null;

  myUser.isActive = status;

  return myUser;
};

module.exports = changeUserStatus;