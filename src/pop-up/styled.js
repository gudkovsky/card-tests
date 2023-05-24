import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 20%;
  left: calc(50% - (600px / 2));
  padding: 20px;
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 10px;
  font-size: 28px;
  backdrop-filter: blur(4px);
  border: 1px solid #111;
`;

export const Header = styled.header`
  border-bottom: 1px solid #111;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h1`
  color: black;
  font-size: 40px;
`;

export const Close = styled.button`
  width: 40px;
  height: 40px;
  background-color: #111;
  color: white;
  border: 1px solid black;
  cursor: pointer;
`;
