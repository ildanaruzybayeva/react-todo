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

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">
        Add a todo
      </button>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
