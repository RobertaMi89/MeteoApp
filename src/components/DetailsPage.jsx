import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchData from "../utils/FetchData";
import Cards from "./Cards";
import Chart from "./Chart";
import Container from "react-bootstrap/esm/Container";
import { ApiKey } from "../env";
import DetailsNavBar from "./atoms/DetailsNavBar";
import CityNotFound from "./atoms/CityNotFound";

export const DetailsPage = () => {
  const [forecast, setForecast] = useState(null);
  const { state } = useLocation();

  const [city, setCity] = useState({});

  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=${state.location}&appid=${ApiKey}&units=metric`;

  useEffect(() => {
    const searchLocation = async () => {
      try {
        let data = await fetchData(urlData);

        setCity(data);
      } catch (error) {
        console.error("Errore durante la ricerca della posizione:", error);
      }
    };
    const fetchForecastData = async () => {
      try {
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${state.location}&appid=${ApiKey}&units=metric`;
        const response = await fetchData(urlForecast);
        setForecast(response);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    if (state && state.location) {
      searchLocation();
      fetchForecastData();
    }
  }, [state]);

  const dataExists = city && forecast;
  return (
    <>
      <Container fluid className="backgroundDetail m-0 p-0">
        <DetailsNavBar cityData={city} />
        {dataExists ? (
          <>
            {city && forecast && (
              <Cards cityData={city} cityForecast={forecast} />
            )}
            {city && forecast && <Chart cityForecast={forecast} />}
          </>
        ) : (
          <>
            <CityNotFound />
          </>
        )}
      </Container>
    </>
  );
};

export default DetailsPage;
