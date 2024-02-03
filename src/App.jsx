import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import CustomNavBar from "./components/molecules/CustomNavBar";

export function App() {
  return (
    <>
      <Container fluid className="app m-0">
        <CustomNavBar />
      </Container>
    </>
  );
}

export default App;
