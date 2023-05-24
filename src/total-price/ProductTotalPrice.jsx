import ProductNewPrice from "/src/new-price/ProductNewPrice";
import ProductOldPrice from "/src/old-price/ProductOldPrice";
import React from "react";

export default function ProductTotalPrice({ price, oldPrice }) {
  const showOldPrice = oldPrice && price < oldPrice;

  return (
    <React.Fragment>
      {showOldPrice && <ProductOldPrice value={oldPrice} />}
      <ProductNewPrice value={price} />
      {showOldPrice && (
        <p>
          {" "}
          Скидка:
          {(1 - price / oldPrice).toFixed(2) * 100} %
        </p>
      )}
    </React.Fragment>
  );
}
