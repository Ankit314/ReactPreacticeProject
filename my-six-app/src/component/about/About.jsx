import React from 'react'
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';
import business from '../img/busiess.svg';
import Partner from '../img/Partner-ship.jpg';
import annual from '../img/annual.jpg';
import gst from '../img/GST-Registration.jpg';
 

export default function About() {
    return (
        <div>
            <Container className="text-center my-4" id="aboutus">
                <h2 className="mb-4">
                    <a href="#aboutus" className="text-decoration-none">
                        About Us
                        <span className="d-block bg-primary mx-auto mt-2" style={{ height: '2px', width: '50px' }}></span>
                    </a>
                </h2>

                <p className="mb-4">
                    Ananya Steel Rolling Mills provides you the best range of mild steel bar, printing services, ms bar, tmt bars,
                    flat bar &amp; acc cement with effective &amp; timely delivery.
                </p>

                <Row>
                    <Col md={6} lg={4} className="mb-3">
                        <Card className="p-3 text-center">
                            <div className="icon-circle bg-light mx-auto mb-3">
                                <img className="img-fluid icon" src={business} alt="First slide"   />

                                {/* <svg className="icon"><use xlinkHref="#natureof" /></svg> */}
                            </div>
                            <h5 className="mb-2">Nature of Business</h5>
                            <p>Manufacturer</p>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} className="mb-3">
                        <Card className="p-3 text-center">
                            <div className="icon-circle bg-light mx-auto mb-3">
                               
                            <img className="img-fluid icon" src={Partner} alt="First slide"   />
                            </div>
                            <h5 className="mb-2">Legal Status of Firm</h5>
                            <p>Partnership</p>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} className="mb-3">
                        <Card className="p-3 text-center">
                            <div className="icon-circle bg-light mx-auto mb-3">
                            <img className="img-fluid icon" src={annual} alt="First slide"   />
                            </div>
                            <h5 className="mb-2">Annual Growth</h5>
                            <p>Increase</p>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} className="mb-3">
                        <Card className="p-3 text-center">
                            <div className="icon-circle bg-light mx-auto mb-3">
                            <img className="img-fluid icon" src={gst} alt="First slide"   />
                            </div>
                            <h5 className="mb-2">GST Registration Date</h5>
                            <p>09/11/2023</p>
                        </Card>
                    </Col>

                    <Col md={6} lg={4} className="mb-3">
                        <Card className="p-3 text-center">
                            <div className="icon-circle bg-light mx-auto mb-3">
                            <img className="img-fluid icon" src={business} alt="First slide"   />
                            </div>
                            <h5 className="mb-2">GST Number</h5>
                            <p>10DRWPK1779L1Z5</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
