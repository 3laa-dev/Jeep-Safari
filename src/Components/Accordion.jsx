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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo ad veniam odit in doloribus recusandae, consequatur, eveniet, nostrum deleniti vel veritatis debitis est! Ratione optio eius possimus nesciunt illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi, dolorum debitis, quod aspernatur quidem soluta odio quam eum excepturi sunt? Animi eius accusamus fugit impedit, soluta suscipit. Corporis, alias?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laudantium fugiat rem optio debitis commodi voluptates sapiente? Nobis nostrum earum, beatae nulla reiciendis, itaque esse ipsam iste dicta, impedit rerum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque quaerat error! Ipsa vel temporibus amet accusamus et magni deleniti quisquam veritatis. Omnis aperiam aliquid excepturi deserunt totam rerum inventore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo, ut omnis eum natus tempora eaque ipsam ex molestiae officiis ad labore expedita quod, soluta dignissimos quia excepturi velit quibusdam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cupiditate non consequatur doloribus ipsum veritatis quidem temporibus quo maiores id dolorem, nulla quaerat modi accusamus architecto obcaecati atque sint fuga?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus tempora incidunt facere officia quisquam nostrum itaque repellat, quae magnam dolor alias pariatur delectus. Doloribus quo nam dolor vitae molestiae est?
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