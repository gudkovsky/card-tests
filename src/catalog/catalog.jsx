import ProductImage from "/src/image/ProductImage";
import React from "react";

import { List, ListItem, StyledLink } from "./styled";

export default function Catalog({ products }) {
  return (
    <>
      <h3>Каталог</h3>
      <List>
        {products &&
          products.length &&
          products.map((product) => (
            <ListItem key={product.code}>
              <StyledLink to={`/product/${product.code}`}>
                <h3>{product.name}</h3>
                <ProductImage src={product.images[0]} />
                <div>Цена: {product.newPrice}</div>
              </StyledLink>
            </ListItem>
          ))}
      </List>
    </>
  );
}
