import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setText("");
    setItems([...items, text]);
  };

  const deleteItem = index => {
    const updatedList = [...items].filter(item => item.index !== index);
    setItems(updatedList);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <p>You have {items.length} todos left</p>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">
        Add a todo
      </button>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={deleteItem}>X</button>
        </li>
      ))}
    </div>
  );
}
