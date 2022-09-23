const userSchema = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: false,
        autoIncrement: true,
      },
      displayName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      }
    }, {
      timestamps: false,
      underscored: true,
    }
  )
  return user;
}

module.exports = userSchema;