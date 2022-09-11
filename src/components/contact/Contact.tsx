import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import emailjs from '@emailjs/browser';

function Contact() {
  const [validated, setValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [toastMsg, setToastMsg] = useState<string>('');
  const [toastVariant, setToastVariant] = useState<string>('');
  const [showToastContainer, setShowToastContainer] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setValidated(false);
    event.preventDefault();
    event.stopPropagation();
    
    const form = event.currentTarget;
    
    if (form.checkValidity() === true) {
      console.log(form);
      setValidated(true);

      const emailObject = {
        name,
        email,
        message
      }

      let [emailJSServiceId, emailJSTemplateId, emailJSPublicKey] = getEmailJsIds();

      emailjs.send(emailJSServiceId, emailJSTemplateId, emailObject, emailJSPublicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToastMsg('Thank you for your message, I will be in touch soon!');
        setToastVariant('success');
        setShowToastContainer(true);

        resetEmailForm();
      }, (err) => {
        console.log('FAILED...', err);
        setToastMsg('Oops! Something went wrong, Please try sending again.');
        setToastVariant('danger');
        setShowToastContainer(true);
      });
    }
  }

  const getEmailJsIds =  (): [string, string, string] => {
    const emailJSServiceId = process.env.REACT_APP_EMAILJS_SERVICEID || '';
    const emailJSTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATEID || '';
    const emailJSPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    return [emailJSServiceId, emailJSTemplateId, emailJSPublicKey];
  }

  const resetEmailForm = () => {
    setValidated(false);
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <Container>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <Card>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control size="lg" type="input" placeholder="Enter your name" required 
                    value={name} onChange={e => setName(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control size="lg" type="email" placeholder="Enter your email" required 
                    value={email} onChange={e => setEmail(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupMsg">
                  <Form.Label>Message</Form.Label>
                  <Form.Control required size="lg" as="textarea" rows={4} placeholder="Enter your message" style={{resize: 'none'}} 
                    value={message} onChange={e => setMessage(e.target.value)} />
                  <Form.Control.Feedback type="invalid">
                    Please enter your message.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" style={{float: 'right'}}>SEND MESSAGE</Button>
                
              </Form>

            </Card.Body>
          </Card>
        </Col>
        <Col sm={2}></Col>
      </Row>

      { showToastContainer && <ToastContainer position="top-end" className="p-3">
        <Toast bg={toastVariant} delay={5000} onClose={() =>  setShowToastContainer(false)} autohide>
          <Toast.Header>
            <strong className="me-auto">Notification Sent</strong>
          </Toast.Header>
          <Toast.Body className="text-white"> {toastMsg} </Toast.Body>
        </Toast>
      </ToastContainer> }
    </Container>
  )
}

export default Contact;