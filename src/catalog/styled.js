import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: row;

  column-gap: 50px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline-flex;
  row-gap: 20px;
  flex-direction: column;
  width: auto;
  border: 1px solid #333;
  padding: 20px;
`;

export const StyledLink = styled(Link)`
  color: #333;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
`;
