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
        field: 'updated',
      }
    },
    {
      timestamps: false,
      underscored: true,
    }
  );
  
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return BlogPost;
}

module.exports = blogPostSchema;