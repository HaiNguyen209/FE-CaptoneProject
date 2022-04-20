import React from 'react';
import { Row, Col } from 'reactstrap';

import SignUpForm from '../components/auth/SignUp';

const SignUp = () => (
  <Row className="justify-content-center">
    <Col xs="10" sm="8" md="6" lg="4" className="shadow-lg mt-5">
      <SignUpForm />
    </Col>
  </Row>
);

export default SignUp;
