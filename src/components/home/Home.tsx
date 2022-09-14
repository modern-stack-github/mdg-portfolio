
import './home.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const profilePhoto = require('../../images/portfolio-picture.jpg');

  return (
    <Container fluid>
      
      <Row style={{
        alignItems: 'center',
        color: '#18160a',
        marginBottom: '10px',
        letterSpacing: '0.5px'
      }}>
        <Col sm={7}>
          <Container style={{
            textAlign: 'end'
          }}>
            <div className='intro-section'>
              <div style={{
                fontSize: '50px'
              }}>
                Hello!
              </div>
              <div style={{
                fontSize: '80px'
              }}>
                I am Marc
              </div>
              <div style={{
                fontSize: '30px'
              }}>
                A Frontend/Full-Stack Developer with a keen eye to details
              </div>
            </div>
          </Container>
        </Col>

        <Col sm={5} style={{textAlign: 'center'}}>
          <img src={profilePhoto} alt='profile' style={{
            width: '80%',
            borderRadius: '40%'
          }} className='img-responsive' />
        </Col>
      </Row>
    </Container>
  )
}

export default Home;