import { useEffect, useState } from "react";

import Button, { AnchorButton } from "./Button";
import { Col, Container, Row } from "./Layout";

//create your first component
const Home = () => {
  // Welcome to the calculator app!
  const [display, setDisplay] = useState("0");
  const [value, setValue] = useState(0);

  useEffect(() => {
    setDisplay(JSON.stringify(value));
  }, [value]);

  return (
    <>
      <Container isFluid>
        <AnchorButton>This links will be weird.</AnchorButton>
        <div className="row">
          <div className="col">
            <div className="display">{display}</div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                onClick={() => setDisplay("0")}
                buttonStyle="btn btn-warning"
              >
                AC
              </Button>
              <Button buttonStyle="btn btn-primary">()</Button>
              <Button buttonStyle="btn btn-primary">%</Button>
              <Button buttonStyle="btn btn-danger">÷</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                onClick={() => setValue(value * 10 + 7)}
                buttonStyle="btn btn-primary"
              >
                7
              </Button>
              <Button
                onClick={() => setDisplay(display + "8")}
                buttonStyle="btn btn-primary"
              >
                8
              </Button>
              <Button
                onClick={() => setDisplay(display + "9")}
                buttonStyle="btn btn-primary"
              >
                9
              </Button>
              <Button buttonStyle="btn btn-danger">×</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                onClick={() => setDisplay(display + "4")}
                buttonStyle="btn btn-primary"
              >
                4
              </Button>
              <Button
                onClick={() => setDisplay(display + "5")}
                buttonStyle="btn btn-primary"
              >
                5
              </Button>
              <Button
                onClick={() => setDisplay(display + "6")}
                buttonStyle="btn btn-primary"
              >
                6
              </Button>
              <Button buttonStyle="btn btn-danger">+</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button
                onClick={() => setDisplay(display + "1")}
                buttonStyle="btn btn-primary"
              >
                1
              </Button>
              <Button
                onClick={() => setDisplay(display + "2")}
                buttonStyle="btn btn-primary"
              >
                2
              </Button>
              <Button
                onClick={() => setDisplay(display + "3")}
                buttonStyle="btn btn-primary"
              >
                3
              </Button>
              <Button buttonStyle="btn btn-danger">-</Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button buttonStyle="btn btn-primary">.</Button>
              <Button
                onClick={() => setDisplay(display + "0")}
                buttonStyle="btn btn-primary"
              >
                0
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
