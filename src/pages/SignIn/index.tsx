import React, { useState, useCallback, useRef } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getErrorsValidation from '../../utils/validationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { AlertContent, Container, Content, SliderContent } from './style';
import { ReactComponent as GoogleIcon } from '../../assets/googleIcon.svg';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [logged, setLogged] = useState(false);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Este campo não pode ser vazio')
          .email('O e-mail está incorreto'),
        password: Yup.string().min(
          6,
          'A senha não pode ter menos de 6 caracteres',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setLogged(true);
    } catch (err) {
      const errors = getErrorsValidation(err);

      formRef.current?.setErrors(errors);

      setLogged(false);
    }
  }, []);

  const handleAlert = useCallback(() => {
    setLogged(!logged);
  }, [logged]);

  return (
    <>
      {logged && (
        <AlertContent data-testid="content-signin">
          <div>
            <h2>Login Realizado</h2>
            <Button onClick={handleAlert}>
              <FiLogIn size={35} />
            </Button>
          </div>
        </AlertContent>
      )}
      <Container>
        <SliderContent>
          <Slider />
        </SliderContent>
        <Content>
          <a href="test">Invision</a>
          <h1>Welcome to Invision</h1>
          <Form data-testid="form-signin" ref={formRef} onSubmit={handleSubmit}>
            <Input
              dataTestid="input-email"
              label="Users name or Email"
              name="email"
              placeholder="carolinagalvaosantos@gmail.com"
              type="text"
            />
            <Input
              dataTestid="input-password"
              label="Password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <Link to="/resetpassword">Forgot password?</Link>
            <Button type="submit">Sign In</Button>
            <div className="divider">Or</div>
            <button className="buttonSocialGoogle" type="button">
              <GoogleIcon />
              Sign In with Google
            </button>
            <div>
              New <b>Invision</b> <Link to="/signup">Create Account</Link>
            </div>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
