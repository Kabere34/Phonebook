
import './App.css';
import React from 'react'
import Contact_form from './form/Contact_form';
import ContactFetch from './contacts/Contact_display';
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <Contact_form/>
      <ContactFetch/>
    </div>
  )
}

export default App
