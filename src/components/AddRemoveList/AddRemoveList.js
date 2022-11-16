import React, { useState } from "react";
import ItemList from "./ItemList";

const listContents = ['red', 'yellow', 'green', 'blue']

export default function ChosenItems() {
  const [selected, setSelected] = useState([]);

  const addItem = (item) => {
    setSelected([item, ...selected])
   };

  const removeItem = (targetIndex) => {
    setSelected(selected.filter((item, index) => index !== targetIndex ))
  };

  return (
    <div>
      <h1>Add and Remove List</h1>
      <h2>Choices</h2>
      <ItemList items={listContents} onItemClick={addItem} />
      {selected.length > 0 && <h2>Chosen</h2>}
      <ul>
        {selected.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
