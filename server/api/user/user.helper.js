function buildUserResponse(user) {
  return {
    user: {
      _id: user._id,
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
