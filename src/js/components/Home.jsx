import { Container } from "./Layout";

//create your first component
const Home = () => {
  const someValue = "This is some random variable.";
  const someData = [
    "This is html stored in an array!",
    "Which is some other real nifty tech!",
    `Because if we can store HTML as a variable,
     then we can do things with it
     (like display it.)`,
  ];

  return (
    <>
      <Container>
        <h1>{someValue}</h1>
        <img src="https://placecats.com/300/200" alt="" />
        {someData.map((data) => (
          <p>{data}</p>
        ))}
      </Container>
    </>
  );
};

export default Home;
