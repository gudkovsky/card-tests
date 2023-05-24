import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  ContentWrapper,
  TitleButton,
  TitleText,
  Content
} from "./styled";

export default function Accordion({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const openContent = useRef(null);

  useEffect(() => {
    setHeight(openContent.current.offsetHeight);
  }, [height, activeIndex, tabs]);

  return (
    <div>
      {tabs &&
        tabs.length &&
        tabs.map((tab, index) =>
          index === activeIndex ? (
            <Wrapper key={tab.title}>
              <TitleButton>
                <TitleText>{tab.title}</TitleText>
              </TitleButton>
              <ContentWrapper style={{ height }}>
                <Content ref={openContent}>{tab.content}</Content>
              </ContentWrapper>
            </Wrapper>
          ) : (
            <Wrapper key={tab.title}>
              <TitleButton onClick={() => setActiveIndex(index)}>
                <TitleText>{tab.title}</TitleText>
              </TitleButton>
              <ContentWrapper>
                <Content>{tab.content}</Content>
              </ContentWrapper>
            </Wrapper>
          )
        )}
    </div>
  );
}
