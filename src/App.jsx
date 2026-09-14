import NavBar from "./Components/Header"
import Slider from "./Components/Slider"
import { Row , Col} from "react-bootstrap"
import {Container} from "react-bootstrap"
import TimeLine from "./Components/TimeLine"
import Accordion_ from "./Components/Accordion"


function App() {

  return (
    <>
      <NavBar/>
      <Container>
        <Row>
        <Col sm="8" >
            <Slider/>
            <Accordion_/>
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
