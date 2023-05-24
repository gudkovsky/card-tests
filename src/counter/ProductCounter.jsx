import React, { useState } from "react";
import Button from "/src/button/ProductButton";
import { CounterNumber } from "./styled";

export default function ProductCounter({ value, onChange, minValue }) {
  const isDisabled = value === minValue;
  return (
    <React.Fragment>
      <Button
        disabled={isDisabled}
        type="button"
        size="small"
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
      <CounterNumber
        value={value}
        size={value.toString().length}
        onChange={(e) => {
          const typedValue = e.target.value;
          onChange(typedValue < minValue ? minValue : typedValue);
        }}
      ></CounterNumber>
      <Button
        type="button"
        size="small"
        onClick={() => onChange && onChange(value + 1)}
      >
        +
      </Button>
    </React.Fragment>
  );
}
