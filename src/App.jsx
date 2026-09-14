import NavBar from "./Components/Header"
import Slider from "./Components/Slider"
import { Row , Col} from "react-bootstrap"
import {Container} from "react-bootstrap"
import TimeLine from "./Components/TimeLine"

function App() {

  return (
    <>
      <NavBar/>
      <Container>
        <Row>
        <Col sm="8">
            <Slider/>
        </Col>
        <Col sm="4">
            <TimeLine/>
        </Col>
      </Row>
      </Container>

    </>
  )
}

export default App
