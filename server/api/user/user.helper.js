function buildUserResponse(user) {
  return {
    user: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      likedRecipesCount: user.likedRecipesCount,
      createdRecipesCount: user.createdRecipesCount,
    },
    token: user.token,
  };
}

module.exports = {
  buildUserResponse,
};
