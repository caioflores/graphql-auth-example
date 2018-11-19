const { User } = require('../../models'); 

module.exports = {
  Query: {
    user: async (obj, args, context, info) => User.findOne(),
  },
};
