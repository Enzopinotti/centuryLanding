import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PropertyInfo from './components/PropertyInfo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './assets/styles/app.css';
import './assets/styles/fonts.css';
import EnConstruccion from './components/EnContruccion';
import ThankYou from './components/ThankYou';

function App() {
  const location = useLocation();
  const getAppClassName = () => {
    if (location.pathname === '/thank-you') {
      return 'App thank-you-background';
    }
    return 'App default-background';
  };
  return (
    <div className={getAppClassName()}>
      <Header />
      <Routes>
        <Route path="/" element={<EnConstruccion />} />
        <Route path="/testing" element={
          <main>
            <ContactForm />
            <PropertyInfo />
          </main>
        } />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;