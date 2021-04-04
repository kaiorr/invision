import React from 'react';
import { AlertContent, Container, Content, SliderContent } from './style';

const SignIn: React.FC = () => (
  <>
    <AlertContent> </AlertContent>
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

export default SignIn;
