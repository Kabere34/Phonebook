
import './App.css';
import React from 'react'
import CreateContact from './form/Contact_form';
import ContactFetch from './contacts/Contact_display';
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      {/* <CreateContact/> */}

      <ContactFetch/>
    </div>
  )

  }
export default App
