const BookCard = ({ book }) => {
  return (
    <div class="card mx-auto mb-2">
      <img
        src={book.cover ? book.cover : "https://placehold.co/300x500/888/888/"}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          {book.title}
          {book.year_published ? ` — ${book.year_published}` : ""}
        </h5>
        <ul class="list-group list-group-flush my-2">
          {book.author ? (
            <li class="list-group-item">By: {book.author}</li>
          ) : (
            ""
          )}
          {book.num_pages ? (
            <li class="list-group-item">{book.num_pages} pgs.</li>
          ) : (
            ""
          )}
          {book.year_published ? (
            <li class="list-group-item">Published {book.year_published}</li>
          ) : (
            ""
          )}
          {book.isbn10 ? (
            <li class="list-group-item">ISBN-10: {book.isbn10}</li>
          ) : (
            ""
          )}
          {book.isbn13 ? (
            <li class="list-group-item">ISBN-13: {book.isbn13}</li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div class="card-footer d-flex justify-content-between mt-auto mb-2">
        <button class="btn btn-info bg-gradient text-dark">
          <i class="fa-solid fa-thumbs-down"></i>
          <i class="fa-solid fa-book-skull"></i>
        </button>
        <button class="btn btn-danger bg-gradient text-dark">
          <i class="fa-solid fa-thumbs-up"></i>
          <i class="fa-solid fa-fire-burner"></i>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
