import React, { useState } from 'react';

function ObjectForm() {
    const [formState, setFormState] = useState({});
   
    // Reusable handleChange formula, uses the name of an input to update a property in an object with the value of the input
    const handleChange = ({ target }) => {
      const { name, value } = target;
      
      //Callback function and spread syntax '...' to update state
      setFormState((prev) => ({
        ...prev,
        [name]: value // Square brackets here are important for allowing a dynamic property name (Computed Property Name)
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formState, '', 2)); // alert as placeholder
      };
   
    return (
      <div>
        <h1>State Object Form</h1>
        <p>Form that updates an object in state with a reusuable handleChange</p>
        <form>
            <input
                value={formState.firstName}
                onChange={handleChange}
                name='firstName'
                type='text'
            />
            <input
                value={formState.surname}
                onChange={handleChange}
                name='surname'
                type='text'
            />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
        <div>
            <h2>Object output:</h2> 
            <p>First Name: {formState.firstName}</p>
            <p>Surname: {formState.surname}</p>
        </div>
      </div>
    );
  }

  export default ObjectForm;
