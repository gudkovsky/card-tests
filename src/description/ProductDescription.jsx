import React from "react";
import Button from "/src/button/ProductButton";

export default function ProductDescription({
  description,
  onShowMore,
  isShowMore
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <h3>Описание</h3>
      {description}
      <Button onClick={onShowMore}>
        {isShowMore ? "Показать еще" : "Скрыть"}
      </Button>
    </div>
  );
}
