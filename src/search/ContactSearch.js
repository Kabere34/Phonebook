import React, { useState, useEffect } from "react";

function SearchComponent(props) {
  const {contact, setContacts}=props

  const [searchterm, setSearch] = React.useState(null);
  const [receivedData, setReceivedData] = React.useState('');


    // React.useEffect(() => {
    //     apiFetch();
    // }, []);


    let apiFetch = async () => {
      console.log(searchterm)
        let response = await fetch(`https://ivy-phonebook.herokuapp.com/phonebook/search/?search=${searchterm}`);
        let data = await response.json();
        console.log(data)
        setReceivedData(data)
        setContacts(data)
        // console.log(data,'data')
    }
    //  console.log("received from search data: ",receivedData )

     const handleSubmit = (e) => {
            e.preventDefault();
            apiFetch()
            // console.log("searching for: ",searchterm.searchterm )
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      
          <input
            type="text"
            placeholder="search"
            name="searchterm"
            onChange={(e) =>
              setSearch( e.target.value,
              )
            }
          ></input>

        <button className="btn btn-primary m-1" type="submit" style={{padding:"2px",width:"fit-content"}}>submit</button>
      </form>


    </div>
  )
}

export default SearchComponent;
