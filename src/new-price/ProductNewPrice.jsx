import React from "react";
import { StyledPrice } from "./styled";

export default function ProductNewPrice({ value, className }) {
  return <StyledPrice className={className}> {value} руб. </StyledPrice>;
}
