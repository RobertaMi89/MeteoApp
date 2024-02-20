import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const DetailsNavBar = ({ cityData }) => {
  return (
    <>
      <Container fluid className="sfondoBannerDetail">
        <Row className=" pt-1 mb-3">
          <Col className="d-flex align-items-center">
            <Link to="/MeteoApp">
              <ArrowLeftCircleFill className="arrow" />
            </Link>
            <h2 className="text-dark mb-2 ms-5">
              <b>
                {cityData?.name && cityData?.sys?.country ? (
                  <>
                    {cityData.name}, {cityData.sys.country}
                  </>
                ) : (
                  <>
                    {" "}
                    <p> Back to Home</p>
                  </>
                )}
              </b>
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default DetailsNavBar;
