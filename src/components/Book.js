import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
