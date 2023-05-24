// import { createRoot } from "react-dom/client";
import React from "react";
import { products } from "../data";
import ProductCard from "/src/card/ProductCard";
import Catalog from "/src/catalog/catalog";
import Layout from "/src/layout/layout";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function ProductOf404({ products }) {
  const id = useParams();
  // console.log(id);
  const product = products.find((product) => product.code.toString() === id.id);
  return product ? (
    <ProductCard data={product} />
  ) : (
    <h1>Такого товара нет!!!!!!!!!!!!!! </h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog products={products} />}></Route>
          <Route path="product">
            <Route path=":id" element={<ProductOf404 products={products} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
