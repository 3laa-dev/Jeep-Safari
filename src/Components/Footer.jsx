import { Container, Col, Row } from "react-bootstrap";

const Footer = () => (
    <footer className="footer" id="footer">
        <Container>
            <Row className="align-items-center">

                <Col lg="6" className="footer-info">
                    <h3>Alanya Jeep Safari</h3>

                    <p>
                        Experience the beauty of Alanya and the Taurus Mountains
                        with an unforgettable jeep safari.
                    </p>

                    <div className="footer-contact">
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <span>Alanya, Antalya, Türkiye</span>
                        </div>

                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>+90 XXX XXX XX XX</span>
                        </div>

                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <span>info@example.com</span>
                        </div>
                    </div>
                </Col>

                <Col lg="6">
                    
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51286.84532003991!2d32.05385168079613!3d36.54379591395545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2z2KPZhNin2YbZitin2Iwg2KPZhti32KfZhNmK2Kc!5e0!3m2!1sar!2str!4v1789413003276!5m2!1sar!2str"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="w-100 map"
                        ></iframe>
                    
                </Col>

            </Row>
        </Container>
    </footer>
);

export default Footer;