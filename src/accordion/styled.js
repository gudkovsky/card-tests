import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: lightgray;
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  row-gap: 10px;
  height: 0px;
  overflow: hidden;
  transition: 0.3s;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  padding-bottom: 30px;
`;

export const TitleButton = styled.button`
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  cursor: pointer;
  box-shadow: none;
  display: block;
  background-color: #ccc;
  font-size: 18px;
`;

export const TitleText = styled.h2`
  font-weight: 700;
  color: black;
  margin: 0;
  padding: 0;
  &:hover {
    opacity: 80%;
  }
`;
