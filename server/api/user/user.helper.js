function buildUserResponse(user) {
  return {
    user: {
      name: user.name,
      surname: user.surname,
      email: user.email,
    },
    token: user.token,
  };
}

module.exports = {
  buildUserResponse,
};
