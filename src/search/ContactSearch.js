import React, { useState, useEffect } from "react";
 const searchterm ={
    term:''
 }
function SearchComponent() {

  const [searchterm, setSearch] = React.useState(null);
  const [receivedData, setReceivedData] = React.useState('');


    React.useEffect(() => {
        apiFetch();
    }, []);


    let apiFetch = async () => {
        let response = await fetch(`http://127.0.0.1:8000/phonebook/search/?search=${searchterm.searchterm}`);
        let data = await response.json();
        setReceivedData(data)
        console.log(data,'data')
    }
     console.log("received from search data: ",receivedData )

     const handleSubmit = (e) => {
            e.preventDefault();
            apiFetch()
            console.log("searching for: ",searchterm.searchterm )
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <fieldset>

          <input
            type="text"
            placeholder="search"
            name="searchterm"
            onChange={(e) =>
              setSearch({

                searchterm: e.target.value,
              })
            }
          ></input>
        </fieldset>
        <button className="btn btn-primary m-1" type="submit" style={{padding:"2px",width:"fit-content"}}>submit</button>
      </form>

      {receivedData ? (

        <div className="container">

        {receivedData.map((contact, index) =>(

          <div className="row">
            <div>{contact.id}</div>
            <div className="col-sm-3">  {contact.firstName}</div>
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

export default SearchComponent;
