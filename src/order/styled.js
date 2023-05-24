import styled from "styled-components";
import Button from "/src/button/ProductButton";

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  background-color: orange;
  padding: 20px;
  color: white;
  &:disabled {
    background-color: gray;
  }
`;
