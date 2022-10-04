import React from 'react'

function phonebook() {
  // const [name, setName] = useState("");
  const handleSubmit = event=>{
    event.preventDefault();
    alert('submitted')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>

        <label>First Name</label>
        <input type='text' ></input>

        <label>Last Name</label>
        <input type='text'></input>

        <label>Phone number</label>
        <input type='tel'></input>

        <label>Email</label>
        <input type='email'></input>

        </fieldset>
        <button type='submit'>submit</button>


      </form>
    </div>
  );
}

// const contact_details= ReactDOM.createDetails(document.getElementsById('contact_details));
// details.render(<App/>);



export default phonebook
