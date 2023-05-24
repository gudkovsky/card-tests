import React, { useState } from "react";

import ProductArticle from "/src/article/ProductArticle";
import ProductCommentary from "/src/commentary/ProductCommentary";
import ProductCounter from "/src/counter/ProductCounter";
import ProductDelivery from "/src/delivery/ProductDelivery";
import ProductDescription from "/src/description/ProductDescription";
import ProductImage from "/src/image/ProductImage";
import ProductName from "/src/name/ProductName";
import Popularity from "/src/popularity/ProductPopularity";
import ProductRating from "/src/rating/ProductRating";
import ProductReviews from "/src/reviews/ProductReviews";
import ProductTotalPrice from "/src/total-price/ProductTotalPrice";
import Button from "/src/button/ProductButton";
import Tabs from "/src/tabs/tabs";
import { Div } from "./styled";
import Popup from "../pop-up/pop-up";
import Order from "../order/order";
import Accordion from "/src/accordion/Accordion";
import Slider from "../slider/Slider";

const divStyle = {
  display: "flex",
  flexDirection: "row",
  columnGap: "30px",
  marginBottom: "30px"
};

const MAX_TEXT_SIZE = 100;
const COMMENTS_COUNT = 2;

export default function ProductCard({ data, tabsAsAccordion }) {
  const [isShowAll, setShowAll] = useState(false);
  const [showComments, setShowComments] = useState(COMMENTS_COUNT);

  const tabs = [
    {
      title: "Описание",
      content: (
        <ProductDescription
          description={
            isShowAll
              ? data.description
              : data.description.slice(0, MAX_TEXT_SIZE)
          }
          onShowMore={() => setShowAll(!isShowAll)}
          isShowMore={!isShowAll}
        ></ProductDescription>
      )
    },
    {
      title: "Комментарии",
      content: (
        <ProductCommentary
          comments={data.comments.slice(0, showComments)}
          allCommentsLength={data.comments.length}
          onShowMore={() => setShowComments(showComments + COMMENTS_COUNT)}
        />
      )
    },
    {
      title: "Тест",
      content: <ProductCommentary comments={data.comments} />
    }
  ];
  function handleReloadClick() {
    window.location.reload();
  }
  const [count, setCount] = useState(1);
  const price = data.newPrice * count;
  const oldPrice = data.oldPrice * count;

  const [isPopupShown, showPopupHandler] = useState(false);

  return (
    <div>
      <ProductName name={data.name}></ProductName>
      <ProductArticle>{data.code}</ProductArticle>
      <div style={divStyle}>
        <div>
          <Slider images={data.images} />
        </div>
        <div className="text-details">
          <ProductRating value={data.rating}></ProductRating>
          <ProductReviews value={data.reviews}></ProductReviews>
          <p>
            Цена: <ProductTotalPrice price={price} oldPrice={oldPrice} />
          </p>
          <div>
            Количество:{" "}
            <ProductCounter value={count} onChange={setCount} minValue={1} />
          </div>
          <ProductDelivery delivery={data.delivery}></ProductDelivery>
          <Button
            size="large"
            type="button"
            onClick={() => showPopupHandler(true)}
          >
            Купить
          </Button>
          <Popularity value={data.comments.length} />
        </div>
      </div>
      <Div>
        {tabsAsAccordion ? <Accordion tabs={tabs} /> : <Tabs tabs={tabs} />}
      </Div>
      <Popup
        isShow={isPopupShown}
        onClose={() => {
          showPopupHandler(false);
          handleReloadClick();
        }}
      >
        <Order />
      </Popup>
    </div>
  );
}
