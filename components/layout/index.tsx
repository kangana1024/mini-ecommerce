import React from 'react';
import Footer from './footer';
import NavBar from './nav';
const LayoutWrapper = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  )
};

export default LayoutWrapper;