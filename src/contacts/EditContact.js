import React,{useState, useEffect}  from 'react'
import axios from "axios";
import "../form/contact_form.css"
import { useNavigate, useParams } from 'react-router-dom';

const EditContactUrl="http://127.0.0.1:8000/phonebook/contactEdit/${id}/"
const editcontactPost=(contact)=> axios.post(EditContactUrl,contact)

const initialstate ={
  firstName :'',
  lastName : '',
  phoneNumber : '',
  email : ''
  }

 function EditContact() {
  const [newContact, setNewContact] = React.useState(initialstate)

  const handleSubmit = (e) => {
    e.preventDefault();
    editcontactPost(newContact)
    console.log("dispatch",newContact)
}

  return (
    <div>EditContact
      <div className='contact_form'>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='form_title'>
            <div className='contact_title'><h2>Add Contact</h2></div></div>




        <label>First Name</label>
        <input type='text' name='firstName' onChange={(e) =>
              setNewContact({
                ...newContact,
                [e.target.name]: e.target.value,
              })
            } ></input>

        <label>Last Name</label>
        <input type='text' name='lastName' onChange={(e) =>
              setNewContact({
                ...newContact,
                [e.target.name]: e.target.value,
              })
            } ></input>

        <label>Phone number</label>
        <input type='tel' name='phoneNumber' onChange={(e) =>
              setNewContact({
                ...newContact,
                [e.target.name]: e.target.value,
              })
            } ></input>

        <label>Email</label>
        <input type='email' name='email' onChange={(e) =>
              setNewContact({
                ...newContact,
                [e.target.name]: e.target.value,
              })
            } ></input>

        </fieldset>
        <div className='button_container'>
        <button type='submit'>submit</button>
        </div>



      </form>
    </div>

    </div>
  )
}

export default EditContact;



