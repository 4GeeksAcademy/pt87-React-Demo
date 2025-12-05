const BookCard = ({ book }) => {
  return (
    <div className="card mx-auto mb-2">
      <img
        src={book.cover ? book.cover : "https://placehold.co/300x500/888/888/"}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {book.title}
          {book.year_published ? ` — ${book.year_published}` : ""}
        </h5>
        <ul className="list-group list-group-flush my-2">
          {book.author ? (
            <li className="list-group-item">By: {book.author}</li>
          ) : (
            ""
          )}
          {book.num_pages ? (
            <li className="list-group-item">{book.num_pages} pgs.</li>
          ) : (
            ""
          )}
          {book.year_published ? (
            <li className="list-group-item">Published {book.year_published}</li>
          ) : (
            ""
          )}
          {book.isbn10 ? (
            <li className="list-group-item">ISBN-10: {book.isbn10}</li>
          ) : (
            ""
          )}
          {book.isbn13 ? (
            <li className="list-group-item">ISBN-13: {book.isbn13}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="card-footer d-flex justify-content-between mt-auto mb-2">
        <button className="btn btn-info bg-gradient text-dark">
          <i className="fa-solid fa-thumbs-down"></i>
          <i className="fa-solid fa-book-skull"></i>
        </button>
        <button className="btn btn-danger bg-gradient text-dark">
          <i className="fa-solid fa-thumbs-up"></i>
          <i className="fa-solid fa-fire-burner"></i>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
