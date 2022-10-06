import React, { useState, useEffect } from "react";
import "./contact_display.css";
// import Button from '@material-ui/core/Button';
import SearchComponent from "../search/ContactSearch";

import { Link } from "react-router-dom";

function ContactDisplay() {
  const [contacts, setContacts] = React.useState(null);

  React.useEffect(() => {
    getContacts();
  }, []);

  let getContacts = async () => {
    let response = await fetch("http://127.0.0.1:8000/phonebook/contactView");
    let data = await response.json();
    setContacts(data);
  };
  console.log("fetched data: ", contacts);

  return (
    <div className='contact_view'>
      <div className="container">
      <div className="row">
      <div className="col-sm-8">

      </div>
      <div className="col-sm-4"></div>

      </div>
      </div>

      {/* menu bar to each page */}
      <div className='menu-barContainer'>
        <div class='menu-bar'>
          {/* links to pages */}

          {/* <span>All contacts</span> */}
          <Link to='/add-contact'>
            <span>Add contact</span>
          </Link>



          {/* <Link to='/SearchComponent'>
            <span>SearchComponent</span>
          </Link> */}

          <span></span>

        </div>
        <SearchComponent/>
      </div>

      <h1 className="text-center">Contacts</h1>

      {contacts ? (
        <div className='container'>
          {" "}
          <table className="table table-stripped">
            <tr>
              <th>S.No</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
            {contacts.map((contact, index) => (
              <tr>
                <td>{contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
              </tr>

              // <div className='row'>
              //   <div className='col-sm-2 table_input'>{contact.firstName}</div>
              //   <div className='col-sm-2 table_input'>{contact.lastName}</div>
              //   <div className='col-sm-2 table_input'>{contact.phoneNumber}</div>
              //   <div className='col-sm-2 table_input'>{contact.email}</div>
              //   <div className='col-sm-4 table_input'>
              //     <div className='button_links'></div>
              //     <Link to='/edit-contact'>
              //       <button>Edit</button>
              //     </Link>

              //     {/* <button>Delete</button> */}
              //   </div>
              // </div>

              // <table>
              //   <tr>
              //   <th>S.No</th>
              //   <th>FirstName</th>
              //   <th>LastName</th>
              //   <th>Phone Number</th>
              //   <th>Email</th>
              //   </tr>

              //   <tr>

              //     <td>{contact.id}</td>
              //     <td>{contact.firstName}</td>
              //     <td>{contact.lastName}</td>
              //     <td>{contact.phoneNumber}</td>
              //     <td>{contact.email}</td>
              //   </tr>
              // </table>
            ))}{" "}
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ContactDisplay;
