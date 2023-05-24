import React from "react";
import Button from "/src/button/ProductButton";

export default function ProductCommentary({
  comments,
  onShowMore,
  allCommentsLength
}) {
  return (
    <div>
      <h3>Комментарии</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <b>{comment.name}</b>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      {allCommentsLength > comments.length && (
        <Button onClick={onShowMore}>Показать еще</Button>
      )}
    </div>
  );
}
