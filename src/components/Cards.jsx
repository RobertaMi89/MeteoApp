import CustomCard from "./CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Cards = ({ cityData }) => {
  const dataExists = Object.keys(cityData).length;
  return (
    <>
      {dataExists ? (
        <>
          <Container fluid className="sfondoBiancoDetail">
            <Row className=" pt-1 mb-3">
              <Col className="d-flex align-items-center">
                <Link to="/">
                  <ArrowLeftCircleFill className="arrow" />
                </Link>
                <h2 className="text-dark mb-2 ms-5">
                  <b>
                    {cityData.name},{cityData.sys.country}
                  </b>
                </h2>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row xs={1} md={2}>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Wind Speed",
                    value: cityData.wind.speed + " km/h",
                    icon: "./src/assets/media/icon/studio-ghibpioggiaicon.png",
                  }}
                  bgImg={"./src/assets/media/GIF/sialzailvento.gif"}
                  className="wind"
                />
              </Col>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Weather",
                    value: cityData.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`,
                  }}
                  bgImg={"./src/assets/media/GIF/giphytotoro.gif"}
                ></CustomCard>
              </Col>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Humidity",
                    value: cityData.main.humidity + "%",
                    icon: "./src/assets/media/icon/humidityicon.png",
                  }}
                  bgImg={"./src/assets/media/GIF/ponyo.gif"}
                />
              </Col>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Temperature",
                    value: Math.floor(cityData.main.temp) + "°",
                    icon: "./src/assets/media/icon/temperatureicon.png",
                  }}
                  bgImg={"./src/assets/media/GIF/calcifer.gif"}
                />
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default Cards;
