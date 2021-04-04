import React, { useState, useCallback, useRef } from 'react';
import { FiLock } from 'react-icons/fi';

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
        oldPassword: Yup.string().notRequired(),
        password: Yup.string()
          .notRequired()
          .min(6, 'A senha deve ter pelo menos 6 caracteres'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'As senhas devem ser iguais',
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
        <AlertContent data-testid="content-resetpassword">
          <div>
            <h2>Senha Redefinida</h2>
            <Button onClick={handleAlert}>
              <FiLock size={35} />
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
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              dataTestid="input-oldPassword"
              label="Password"
              name="password"
              placeholder="Digite a senha atual"
              type="password"
            />
            <Input
              dataTestid="input-newPassword"
              label="Password"
              name="password"
              placeholder="Digite sua nova senha"
              type="password"
            />
            <Input
              dataTestid="input-confirmPassword"
              label="Password"
              name="password"
              placeholder="Digite sua nova senha"
              type="password"
            />
            <Button type="submit">Reset Password</Button>
            <div className="divider">Or</div>
            <button className="buttonSocialGoogle" type="button">
              <GoogleIcon />
              Sign In with Google
            </button>
            <div>
              Now <b>Inviser</b> <Link to="/">Sign In</Link>
            </div>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
