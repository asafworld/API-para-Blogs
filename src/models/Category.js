const categorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      } 
    },
    {
      timestamps: false,
      underscored: true,
    }
  )

  return Category;
};

module.exports = categorySchema;