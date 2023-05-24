import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSlider = styled(Swiper)`
  width: 200px;
  height: 300px;
  margin: 30px;
  object-fit: contain;
`;

export const Image = styled.img`
  object-fit: contain;
`;

export const StyledButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.left ? "5px" : "auto")};
  right: ${(props) => (props.right ? "5px" : "auto")};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 1;
  padding: 0;
  cursor: pointer;
`;

export const SlyderWrapper = styled.div`
  position: relative;
  max-height: 400px;
  min-width: 300px;
`;
