import React from "react";

export default function Popularity({ value }) {
  let result = null;

  if (value === 0) {
    result = <span> Будь первым покупателем и получи промокод!</span>;
  }
  if (value >= 3) {
    result = <span style={{ color: "green" }}> Это популярный товар</span>;
  }
  return result;
}
