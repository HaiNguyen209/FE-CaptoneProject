import React, { useState } from 'react';
import * as yup from 'yup';
import {
  Form, FormGroup, Label, Input, Button, Alert,
} from 'reactstrap';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useMutation } from 'react-query';
import { Link, useHistory } from 'react-router-dom';

import { api } from '../../helpers/axios';
import Toast from '../../helpers/toast';

const schema = yup.object().shape({
  email: yup.string().email().max(127).required(),
  password: yup.string().min(6).max(127).required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must be match'),
  fullName: yup.string().min(6).max(127).required(),
});

const Header = styled.div`
    text-align: center;
    margin: 10px;
    color: #007bff;
    font-weight: bold;
    font-size: 36px;
`;

const SignUp = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const showError = (type) => errors && errors[type] && <p className="text-danger">{errors[type].message}</p>;

  const { mutate: handleSignUp, isLoading } = useMutation(
    ({
      email, password, confirmPassword, fullName,
    }) => api.post('/sign-up', {
      email, password, confirmPassword, fullName,
    }),
    {
      onSuccess: () => {
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully',
        });
        history.push('/sign-in');
      },
      onError: (error) => {
        setErrorMessage(`${error.response.data ? error.response.data.message : error.message}`);
      },
    },
  );

  const onSubmit = ({
    email, password, confirmPassword, fullName,
  }) => {
    handleSignUp({
      email, password, confirmPassword, fullName,
    });
  };

  return (
    <Form>
      <Header>
        <p>Registration</p>
      </Header>

      <FormGroup className="mb-3">
        <Label className="font-weight-bold">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email..."
          innerRef={register}
          onChange={() => setErrorMessage('')}
        />
        {showError('email')}
      </FormGroup>
      <FormGroup className="mb-3">
        <Label className="font-weight-bold">Password</Label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password..."
          innerRef={register}
          onChange={() => setErrorMessage('')}
        />
        {showError('password')}
      </FormGroup>
      <FormGroup className="mb-3">
        <Label className="font-weight-bold">Confirm Password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password..."
          innerRef={register}
          onChange={() => setErrorMessage('')}
        />
        {showError('confirmPassword')}
      </FormGroup>
      <FormGroup className="mb-3">
        <Label className="font-weight-bold">User Name</Label>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your name..."
          innerRef={register}
          onChange={() => setErrorMessage('')}
        />
        {showError('fullName')}
      </FormGroup>
      {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
      <Button
        onClick={handleSubmit(onSubmit)}
        className="btn btn-info btn-block mb-2"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Sign up'}
      </Button>
      <div className="text-center mb-3">
        <Link to="/sign-in">Have an account already? login</Link>
      </div>
    </Form>
  );
};

export default SignUp;
