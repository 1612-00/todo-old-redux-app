import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        complete: false,
      };

      addTodo(newTodo);
      setTitle("");
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name="title" onChange={onTitleChange} value={title} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
