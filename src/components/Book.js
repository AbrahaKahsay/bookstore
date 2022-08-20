import './Book.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBooksThunk, removeBookThunk } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readBooksThunk());
  }, []);

  const handleClickRemove = (e) => {
    e.preventDefault();
    dispatch(removeBookThunk(e.target.id));
  };

  return (
    books.map((book) => (
      <section key={book.id} className="lists-container">
        <div className="lists">
          <div className="header">
            <span className="action">{book.category }</span>
            <h1 className="title">{book.title}</h1>
            <p className="author">{book.author}</p>
            <div className="button-container">
              <button className="comments" type="button">Comments</button>
              <button id={book.id} className="comments remove-btn" onClick={handleClickRemove} type="button">Remove</button>
              <button className="comments" type="button">Edit</button>
            </div>
          </div>
          <div>
            <div className="progress-containner">
              <div>
                <div className="progress">o</div>
              </div>
              <div>
                <h1 className="percent-complete">64%</h1>
                <p className="completed">completed</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="current-chapter">CURRENT CHAPTER</h1>
            <h2 className="chapter">Chapter 17</h2>
            <button className="update-progress" type="button">
              Update Progress
            </button>
          </div>
        </div>
      </section>
    ))
  );
};

export default Book;
