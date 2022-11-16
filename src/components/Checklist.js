import React, { useState } from 'react';

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
 
function Checklist() {
  const [selected, setSelected] = useState([]);
 
  const toggleSelection = ({target}) => {
    const clickedSelection = target.value;
    setSelected((prev) => {
     // check if clicked item is already selected
      if (prev.includes(clickedSelection)) {
        // filter the clicked item out of state
        return prev.filter(t => t !== clickedSelection);
      } else {
        // add the clicked item to our state
        return [clickedSelection, ...prev];
      }
    });
  };
 
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'left'}}>
      <h1>Check list example:</h1>
      {options.map(option => (
        <div style={{display: 'inline-flex'}}>  
            <h2>{option}</h2>
            <button value={option} onClick={toggleSelection} key={option}>
                {selected.includes(option) ? "Remove " : "Add "}
            </button>
        </div>
      ))}
      <h3>Your selection: {selected.join(", ")}</h3>
    </div>
  );
}

export default Checklist
