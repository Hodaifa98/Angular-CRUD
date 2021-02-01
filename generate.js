const faker = require('faker');

let database = { products: []};

for (let i = 1; i<= 50; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://i.imgur.com/uftdNFe.png",
    quantity: faker.random.number()
  });
}

console.log(database);