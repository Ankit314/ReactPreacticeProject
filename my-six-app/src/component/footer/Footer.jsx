import React from 'react';
import logoimg from '../img/logoananya.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
 

import './footer.css';

export default function Footer() {
    return (
        <div>
             <footer className="bg-light text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="https://www.facebook.com/ananya.steel.sales" className="me-4 text-reset">
            <FaFacebookF />
          </a>
          <a href="https://x.com/ANKITKU93070740" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="https://www.instagram.com/imankitkumar98/?hl=en" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-73890a255/" className="me-4 text-reset">
            <FaLinkedin />
          </a>
           
        </div>
      </section>

      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={5} lg={6} xl={5} className="mx-auto mb-4">
             
                  <img src={logoimg} alt="Logo" width={150} height={50} />
               
              <p>
              Ananya Steel Sales At Ananya Steel Sales, we specialize in providing high-quality steel products to meet the diverse needs of our customers. Our extensive product range includes: Mild Steel (MS): Flat bars, square bars, angles, pipes, profiles, channels, and TMT bars. Galvanized Iron (GI): Flat bars, square bars, angles, and pipes. Galvanized Plain (GP) Sheets MS Pipes Profile Sheets TMT Bars We are committed to delivering durable, reliable, and cost-effective steel solutions for construction, manufacturing, and industrial applications.  
              </p>
            </Col>

            {/* <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#" className="text-reset">Angular</a></p>
              <p><a href="#" className="text-reset">React</a></p>
              <p><a href="#" className="text-reset">Vue</a></p>
              <p><a href="#" className="text-reset">Laravel</a></p>
            </Col> */}

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#" className="text-reset">Pricing</a></p>
              <p><a href="#" className="text-reset">Settings</a></p>
              <p><a href="#" className="text-reset">Orders</a></p>
              <p><a href="#" className="text-reset">Help</a></p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FaHome className="me-2" /> Aurangavad , Bihar </p>
              <p><FaEnvelope className="me-2" />ananyasteelsales18@gmail.com</p>
              <p><FaPhone className="me-2" />9852667618</p>
              <p><FaPrint className="me-2" /> 9852263803</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 owner: <a className="text-reset fw-bold" href="#">Abhinay Kumar</a>
      </div>
    </footer>
            





        </div>
    )
}
