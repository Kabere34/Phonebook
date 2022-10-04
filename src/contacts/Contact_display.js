import React,{useState,useEffect} from 'react'
import "./contact_display.css"

function Contact_display() {

  const[contacts, setContacts] = React.useState(null);

    React.useEffect(() => {
        getContacts();
    }, []);

    let getContacts = async () => {
        let response = await fetch('http://127.0.0.1:8000/phonebook/contactView');
        let data = await response.json();
        setContacts(data)
    }
     console.log("fetched data: ", contacts)

  return (
    <div>
      {contacts ? (
        <div className="container">

          {contacts.map((contact,index)=>(
            <div className='row'>
              <div className='col-sm-3'>{contact.firstName}</div>
              <div className='col-sm-3'>{contact.lastName}</div>
              <div className='col-sm-3'>{contact.phoneNumber}</div>
              <div className='col-sm-3'>{contact.email}</div>

              </div>


          ))}

       </div>
      ):(
        <div>Loading...</div>
      )
    }

    </div>

  )
}

export default Contact_display;
