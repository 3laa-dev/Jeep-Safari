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

            <Accordion.Item eventKey="2">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa odio atque incidunt iste delectus quibusdam ipsum praesentium? Officiis voluptatum, cum ipsa ab at fugiat voluptate tempore explicabo atque nostrum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Before you go</Accordion.Header>
                <Accordion.Body>
                     <div className="feature-item">
                            <i class="fa-regular fa-hand-point-right"></i>
                            <span>Bring swimwear and a towel for the river swimming stop</span>
                    </div>
                    <div className="feature-item">
                            <i class="fa-regular fa-hand-point-right"></i>
                            <span>Wear comfortable clothing and closed shoes that can handle dust</span>
                    </div>
                    <div className="feature-item">
                            <i class="fa-regular fa-hand-point-right"></i>
                            <span>Use sun protection and bring sunglasses for the open jeep ride</span>
                    </div>
                    <div className="feature-item">
                            <i class="fa-regular fa-hand-point-right"></i>
                            <span>Pack phones and cameras in a sealed bag because water splashing is part of the day</span>
                    </div>
                    <div className="feature-item">
                            <i class="fa-regular fa-hand-point-right"></i>
                            <span>Hotel pickup is earlier than the listed start time and is confirmed after your reservation</span>
                    </div>
                    

                </Accordion.Body>
            </Accordion.Item>


        </Accordion>
    );
}

export default Accordion_;