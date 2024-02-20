import CustomCard from "./CustomCard";
import { Container, Row, Col } from "react-bootstrap";
import giphytotoro from "../assets/media/GIF/giphytotoro.gif";
import humidityicon from "../assets/media/icon/humidityicon.png";
import studioghibpioggiaicon from "../assets/media/icon/studio-ghibpioggiaicon.png";
import sialzailvento from "../assets/media/GIF/sialzailvento.gif";
import ponyo from "../assets/media/GIF/ponyo.gif";
import temperatureicon from "../assets/media/icon/temperatureicon.png";
import calcifer from "../assets/media/GIF/calcifer.gif";

const Cards = ({ cityData }) => {
  const dataExists = Object.keys(cityData).length;
  return (
    <>
      {dataExists ? (
        <>
          <Container>
            <Row xs={1} md={2}>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Wind Speed",
                    value: cityData.wind.speed + " km/h",
                    icon: studioghibpioggiaicon,
                  }}
                  bgImg={sialzailvento}
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
                  bgImg={giphytotoro}
                ></CustomCard>
              </Col>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Humidity",
                    value: cityData.main.humidity + "%",
                    icon: humidityicon,
                  }}
                  bgImg={ponyo}
                />
              </Col>
              <Col className="d-flex justify-content-center">
                <CustomCard
                  meteoProp={{
                    name: "Temperature",
                    value: Math.floor(cityData.main.temp) + "°",
                    icon: temperatureicon,
                  }}
                  bgImg={calcifer}
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
