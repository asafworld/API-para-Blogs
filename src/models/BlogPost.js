const blogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
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
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        allowNull: false,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      }
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: 'published',
      updatedAt: 'updated',
    }
  );
  
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
}

module.exports = blogPostSchema;