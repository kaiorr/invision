import React, { useState, useCallback, useRef } from 'react';
import { FiUser } from 'react-icons/fi';

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
        name: Yup.string().required('Este campo não pode ser vazio'),
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
        <AlertContent>
          <div>
            <h2>Cadastro Realizado</h2>
            <Button type="submit" onClick={handleAlert}>
              <FiUser size={35} />
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
          <h1>Getting Started</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              name="name"
              placeholder="Carolina Galvão dos Santos Zaglia"
              type="text"
            />
            <Input
              label="Users name or Email"
              name="email"
              placeholder="carolinagalvaosantos@gmail.com"
              type="text"
            />
            <Input
              label="Password"
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <Button type="submit">Sign Up</Button>
            <div className="divider">Or</div>
            <button className="buttonSocialGoogle" type="button">
              <GoogleIcon />
              Sign In with Google
            </button>
            <div>
              By signing up, you agree to <b>Invision</b>{' '}
              <a href="test">Terms of Conditions</a> and{' '}
              <a href="test">Privacy Policy</a>
            </div>
            <div>
              Already on <b>Invision</b>? <Link to="/">Log in</Link>
            </div>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
