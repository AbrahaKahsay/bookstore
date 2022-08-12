import React from "react";

const Book = (props)=> {
    const { title, author } = props;

return (
<div>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <button type="button">Delete</button>
  </div>
  );
}
export default Book;