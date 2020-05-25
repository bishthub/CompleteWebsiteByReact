import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';
import FooterPage from '../../components/footer/footer.component';


const HomePage = () => (
  <HomePageContainer>
    <Directory />
    <FooterPage/>
  </HomePageContainer>
);

export default HomePage;
