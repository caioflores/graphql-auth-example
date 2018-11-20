const { User } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: async (obj, args, context, info) => User.signUp(args),
  },
  Query: {
    user: async (obj, { id }, { auth }, info) => {
      if (User.hasPermission(auth)) {
        return User.findById(id);
      }
      return null;
    },
    login: async (obj, args, context, info) => User.login(args),
  },
};
