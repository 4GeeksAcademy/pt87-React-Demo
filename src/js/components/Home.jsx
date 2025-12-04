import { useState } from "react";

import BookCard from "./BookCard";
import { Col, Container, Row } from "./Layout";

import json_data from "../data";

//create your first component
const Home = () => {
  const [bookIdx, setBookIdx] = useState(
    Math.floor(Math.random() * json_data.books.length)
  );

  setInterval(() => console.log("This should be once a second, right?"), 1000);

  return (
    <>
      <Container isFluid>
        <Row className="my-3">
          <Col className="d-flex justify-content-around">
            <button
              className="btn btn-primary"
              onClick={() => {
                setBookIdx(Math.floor(Math.random() * json_data.books.length));
              }}
            >
              <h2>Pick a random book to read:</h2>
            </button>
          </Col>
        </Row>
        <Row>
          <Col colWidth={4} colOffset={4} className="d-flex flex-column gap-3">
            <BookCard book={json_data.books[bookIdx]} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
