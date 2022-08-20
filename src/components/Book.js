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
      <section key={book.id} className="lists">

        <div className="header">
          <p>{book.category }</p>
          <h1 className="title">{book.title}</h1>
          <p className="author">{book.author}</p>
          <div className="button-container">
            <button className="comments" type="button">Comments</button>
            <button id={book.id} className="comments" onClick={handleClickRemove} type="button">Remove</button>
            <button className="comments" type="button">Edit</button>
          </div>
        </div>
        <div>
          <div className="progress-containner">
            <div>
              <div className="progress">@</div>
            </div>
            <div>
              <h1>70%</h1>
              <span>completed</span>
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

      </section>
    ))
  );
};

export default Book;
