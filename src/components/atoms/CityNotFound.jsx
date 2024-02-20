import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meh from "../../assets/media/GIF/meh.gif";
import CustomCard from "../CustomCard";
const CityNotFound = () => {
  return (
    <>
      <Container>
        <Row xs={1} md={2}>
          <Col className="d-flex justify-content-center">
            <CustomCard
              meteoProp={{
                name: "City not found",
                value: "",
                icon: "",
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
