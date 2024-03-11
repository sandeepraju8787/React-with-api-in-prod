import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
    },
    {
      id: 2,
      name: "table glass",
      price: 300,
    },
    {
      id: 3,
      name: "table plastic",
      price: 400,
    },
    {
      id: 4,
      name: "table metal",
      price: 500,
    },
    {
      id: 5,
      name: "table acrylic",
      price: 600,
    },
  ];

  // http://localhost:3000/api/products?search=metal
  // or  // http://localhost:3000/api/products?q=metal
  //the filter is also known as query parameters

  if (req.query.search) {
    console.log(req.query.search);
    const filteredProducts = products.filter((product) => {
      return product.name.includes(req.query.search);
    });
    res.send(filteredProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
