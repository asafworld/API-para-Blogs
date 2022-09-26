const blogPostSchema = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPosts',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: false,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'published'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated'
      }
    },
    {
      timestamps: true,
      underscored: true,
    }
  )
  
  // BlogPosts.associate = (models) => {
  //   BlogPosts.belongsTo(models.User,
  //     { foreignKey: 'userId', as: 'users' });
  // };

  return BlogPosts;
}

module.exports = blogPostSchema;