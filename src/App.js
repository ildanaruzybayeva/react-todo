import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setText("");
    setItems([...items, text]);
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedList = [...items].filter((item, index) => index !== id);
    console.log(items);
    setItems(updatedList);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <p>You have {items.length} todos left</p>
      <input
        type="text"
        aria-label="input-label"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Add a todo
      </button>
      {items.map((item, id) => (
        <li key={id}>
          {item}
          <button onClick={() => deleteItem(id)}>X</button>
        </li>
      ))}
    </div>
  );
}
