import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="footer">

            <Container>

                {/* ================= TOP ================= */}

                <Row className="footer-top">

                    {/* BRAND */}

                    <Col lg={5} md={12} className="footer-brand">

                        <div className="footer-logo">
                            ALANYA <span>JEEP SAFARI</span>
                        </div>

                        <p className="footer-description">
                            Experience the beauty of Alanya and the Taurus
                            Mountains with an unforgettable Jeep Safari adventure.
                        </p>


                        {/* Rating */}

                        <div className="footer-rating">

                            <div className="footer-stars">
                                ★★★★★
                            </div>

                            <div>
                                <strong>4.8 / 5</strong>
                                <span>Trusted by our guests</span>
                            </div>

                        </div>


                        {/* Social */}

                        <div className="footer-socials">

                            <a href="#" aria-label="Instagram">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#" aria-label="WhatsApp">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>

                            <a href="#" aria-label="Tripadvisor">
                                <i className="fa-brands fa-tripadvisor"></i>
                            </a>

                        </div>

                    </Col>


                    {/* QUICK LINKS */}

                    <Col lg={3} md={6} className="footer-column">

                        <h4>Explore</h4>

                        <ul>

                            <li>
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#tours">Safari Tours</a>
                            </li>

                            <li>
                                <a href="#about">About Us</a>
                            </li>

                            <li>
                                <a href="#reviews">Reviews</a>
                            </li>

                            <li>
                                <a href="#contact">Contact</a>
                            </li>

                        </ul>

                    </Col>


                    {/* CONTACT */}

                    <Col lg={4} md={6} className="footer-column">

                        <h4>Get In Touch</h4>

                        <div className="footer-contact">

                            <a href="#contact">

                                <i className="fa-solid fa-location-dot"></i>

                                <span>
                                    Alanya, Antalya, Türkiye
                                </span>

                            </a>


                            <a href="tel:+90XXXXXXXXXX">

                                <i className="fa-solid fa-phone"></i>

                                <span>
                                    +90 XXX XXX XX XX
                                </span>

                            </a>


                            <a href="mailto:info@example.com">

                                <i className="fa-solid fa-envelope"></i>

                                <span>
                                    info@example.com
                                </span>

                            </a>


                            <a href="#">

                                <i className="fa-brands fa-whatsapp"></i>

                                <span>
                                    WhatsApp Booking
                                </span>

                            </a>

                        </div>

                    </Col>

                </Row>


                {/* ================= MAP ================= */}

                <div className="footer-map-section">

                    <div className="footer-map-heading">

                        <div>

                            <span>FIND US</span>

                            <h3>
                                Ready for your next adventure?
                            </h3>

                        </div>

                        <p>
                            Visit us in Alanya and start your journey
                            into the Taurus Mountains.
                        </p>

                    </div>


                    <div className="footer-map-wrapper">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51286.84532003991!2d32.05385168079613!3d36.54379591395545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dca27b822cd5fb%3A0xd160c1c8b3dc170b!2z2KPZhNin2YbZitin2Iwg2KPZhti32KfZhNmK2Kc!5e0!3m2!1sar!2str!4v1789413003276!5m2!1sar!2str"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="map"
                        ></iframe>

                    </div>

                </div>



                <div className="footer-bottom">

                    <p>
                        © {currentYear} Alanya Jeep Safari.
                        All rights reserved.
                    </p>

                    <div className="footer-bottom-links">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </Container>

        </footer>
    );
};

export default Footer;