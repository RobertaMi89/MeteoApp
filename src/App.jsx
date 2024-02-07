import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import CustomNavBar from "./components/molecules/CustomNavBar";

export function App() {
  return (
    <>
      <Container fluid className="app m-0">
        <Container>
          <Container className="sfondoBianco">
            <CustomNavBar />
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
