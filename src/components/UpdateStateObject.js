import React, { useState } from 'react';

function ObjectForm() {
    const [formState, setFormState] = useState({});
   
    // Reusable handleChange formula
    const handleChange = ({ target }) => {
      const { name, value } = target;
      setFormState((prev) => ({
        ...prev,
        [name]: value
      }));
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
