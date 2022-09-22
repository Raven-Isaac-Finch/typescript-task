import React from 'react';
import Contact from './components/Contact';
import ExplanationPage from './components/ExplanationPage';
import Footer from './components/Footer';
import Header from './components/Header';
import MidStripe from './components/MidStripe';
import Qualities from './components/Qualities';
import References from './components/References';

function App() {
  return (
    <>
      <Header />
      <Qualities />
      <MidStripe />
      <ExplanationPage />
      <References />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
