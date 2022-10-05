import React, { useState, useEffect } from "react";
 const searchterm ={
    term:''
 }
function SearchComponent() {

  const [searchterm, setSearch] = React.useState(null);
  const [receivedData, setReceivedData] = React.useState('');

  const searchUrl =
    `http://127.0.0.1:8000/phonebook/search/?search=${searchterm}`;


    React.useEffect(() => {
        setContacts();
    }, []);

    // const url = `http://127.0.0.1:8000/phonebook/searching/?search=${searchterm.searchterm}`

    let setContacts = async () => {
        let response = await fetch(`http://127.0.0.1:8000/phonebook/search/?search=${searchterm.searchterm}`);
        let data = await response.json();
        setReceivedData(data)
        console.log(data,'data')
    }
     console.log("received from search data: ",receivedData )

     const handleSubmit = (e) => {
            e.preventDefault();
            setContacts()
            console.log("searching for: ",searchterm.searchterm )
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>
          <label>search</label>
          <input
            type="text"
            name="searchterm"
            onChange={(e) =>
              setSearch({

                searchterm: e.target.value,
              })
            }
          ></input>
        </fieldset>
        <button type="submit">submit</button>
      </form>

      {receivedData ? (

        <div className="container">

        {receivedData.map((contact, index) =>(

          <div className="row">
            <div className="col-sm-3">{contact.id}   ---{contact.firstName}</div>
            <div className="col-sm-3">{contact.lastName}</div>
            <div className="col-sm-3">{contact.phoneNumber}</div>
            <div className="col-sm-3">{contact.email}</div>
          </div>
        ))}
        </div>

      ):(
        <div></div>
      )
    }
    </div>
  )
}

export default SearchComponent
