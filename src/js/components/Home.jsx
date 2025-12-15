import { useEffect, useState } from "react";

import BookCard from "./BookCard";
import { Col, Container, Row } from "./Layout";

import json_data from "../data";
import SelectMenu from "./SelectMenu";

//create your first component
const Home = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState("1");
  const [formBook, setFormBook] = useState({});

  // Using useEffect to give side effects to you data.
  // useEffect(() => {
  //   console.log("This will run whenever input changes now!");
  //   console.log(input);
  // }, [input]);

  useEffect(() => {
    // Async/await lets your async code work like normal code.
    const getData = async () => {
      const response = await fetch("https://library.dotlag.space/library");

      if (response.ok) {
        const data = await response.json();
        setBooks(data.books);
      }
    };

    // This is a substantive change that is going make this whole project come together.

    const getDataChain = () => {
      // Promise chaining lets you do some very nifty things,
      // but it takes a lot more thinking to reason about.
      console.log("This code is before the promise.");
      fetch("https://library.dotlag.space/library")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log("This is from the promise.", data);
        });
      console.log("This code is after the promise.");
    };

    getData();
  }, []);

  // How to deal with the double counting intervals:
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => console.log("This should be once a second, right?"),
  //     1000
  //   );

  //   return () => clearInterval(interval);
  // }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const resp = await fetch("https://library.dotlag.space/library/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formBook),
    });

    if (resp.ok) {
      const data = await resp.json();
      setBooks([...books, data]);
      setFormBook({});
    }
  };

  return (
    <>
      <Container isFluid>
        <Row>
          <Col colWidth={4} colOffset={2} className="d-flex flex-column gap-3">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="book-title" class="form-label">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  class="form-control"
                  id="book-title"
                  value={formBook?.title}
                  onChange={(ev) =>
                    setFormBook({
                      ...formBook,
                      title: ev.target.value,
                    })
                  }
                />
              </div>
              <div class="mb-3">
                <label for="book-author" class="form-label">
                  Author
                </label>
                <input
                  name="author"
                  type="text"
                  class="form-control"
                  id="book-author"
                  value={formBook?.author}
                  onChange={(ev) =>
                    setFormBook({
                      ...formBook,
                      author: ev.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </Col>
          <Col colWidth={4} className="d-flex flex-column gap-3">
            <SelectMenu
              value={selected}
              onChange={(ev) => setSelected(ev.target.value)}
              options={books.map((book) => ({
                value: book.id,
                label: book.title,
              }))}
            />
            {books.length ? (
              <BookCard
                book={books.find((book) => book.id == selected) || books[0]}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
