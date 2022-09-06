import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUser, faBriefcase, faAddressCard, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navigation() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(null);
  const cvFile = require('../downloads/Marc_De_Guzman_CV.pdf');
  const myLogo = require('../images/mdg-logo.png');

  useEffect(() => {
    if (location) {
      setCurrentPath(location.pathname);
    }
  }, [location])

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" bg="primary">
      <Container fluid>
        <Navbar.Brand href="/" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center'
        }}>
          <img
            alt="mdg"
            src={myLogo}
            width="35"
            height="35"
            className="d-inline-block"
          />{' '}
          MARC DE GUZMAN
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link href="/" active={currentPath === '/'}> <FontAwesomeIcon size='1x' icon={faHouseChimney} /> HOME </Nav.Link>
            <Nav.Link href="/about" active={currentPath === '/about'}> <FontAwesomeIcon size='1x' icon={faUser} /> ABOUT </Nav.Link>
            <Nav.Link href="/experience" active={currentPath === '/experience'}> <FontAwesomeIcon size='1x' icon={faBriefcase} /> EXPERIENCE </Nav.Link>
            <Nav.Link href="/contact"> <FontAwesomeIcon size='1x' icon={faAddressCard} /> CONTACT </Nav.Link>
            <Nav.Link href={cvFile} target="_blank"> <FontAwesomeIcon size='1x' icon={faFileLines} /> MY RESUME </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;