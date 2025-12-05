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
    const getData = async () => {
      const resp = await fetch("https://library.dotlag.space/library");

      if (resp.ok) {
        const data = await resp.json();
        setBooks(data.books);
      }
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
