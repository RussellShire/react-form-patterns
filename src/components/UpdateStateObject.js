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
          name='password'
          type='text'
        />
      </form>
      <div>
        <h2>First Name: {formState.firstName}</h2>
        <h2>Surname: {formState.surname}</h2>
      </div>
      </div>
    );
  }

  export default ObjectForm;
  