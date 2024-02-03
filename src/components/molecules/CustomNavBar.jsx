import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cards from "../Cards";
import fetchData from "../../utils/FetchData";
import Banner from "../molecules/Banner";
import "../../index.css";

export const CustomNavBar = () => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState({});

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/details", { state: { location } });
  };

  const searchLocation = async () => {
    try {
      let data = await fetchData(urlData);

      setCity(data);
      console.log(data);
    } catch (error) {
      console.error("Errore durante la ricerca della posizione:", error);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (event.code === "Enter") handleButtonClick();
  };

  const urlData = `https://api.openweathermap.org/data/2.5/weather?q=roma,it&appid=4bb0ca7fe3d82827c0b62fca86878ab2&units=metric`;

  useEffect(() => {
    searchLocation();
  }, []);

  return (
    <>
      <Navbar>
        <Container fluid className="d-flex ">
          <Nav style={{ maxHeight: "100px" }} navbarScroll></Nav>
          <Container>
            <Banner />
            <Container style={{ width: "100%" }}>
              <Form
                className="d-flex justify-content-center mt-2"
                onSubmit={(event) => handleFormSubmit(event)}
              >
                <Form.Control
                  style={{ width: "30%" }}
                  type="search"
                  value={location}
                  placeholder="Enter Location"
                  className="me-2"
                  onChange={(event) => setLocation(event.target.value)}
                  onKeyUp={(event) => handleFormSubmit(event)}
                  aria-label="Search"
                />
                <Button
                  style={{ backgroundColor: "transparent", border: "none" }}
                  onClick={() => handleButtonClick()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search text-dark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                </Button>
              </Form>
            </Container>
          </Container>
        </Container>
      </Navbar>
      <Cards cityData={city} />
    </>
  );
};
export default CustomNavBar;
