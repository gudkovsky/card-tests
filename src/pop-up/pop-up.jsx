import React, { useEffect } from "react";

import { Header, Wrapper, Title, Close } from "./styled";

export default function Popup({ children, onClose, isShow }) {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return isShow ? (
    <Wrapper>
      <Header>
        <Title>Оформить заказ</Title>
        <Close onClick={onClose}>X</Close>
      </Header>
      {children}
    </Wrapper>
  ) : null;
}
