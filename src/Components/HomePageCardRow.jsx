import {Row , Col } from "react-bootstrap";
import HomePageCard from "./HomePageCard";
const HomePageCardRow = () => {
  return (
    <Row className="my-3">
      <Col xs = "12" sm = "6"  lg="4" className="my-1">
      <HomePageCard number={1} icon = "fa-solid fa-shield" miniTitle="Transfer" title="Comfortable & Timely Transfers" text=" Comfortable & timely transfers from Side region."/>
      </Col>
      <Col xs = "12" sm = "6"  lg="4" className="my-1">
      <HomePageCard number={2} icon = "fa-solid fa-shield" miniTitle="Transfer" title="Comfortable & Timely Transfers" text=" Comfortable & timely transfers from Side region."/>
      </Col>
      <Col xs = "12" sm = "12"  lg="4" className="my-1">
      <HomePageCard number={3} icon = "fa-solid fa-shield" miniTitle="Transfer" title="Comfortable & Timely Transfers" text=" Comfortable & timely transfers from Side region."/>
      </Col>
      
    </Row>
  )
}

export default HomePageCardRow
