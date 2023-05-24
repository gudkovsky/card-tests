import styled from "styled-components";

import { P, H1 } from "/src/tags";

export const Titles = styled.div`
  display: inline-flex;
  flex-direction: row;
  background-color: #ddd;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.current ? "tomato" : "none")};
`;

export const TabTitle = styled(H1)`
  color: ${(props) => (props.current ? "white" : "tomato")};
`;

export const TabContent = styled(P)`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.indent};
  line-height: 1.5;
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
`;
