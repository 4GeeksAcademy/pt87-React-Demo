import BookCard from "./BookCard";
import { Col, Container, Row } from "./Layout";

//create your first component
const Home = () => {
  const tempData = {
    cover: "https://pictures.abebooks.com/isbn/9780553136951-us.jpg",
    title: "Something Wicked This Way Comes",
    isbn13: "978-0-380-72940-1",
    is_awesome: true,
    id: 2,
    year_published: 1997,
    author: "Ray Bradbury",
    num_pages: 293,
    isbn10: "0-380-72940-7",
    have_read: false,
  };

  return (
    <>
      <Container isFluid>
        <Row className="py-3">
          <Col className="d-flex flex-col justify-content-center">
            <img src="https://placecats.com/300/200" alt="" />
          </Col>
          <Col className="d-flex flex-col justify-content-center">
            <img src="https://placecats.com/300/200" alt="" />
          </Col>
          <Col className="d-flex flex-col justify-content-center">
            <img src="https://placecats.com/300/200" alt="" />
          </Col>
        </Row>
        <Row>
          <Col colWidth={4} colOffset={4}>
            <BookCard book={tempData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
