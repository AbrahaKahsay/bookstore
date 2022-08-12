import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
