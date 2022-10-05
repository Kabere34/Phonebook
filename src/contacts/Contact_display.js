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
    <div class="contact_view">
      <h1>All Contacts</h1>
      {contacts ? (
        <div className="container">

          {contacts.map((contact,index)=>(
            <div className='row'>
            <div className='col-sm-2 table_input'>{contact.firstName}</div>
            <div className='col-sm-2 table_input' >{contact.lastName}</div>
            <div className='col-sm-2 table_input'>{contact.phoneNumber}</div>
            <div className='col-sm-2 table_input'>{contact.email}</div>
            </div>




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
