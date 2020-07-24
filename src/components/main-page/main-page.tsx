import React from 'react';
import Body from './body';
import Header from './header';
import Footer from './footer';
import '../../styles/main.scss'

function MainPage() {
  return (
    <div className="content">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default MainPage;