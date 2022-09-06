import Container from 'react-bootstrap/Container';
import "./footer.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="main-footer">
      <Container fluid>
        <Row className="row-footer">
          <Col sm={7} className="info-section">
            <h4>MARC DE GUZMAN</h4>
            <div>
              Frontend/Full-Stack Developer with a keen eye to details
            </div>
          </Col>

          <Col sm={2}><br /></Col>

          <Col sm={3} className="social-section">
            <h4>SOCIAL</h4>
            <div className="social-section-logos" >
              <a target="_blank" href="https://www.linkedin.com/in/marc-louis-gene-de-guzman-48883113" rel="noreferrer">
                <FontAwesomeIcon size='2x' icon={faLinkedin} />
              </a>
              <a target="_blank" href="https://github.com/mdeguzman45" rel="noreferrer">
                <FontAwesomeIcon size='2x' icon={faGithub} />
              </a>
              
              {/* <FontAwesomeIcon size='2x' icon={faTwitter} /> */}
            </div>
          </Col>
        </Row>
        <div className="lower-footer">
          © Copyright {new Date().getFullYear()}. Made by Marc De Guzman
        </div>
      </Container>
    </div>
  
  )
}

export default Footer;