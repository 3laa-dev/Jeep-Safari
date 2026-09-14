import NavBar from "./Components/Header"
import Slider from "./Components/Slider"
import { Row , Col} from "react-bootstrap"
import {Container} from "react-bootstrap"
import TimeLine from "./Components/TimeLine"
import Accordion_ from "./Components/Accordion"
import QA from "./Components/Questions"
import Footer from "./Components/Footer"


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
            <div className="timeline-sidebar">
                <TimeLine />
            </div>
        </Col>
      </Row>
      <Row>
        <QA/>
      </Row>
      </Container>
    <Footer/>
    </>
  )
}

export default App
