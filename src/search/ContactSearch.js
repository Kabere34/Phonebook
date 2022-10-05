// import React,{useState, useEffect} from 'react'
// // import { useDispatch } from "react-redux";
// import axios from "axios";

// const searchContactUrl =' http://127.0.0.1:8000/phonebook/search/?search={}'
// const searchcontactPost = ()=> axios.post(searchContactUrl)


// // const contactSearch ={
// // firstName :'',
// // lastName : '',
// // phoneNumber : '',
// // email : ''
// // }

// function SearchContact() {

//     const [search, setSearch] = React.useState('')

//     // const dispatch = useDispatch()

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         searchcontactPost(newContact)
//         console.log("dispatch",newContact)
//     }




//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <fieldset>

//         <label>First Name</label>
//         <input type='text' name='firstName' onChange={(e) =>
//               setNewContact({
//                 ...newContact,
//                 [e.target.name]: e.target.value,
//               })
//             } ></input>
//         </fieldset>
//         <button type='submit'>search</button>


//       </form>
//     </div>
//   )
// }

// export default SearchContact;
