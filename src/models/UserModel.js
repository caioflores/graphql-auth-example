module.exports = function UserModel(sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt'
    }
  );
  return User;
};
