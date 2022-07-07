import express from "express";
import { randomUUID } from "crypto";
import fs from "fs";

const app = express();

app.use(express.json());

let products = [];

fs.readFile("products.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data);
  }
});

/*
 * POST => inserir dados
 * GET => buscar dados
 * PUT => alterar dados
 * DELETE => apagar dados
 */

/*
 * Body => usar body sempre que quiser enviar dados para aplicação
 * Params => /product/123213
 * Query => /product?id=23123&value=43234
 */

app.post("/products", (request, response) => {
  const { name, price } = request.body;

  const product = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(product);

  productFile();

  return response.json(product);
});

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const product = products.find((product) => product.id === id);

  return response.json(product);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  productFile();

  return response.json({ message: "Produto alterado com sucesso" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  productFile();

  return response.json({ message: "Produto removido com sucesso" });
});

function productFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Novo produto adicionado");
    }
  });
}

app.listen(3001, () => console.log("Servidor Express e nodemon okay"));
