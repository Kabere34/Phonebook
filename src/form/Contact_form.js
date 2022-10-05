import React,{useState, useEffect} from 'react'
// import { useDispatch } from "react-redux";
import axios from "axios";
import "./contact_form.css"

const newContactUrl ='http://127.0.0.1:8000/phonebook/contactAdd'
const newcontactPost = (contact)=> axios.post(newContactUrl,contact)


const initialstate ={
firstName :'',
lastName : '',
phoneNumber : '',
email : ''
}

function CreateContact() {

    const [newContact, setNewContact] = React.useState(initialstate)

    // const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        newcontactPost(newContact)
        console.log("dispatch",newContact)
    }




  return (
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
  )
}

export default CreateContact;
