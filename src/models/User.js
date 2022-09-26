const userSchema = (sequelize, DataTypes) => {
  const User = sequelize.define(
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
  );

    // User.associate = (models) => {
    //   User.hasMany(models.BlogPost,
    //     { foreignKey: 'userId', as: 'blog_posts' });
    // };

  return User;
}

module.exports = userSchema;