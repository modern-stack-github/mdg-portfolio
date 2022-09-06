import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './about.css';

function About() {
  return (
    <Container fluid>
      <div style={{paddingLeft: '20px', paddingRight: '20px', margin: '20px'}}>
        <Row>
          <div className="slide-right-overview">
          <Card bg="primary" style={{width: '100%'}}>
            <Card.Body>
              <Card.Title style={{color: 'floralwhite', fontSize: '30px'}}>About Me</Card.Title>
              <ListGroup as="ul">
                <ListGroup.Item as="li" className="custom-list-about-me">Over 12+ years of experience in designing, developing and maintaining client-server and web-based applications.</ListGroup.Item>
                <ListGroup.Item as="li" className="custom-list-about-me">I have consistently met client expectations and project milestones while working effectively in deadline-driven environments.</ListGroup.Item>
                <ListGroup.Item as="li" className="custom-list-about-me">I started my career as a Full-Stack developer then transitioned to Front-End developer back in October 2018. But I am open on doing Full-Stack role again.</ListGroup.Item>
              </ListGroup>

              <Row>
                <Col sm={6} style={{display: 'flex', padding: '20px'}}>
                  <Card bg="secondary" style={{width: '100%'}}>
                    <Card.Body>
                      <Card.Title style={{color: 'floralwhite'}}>Skills With Professional Experience</Card.Title>
                      <div className="skills-row-about">
                        <h5><Badge pill bg="dark">PHP</Badge></h5>
                        <h5><Badge pill bg="dark">AJAX</Badge></h5>
                        <h5><Badge pill bg="dark">CGI-BIN</Badge></h5>
                        <h5><Badge pill bg="dark">JAVASCRIPT</Badge></h5>
                        <h5><Badge pill bg="dark">ANGULARJS</Badge></h5>
                        <h5><Badge pill bg="dark">ANGULAR</Badge></h5>
                        <h5><Badge pill bg="dark">NODE.JS</Badge></h5>
                        <h5><Badge pill bg="dark">JQUERY</Badge></h5>
                        <h5><Badge pill bg="dark">HTML</Badge></h5>
                        <h5><Badge pill bg="dark">CSS</Badge></h5>
                        <h5><Badge pill bg="dark">SCSS</Badge></h5>
                        <h5><Badge pill bg="dark">ANGULAR MATERIAL</Badge></h5>
                        <h5><Badge pill bg="dark">BOOTSTRAP</Badge></h5>
                        <h5><Badge pill bg="dark">NODE.JS</Badge></h5>
                        <h5><Badge pill bg="dark">SHELL SCRIPTING</Badge></h5>
                        <h5><Badge pill bg="dark">C/C++</Badge></h5>
                        <h5><Badge pill bg="dark">JAVA</Badge></h5>
                        <h5><Badge pill bg="dark">ORACLE</Badge></h5>
                        <h5><Badge pill bg="dark">SQL</Badge></h5>
                        <h5><Badge pill bg="dark">SALESFORCE</Badge></h5>
                        <h5><Badge pill bg="dark">CVS</Badge></h5>
                        <h5><Badge pill bg="dark">SVN</Badge></h5>
                        <h5><Badge pill bg="dark">GIT</Badge></h5>
                        <h5><Badge pill bg="dark">JEST</Badge></h5>
                      </div>
                    </Card.Body>
                  </Card>
                  
                </Col>
                <Col sm={6} style={{display: 'flex', padding: '20px'}}>
                  <Card bg="warning" style={{width: '100%'}}>
                    <Card.Body>
                      <Card.Title>Skills Without Professional Experience</Card.Title>
                      <div className="skills-row-about">
                        <h5><Badge pill bg="dark">REACT</Badge></h5>
                        <h5><Badge pill bg="dark">MATERIAL UI</Badge></h5>
                        <h5><Badge pill bg="dark">EXPERSSJS</Badge></h5>
                        <h5><Badge pill bg="dark">NOSQL</Badge></h5>
                        <h5><Badge pill bg="dark">MONGODB</Badge></h5>
                        <h5><Badge pill bg="dark">C#</Badge></h5>
                        <h5><Badge pill bg="dark">.NET FRAMEWORK</Badge></h5>
                        <h5><Badge pill bg="dark">PYTHON</Badge></h5>
                        <h5><Badge pill bg="dark">SPRING</Badge></h5>
                        <h5><Badge pill bg="dark">SPRING-BOOT</Badge></h5>
                        <h5><Badge pill bg="dark">AWS</Badge></h5>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </div>
        </Row>
      </div>

    </Container>
    
  )
}

export default About;