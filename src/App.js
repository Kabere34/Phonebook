
import './App.css';
import React from 'react'
import CreateContact from './form/Contact_form';
import ContactFetch from './contacts/Contact_display';
import SearchComponent from './search/ContactSearch';
import DeleteContact from './contact/DeleteContact';
import EditContact from './contacts/EditContact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>

      <Router>
      <Switch>
        <Route exact path="/ContactFetch" component={ContactFetch}/>
        <Route exact path="/CreateContact" component={CreateContact}/>
        <Route exact path="/SearchComponent" component={SearchComponent}/>
        <Route exact path="/DeleteContact" component={DeleteContact}/>
      </Switch>

      </Router>


      {/* <CreateContact/> */}
      {/* <ContactFetch/> */}
      {/* <SearchComponent/> */}
      {/* <DeleteContact/> */}
      <EditContact/>
    </div>
  )

  }
export default App
