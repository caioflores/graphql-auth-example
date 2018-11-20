const jwt = module.require('jsonwebtoken');
const User = module.require('../../models');

const messages = {
  UNAUTHORIZED: 'Unauthorized',
  INVALID_CREDS: 'Invalid credentials',
  DB_ERROR: 'Internal Database error',
};

const authTypes = {
  PUBLIC: 'public',
  PRIVATE: 'private',
};

const authenticate = async (resolve, token, ctx) => {
  const context = ctx;
  let jwtDecoded;

  try {
    jwtDecoded = jwt.verify(token, process.env.API_SECRET);
  } catch (err) {
    throw new Error(messages.INVALID_CREDS);
  }

  const params = {
    where: { id: jwtDecoded.userId },
  };

  await User.findOne(params).then(user => {
    if (!user) {
      throw new Error('User not found.');
    } else {
      context.auth = { type: authTypes.PRIVATE, user };
      resolve();
    }
  });
};

const auth = async (resolve, parent, args, ctx, info) => {
  const context = ctx;
  const token = ctx.request.get('Authorization') || args.Authorization;

  if (!token) {
    context.auth = { type: authTypes.PUBLIC };
    return resolve();
  }

  return authenticate(resolve, token, context);
};

module.exports = { Query: auth };
