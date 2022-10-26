import { Sequelize, DataTypes, where} from "sequelize";
import fs from "fs";
const sequelize = new Sequelize('sqlite::\\CSE5234\\database\\production.db');

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
  amount: DataTypes.INTEGER,
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


// Creates or updates the tables
Product.sync();
Order.sync();

// used to create all the data
// fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
//   products = JSON.parse(data);
//   for( let p of products) {
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
  const product = await Product.findOne({where: {id: productId}});
  return product;
}

// Get inventory by product id 
export async function getProductInventoryAsync(productId) {
  const inventory = await Product.findOne({
    where: {id: productId},
  attributes: ['inventory']})
  return inventory;
}

//example for using async function, there is no way around this, we need to implement this way
// let products = getAllProductsAsync();
// products.then(result => {
//   console.log(JSON.stringify(result));
// });
