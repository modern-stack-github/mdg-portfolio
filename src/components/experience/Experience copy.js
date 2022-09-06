
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import './experience.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function Experience() {
  const acnLogo = require('../../images/acn-logo.png');
  const inforLogo = require('../../images/infor-logo.png');

  return (
    <Container fluid>
      <Row>
        <Col sm={6} style={{display: 'flex', padding: '20px'}}>
        <Card bg="warning" style={{width: '100%'}}>
          <Card.Body>
            <Card.Title>Accenture (Mar 2010 - Sep 2018)</Card.Title>
            <Tab.Container id="acn-tabs" defaultActiveKey="overview-acn">
              <Row className="mt-3">
                <Col sm={4} className="mb-3">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-acn">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="accomplishments-acn">Accomplishments</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="skills-acn">Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="overview-acn">
                      <ListGroup as="ul" variant="flush">
                        <ListGroup.Item as="li" className="custom-list-item">Developed/maintained multiple backend application using C/C++</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Perform code reviews, bug tracking and debugging</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Developed network application enhancements using C/C++, AngularJS, PHP, Zend framework. Automated business processes by interfacing in-house built distributed software to mainframe applications and exposing functions via web APIs and customer facing websites.</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Collaborates with engineers or software developers to select appropriate design solutions or ensure the compatibility of system components; collaborates directly across various levels in the organization: Sr. Tech Director, system engineers, technical architects, business clients, development managers, testers, and lead project manager (LPM)</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Organize communications, system development, support, and the resolution of system issues across different development and support teams which are often geographically separate</ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="accomplishments-acn">
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item as="li" className="custom-list-item">Developed a web tool that will be used for project management tracking and resource planning using PHP and Oracle. The tool helped our clients Application front door to efficiently administer projects and efficiently track the team’s capacity.</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Led and developed migration of existing applications from jQuery to AngularJS project; the migration increased the applications maintainability and eliminated multiple source codes of view components</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Assigned in the USA (June 2014 – Sept 2017) to be Onshore Lead; Led offshore team in completion of multiple projects within scheduling budget</ListGroup.Item>
                        <ListGroup.Item as="li" className="custom-list-item">Started as Software Engineer Associate then promoted to Mid-Level Software Engineer and Senior Software Engineer</ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane  eventKey="skills-acn">
                      <div className="skills-row">
                        <h4><Badge bg="primary">PHP</Badge></h4>
                        <h4><Badge bg="primary">AJAX</Badge></h4>
                        <h4><Badge bg="primary">CGI-BIN</Badge></h4>
                        <h4><Badge bg="primary">JAVASCRIPT</Badge></h4>
                        <h4><Badge bg="primary">ANGULARJS</Badge></h4>
                        <h4><Badge bg="primary">ANGULAR</Badge></h4>
                        <h4><Badge bg="primary">NODE.JS</Badge></h4>
                        <h4><Badge bg="primary">JQUERY</Badge></h4>
                        <h4><Badge bg="primary">HTML</Badge></h4>
                        <h4><Badge bg="primary">CSS</Badge></h4>
                        <h4><Badge bg="primary">SHELL SCRIPTING</Badge></h4>
                        <h4><Badge bg="primary">C/C++</Badge></h4>
                        <h4><Badge bg="primary">JAVA</Badge></h4>
                        <h4><Badge bg="primary">SQL</Badge></h4>
                        <h4><Badge bg="primary">SALESFORCE</Badge></h4>
                        <h4><Badge bg="primary">CVS</Badge></h4>
                        <h4><Badge bg="primary">SVN</Badge></h4>
                        <h4><Badge bg="primary">GIT</Badge></h4>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>   
          </Card.Body>
          <Card.Img src={acnLogo} variant="bottom" alt="Accenture logo" style={{maxHeight: '200px'}}/>
        </Card>
        </Col>
        
        <Col sm={6} style={{display: 'flex', padding: '20px'}}>
          <Card bg="success" style={{width: '100%'}}>
            <Card.Body>
              <Card.Title style={{color: 'floralwhite'}}>Infor (Oct 2018 - Dec 2021)</Card.Title>
              <Tab.Container id="infor-tabs" defaultActiveKey="overview-infor">
                <Row className="mt-3">
                  <Col sm={4} className="mb-3">
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="overview-infor" className="nav-link-infor">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="accomplishments-infor" className="nav-link-infor">Accomplishments</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="skills-infor" className="nav-link-infor">Skills</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="overview-infor">
                        <ListGroup as="ul" variant="flush">
                          <ListGroup.Item as="li" className="custom-list-item-infor">Web developer that focuses on Angular 7 to 12. Code refactoring, adding new sections, fixing reported bugs during migration of codes from jQuery to Angular 4 to 12</ListGroup.Item>
                          <ListGroup.Item as="li" className="custom-list-item-infor">Perform code reviews, bug tracking and debugging</ListGroup.Item>
                          <ListGroup.Item as="li" className="custom-list-item-infor">Create handling logics to override some in house standard library functionalities to meet specific use cases</ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="accomplishments-infor">
                        <ListGroup as="ul" variant="flush">
                          <ListGroup.Item as="li" className="custom-list-item-infor">Initiated unit test setup of existing codebase</ListGroup.Item>
                          <ListGroup.Item as="li" className="custom-list-item-infor">Primary point person for coordinating issue with our in-house library developers to coordinate and report issues related to our team implementation</ListGroup.Item>
                          <ListGroup.Item as="li" className="custom-list-item-infor">Completed assigned tasks on time without any major defects</ListGroup.Item>
                        </ListGroup>
                      </Tab.Pane>
                      <Tab.Pane eventKey="skills-infor">
                        <div className="skills-row">
                          <h4><Badge bg="primary">HTML5</Badge></h4>
                          <h4><Badge bg="primary">CSS</Badge></h4>
                          <h4><Badge bg="primary">SCSS</Badge></h4>
                          <h4><Badge bg="primary">JAVASCRIPT</Badge></h4>
                          <h4><Badge bg="primary">ANGULAR</Badge></h4>
                          <h4><Badge bg="primary">NODE.JS</Badge></h4>
                          <h4><Badge bg="primary">GIT</Badge></h4>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
            <Card.Img src={inforLogo} variant="bottom" alt="Infor logo" style={{maxHeight: '200px'}}/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;