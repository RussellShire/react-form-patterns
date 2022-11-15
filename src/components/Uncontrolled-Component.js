import React from "react";

// A component that won't run vaildation until user submits form
// This is achieved by speaking directly to the DOM via ref rather than saving userInput into state (which would validate after each keypress)
// See https://www.codecademy.com/paths/advanced-react-redux-sp/tracks/advanced-react-redux-sp-react/modules/react-additional-react-basics/articles/what-are-uncontrolled-components

function PhoneNumberForm() {
  const numberRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const number = numberRef.current.value;

    if (!Number.isNaN(Number(number))) {
      alert('Error: Only numbers allowed.')
    }
    else if (number.length <= 10) {
      alert('Error: Number length exceeded 10 digits.')
    }
    else {
      alert(`Sending confirmation code to ${number}.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h1>Uncontrolled Component</h1>
      <p>A component that won't run vaildation until after user submits form</p>
      <label>
        Phone Number:
        <input type="tel" ref={numberRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default PhoneNumberForm;
