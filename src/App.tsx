import React from 'react';
import Contact from './components/sections/Contact';
import ExplanationPage from './components/sections/ExplanationPage';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import MidStripe from './components/sections/MidStripe';
import Qualities from './components/sections/Qualities';
import References from './components/sections/References';

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
