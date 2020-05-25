import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import FooterPage from '../../components/footer/footer.component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <div>
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
    
  </SignInAndSignUpContainer>
  <FooterPage/>
  </div>
);

export default SignInAndSignUpPage;
