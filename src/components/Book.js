import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleClick = () => dispatch(removeBook(id));
  return (
    <li className="lists">
      <div className="header">
        <h4 className="title">{title}</h4>
        <p className="author">{author}</p>
        <div className="button-container">
          <button className="comments" type="button">Comments</button>
          <button className="comments" onClick={handleClick} type="button">Remove</button>
          <button className="comments" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
