import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meh from "../../assets/media/GIF/meh.gif";
import CustomCard from "../CustomCard";
const CityNotFound = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <CustomCard
              meteoProp={{
                name: "",
                value: " Sorry, city not found!",
                icon: "./src/assets/media/GIF/spirited.gif",
              }}
              bgImg={meh}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CityNotFound;
