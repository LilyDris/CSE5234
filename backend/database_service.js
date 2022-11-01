import { Sequelize, DataTypes, where } from "sequelize";
import fs from "fs";
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/production.db'
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: DataTypes.STRING,
  price: DataTypes.REAL,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  inventory: DataTypes.INTEGER
});

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Product,
      key: 'id'
    }
  },
  count: DataTypes.INTEGER
});

// Creates or updates the tables
Product.sync();
Order.sync();

//used to create all the data
// fs.readFile("products.json", 'utf8', function (err, data) {
//   let products = JSON.parse(data);
//   for (let p of products) {
//     Product.create(p);
//   }
// });

// Get all products in the database
export async function getAllProductsAsync() {
  const products = await Product.findAll();
  return products;
}

// Get Product by id
export async function getProductByIdAsync(productId) {
  const product = await Product.findOne({ where: { id: productId } });
  return product;
}

//example for using async function, there is no way around this, we need to implement this way
// let products = getAllProductsAsync();
// products.then(result => {
//   console.log(JSON.stringify(result));
// });
