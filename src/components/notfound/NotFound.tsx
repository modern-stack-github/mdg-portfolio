import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './notfound.scss';

function NotFound() {
  const notFoundPhoto = require('../../images/not-found-img.png');
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, countDown * 1000);

    const timer = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Container fluid>
      <Row>
        <Col sm={5} style={{textAlign: 'center'}}>
          <img src={notFoundPhoto} alt='profile' style={{
              width: '70%',
            }} className='img-responsive' />
        </Col>
        <Col sm={7} style={{
          marginBottom: '10px',
          fontFamily: 'sans-serif',
          letterSpacing: '1.5px',
          margin: 'auto'}}>
          <Container>
            <div className='text-section'>
              <div style={{
                  fontSize: '50px'
              }}>Oops!</div>
              
              <div style={{
                fontSize: '30px'
                }}>Looks Like that page doesn't exist.</div>

              <div style={{
                fontSize: '30px'
                }}>Redirect in {countDown} seconds</div>

              <div style={{
                fontSize: '30px'
                }}><Link to="/">Back to Homepage</Link></div>

            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;