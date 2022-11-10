import { Sequelize, DataTypes, where } from "sequelize";
import fs from "fs";
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/production.db'
});

const sequelize2 = new Sequelize({
  dialect: 'sqlite',
  storage: '../database/orderManagement.db'
});

const Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  price: DataTypes.REAL,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  inventory: DataTypes.INTEGER
});


const Order = sequelize2.define('Order', {
  total: DataTypes.NUMBER,
  confirmationNumber: DataTypes.INTEGER
});

const ShippingInfo = sequelize2.define('ShippingInfo', {
  fullName: DataTypes.STRING,
  street: DataTypes.STRING,
  city: DataTypes.STRING,
  state: DataTypes.STRING,
  zipCode: DataTypes.INTEGER
});

const PaymentInfo = sequelize2.define('PaymentInfo', {
  cardNumber: DataTypes.INTEGER,
  cvv: DataTypes.INTEGER,
  expYear: DataTypes.INTEGER,
  expMonth: DataTypes.INTEGER
});

const OrderedProduct = sequelize2.define('OrderedProduct', {
  count: DataTypes.INTEGER
});

ShippingInfo.hasOne(Order, {
  foreignKey: {
    name: "shippingInfoId",
    allowNull: false
  }
});
PaymentInfo.hasOne(Order, {
  foreignKey: {
    name: "paymentInfoId",
    allowNull: false
  }
});

Order.hasMany(OrderedProduct, {
  foreignKey: {
    name: "orderId",
    allowNull: false
  }
});

Order.hasMany(OrderedProduct, {
  foreignKey: {
    name: "productId",
    allowNull: false
  }
})


// Creates or updates the tables
Product.sync();
Order.sync();
ShippingInfo.sync();
PaymentInfo.sync();
OrderedProduct.sync();

//used to create all the data
fs.readFile("products.json", 'utf8', function (err, data) {
  let products = JSON.parse(data);
  for (let p of products) {
    Product.create(p);
  }
});

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

export async function createOrder(amount, fullName, street, city, state, zipCode, cardNumber, cvv, expYear, expMonth, confirmationNumber) {
  const shippingInfo = await ShippingInfo.create({
    fullName: fullName,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode
  });
  const paymentInfo = await PaymentInfo.create({
    cardNumber: cardNumber,
    cvv: cvv,
    expYear: expYear,
    expMonth: expMonth,
  });
  PaymentInfo.sync();
  ShippingInfo.sync();
  const order = await Order.create({
    total: amount,
    paymentInfoId: paymentInfo.id,
    shippingInfoId: shippingInfo.id,
    confirmationNumber: confirmationNumber
  });
  Order.sync();
  return order;
}

export async function createOrderedProducts(orderId, productId, count) {
  OrderedProduct.create({
    orderId: orderId,
    productId: productId,
    count: count
  });
}

//example for using async function, there is no way around this, we need to implement this way
// let products = getAllProductsAsync();
// products.then(result => {
//   console.log(JSON.stringify(result));
// });
