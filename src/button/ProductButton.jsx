import styled from "styled-components";

import { Button as ElementButton } from "/src/tags";

const buttonOptions = {
  large: {
    padding: "5px 10px",
    minWidth: "100px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px"
  },
  medium: {
    padding: "5px 5px",
    minWidth: "50px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "5px"
  },
  small: {
    padding: "2px 2px",
    minWidth: "20px",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
    borderRadius: "2px"
  }
};

const Button = styled(ElementButton)`
  background-color: lightgrey;
  transition: width 0.5s, box-shadow 0.1s, background-color 0.9s;
  ${(props) => {
    const theme = buttonOptions[props.size || "medium"];

    return `
    padding: ${theme.padding};
    min-width: ${theme.minWidth};
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    `;
  }}
  &:hover {
    background-color: lightsalmon;
  }
  &:active {
    opacity: 80%;
  }
`;
export default Button;
