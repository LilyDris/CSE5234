import { Sequelize, DataTypes, where } from "sequelize";
import fs from "fs";
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/production.db'
});

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.REAL,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  inventory: DataTypes.INTEGER
});


const Order = sequelize.define('Order', {
  count: DataTypes.NUMBER,
  total: DataTypes.NUMBER,
  fullName: DataTypes.STRING,
  street: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zipCode: DataTypes.INTEGER,
  cardNumber: DataTypes.INTEGER,
  cvv: DataTypes.INTEGER,
  expYear: DataTypes.INTEGER,
  expMonth: DataTypes.INTEGER
});

Product.hasMany(Order, {
  foreignKey: {
    name: "productId",
    allowNull: false
  }

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

export async function updateInventory(product, count) {
  product.inventory = count;
  await product.save({ fields: ["inventory"] });
}

// Get Product by id
export async function getProductByIdAsync(productId) {
  const product = await Product.findOne({ where: { id: productId } });
  return product;
}

// Get inventory by product id
export async function getProductInventoryAsync(productId) {
  const inventory = await Product.findOne({
    where: { id: productId },
    attributes: ['inventory']
  });
  return inventory;
}

export async function createOrder(productId, count, amount, fullName, street, city, state, zipCode, cardNumber, cvv, expYear, expMonth) {
  const order = await Order.create({
    count: count,
    productId: productId,
    total: amount,
    fullName: fullName,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    cardNumber: cardNumber,
    cvv: cvv,
    expYear: expYear,
    expMonth: expMonth
  });
  Order.sync();
}

//example for using async function, there is no way around this, we need to implement this way
// let products = getAllProductsAsync();
// products.then(result => {
//   console.log(JSON.stringify(result));
// });
