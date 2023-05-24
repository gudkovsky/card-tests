import React, { useState } from "react";

import { Form, Label, StyledButton } from "./styled";

export default function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const isFormFilled = name && phone && email;

  return (
    <Form>
      <Label>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </Label>
      <Label>
        <input
          type="tel"
          placeholder="8 999 000 00 00"
          value={phone}
          onChange={(evt) => setPhone(evt.target.value)}
        />
      </Label>
      <Label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email@mail.com"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </Label>
      <StyledButton
        disabled={!isFormFilled}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, ваш заказ принят, дополнительная информация направлена на ${email}`
          );
        }}
      >
        Отправить
      </StyledButton>
    </Form>
  );
}
