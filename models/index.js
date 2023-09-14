// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations
Product.belongsTo(Category, {
  foreignKey: 'category_id', // This is the foreign key in the Product table
  onDelete: 'CASCADE', // Cascade delete if a category is deleted
});

Category.hasMany(Product, {
  foreignKey: 'category_id', // This should match the foreign key in the Product table
});

Product.belongsToMany(Tag, {
  through: ProductTag, // The through model that connects Products and Tags
  foreignKey: 'product_id', // Foreign key in the ProductTag table
});

Tag.belongsToMany(Product, {
  through: ProductTag, // The through model that connects Products and Tags
  foreignKey: 'tag_id', // Foreign key in the ProductTag table
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
