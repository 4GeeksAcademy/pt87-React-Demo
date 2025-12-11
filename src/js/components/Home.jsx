import { useEffect, useState } from "react";

import BookCard from "./BookCard";
import { Col, Container, Row } from "./Layout";

import json_data from "../data";

//create your first component
const Home = () => {
  const [books, setBooks] = useState([]);
  const [bookIdx, setBookIdx] = useState(
    Math.floor(Math.random() * books.length)
  );

  const [input, setInput] = useState("");

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

  return (
    <>
      {/* <Container isFluid>
        <Row className="my-r">
          <Col>
            <input
              type="text"
              value={input}
              onChange={(ev) => setInput(ev.target.value)}
            />
          </Col>
        </Row>
      </Container> */}
      <Container isFluid>
        <Row className="my-3">
          <Col className="d-flex justify-content-around">
            <button
              className="btn btn-primary"
              onClick={() => {
                setBookIdx(Math.floor(Math.random() * books.length));
              }}
            >
              <h2>Pick a random book to read:</h2>
            </button>
          </Col>
        </Row>
        <Row>
          <Col colWidth={4} colOffset={4} className="d-flex flex-column gap-3">
            {books.length ? <BookCard book={books[bookIdx]} /> : <></>}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
