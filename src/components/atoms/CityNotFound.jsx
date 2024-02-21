import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meh from "../../assets/media/GIF/meh.gif";

import { Card } from "react-bootstrap";
const CityNotFound = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <Container style={{ width: "500px", height: "auto" }}>
              <Card
                style={{ backgroundImage: `url(${meh})` }}
                className="cardNotFound"
              >
                <Card.Body className="cardBodyNotFound">
                  <Card.Text className="cardTextNotFound">
                    <b>CITY NOT FOUND</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CityNotFound;
