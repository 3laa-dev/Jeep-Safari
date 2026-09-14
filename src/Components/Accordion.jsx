import Accordion from 'react-bootstrap/Accordion';
import { Row, Col } from "react-bootstrap"

function Accordion_() {
    return (
        <Accordion className='p-2 mt-3'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Price Includes and Not Includes</Accordion.Header>
                <Accordion.Body>


                    <Row>
                        <Col xs="6">

                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Hotel transfer</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Professional driver</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Safari guide</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Lunch</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Travel insurance</span>
                            </div>
                            <div className="feature-item">
                                <i className="fa-regular fa-circle-check text-success"></i>
                                <span>Swimming stop at the mountain river</span>
                            </div>

                        </Col>
                        <Col xs="6">
                            <div className="feature-item">
                                <i class="fa-regular fa-circle-xmark text-danger"></i>
                                <span>Drinks</span>
                            </div>
                            <div className="feature-item">
                                <i class="fa-regular fa-circle-xmark text-danger"></i>
                                <span>Personal expenses</span>
                            </div>
                            <div className="feature-item">
                                <i class="fa-regular fa-circle-xmark text-danger"></i>
                                <span>Photos</span>
                            </div>
                            <div className="feature-item">
                                <i class="fa-regular fa-circle-xmark text-danger"></i>
                                <span>Videos</span>
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Highlights</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col sm="6" xs="12">
                            <div className='highlights-item'>
                                Family jeep safari through the Taurus Mountains above Alanya
                            </div>
                            <div className='highlights-item'>
                                Stop in a traditional mountain village with tea and gözleme
                            </div>
                            <div className='highlights-item'>
                                Lunch and hotel transfers included in the price
                            </div>

                        </Col>
                        <Col sm="6" xs="12">
                            <div className='highlights-item'>
                                Off-road tracks with panoramic viewpoints over the bay
                            </div>
                            <div className='highlights-item'>
                                Swimming break in the cool water of the Dim Çayı river
                            </div>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordion_;