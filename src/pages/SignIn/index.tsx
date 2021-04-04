import React, { useState, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { AlertContent, Container, Content, SliderContent } from './style';
import { ReactComponent as GoogleIcon } from '../../assets/googleIcon.svg';

const SignIn: React.FC = () => {
  const [logged, setLogged] = useState(false);

  const handleAlert = useCallback(() => {
    setLogged(!logged);
  }, [logged]);

  return (
    <>
      {logged && (
        <AlertContent>
          <div>
            <h2>Login Realizado</h2>
            <button type="submit" onClick={handleAlert}>
              <FiLogIn size={55} />
            </button>
          </div>
        </AlertContent>
      )}
      <Container>
        <SliderContent> </SliderContent>
        <Content>
          <a href="test">Invision</a>
          <h1>Welcome to Invision</h1>
          <form>
            <input
              name="email"
              placeholder="carolinagalvaosantos@gmail.com"
              type="text"
            />
            <input
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <a href="test">Forgot password?</a>
            <button type="submit">Sign In</button>
            <div className="divider">Or</div>
            <button className="buttonSocialGoogle" type="button">
              <GoogleIcon />
              Sign In with Google
            </button>
            <div>
              New <b>Invision</b> <a href="/signup">Create Account</a>
            </div>
          </form>
        </Content>
      </Container>
    </>
  );
};

export default SignIn;
