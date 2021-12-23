const express = require("express");

const app = express();
const products = [
  {
    id: 1,
    title: "Handbag",
    price: 100,
  },
  {
    id: 2,
    title: "Shoes",
    price: 200,
  },
];
app.get("/products", (req, res) => {
  res.status(200).json({ data: products });
});
app.get("/", (req, res) => {
  res.send(`<h1>Server Started</h1>`);
});
app.get("/product/:id", (req, res) => {
  const { params } = req;
  const { id } = params;
  const product = products.filter((prod) => prod.id === parseInt(id));
  if (product.length > 0) {
    res.json({
      id: product[0].id,
      title: product[0].title,
      price: product[0].price,
    });
  } else {
    res.status(404).json({
      error: "something went wrong",
    });
  }
});
app.listen(4000, () => {
  console.log("server is started");
});

// MERN
// const fs = require("fs");
// const http = require("http");
// console.log(__dirname, __filename);
// fs.readFile(`${__dirname}/data.txt`, "utf-8", (err, data) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log(data);
//   }
// });

// const data = fs.readFileSync(`${__dirname}/data.txt`, "utf-8");
// console.log("print", data);

// fs.writeFile("name.txt", "I am 27 years old", (err, data) => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log(data);
//   }
// });

// const server = http.createServer((req, res) => {
//   console.log("req", req, res);
// });

// server.listen(8000, (req, res) => {
//   console.log("Our server is up and running", req, res);
// });
// GET -
// POST
// PUT
// DELETE
// PATCH
