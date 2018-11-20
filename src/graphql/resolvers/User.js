const { User } = module.require('../../models');

module.exports = {
  Mutation: {
    signUp: async (obj, args, context, info) => User.signUp(args),
  },
  Query: {
    user: async (obj, args, context, info) => User.findOne(args),
    login: async (obj, args, context, info) => User.login(args),
  },
};
