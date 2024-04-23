import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", completed: true },
  { id: 1, text: "Watch a puppet show", completed: false },
  { id: 2, text: "Lennon Wall pic", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTasks);
 
  const nextId = todos.length;

  const handleAddNote = (note) => {
    const newNote = {
      id: nextId,
      text: note,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newNote]);
  };

  const handleChange = (task) => {
   const todoUpdated = todos?.map(note => {
    if (note.id === task.id) {
      return task;
    } else {
      return note;
    }
   })
   setTodos(todoUpdated)
  };

  const handleDeleteNote = (id) => {
    setTodos(todos.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1> TO DO APP </h1>
      <AddTask onAddNote={handleAddNote} />
      <TaskList
        todos={todos}
        onChange={handleChange}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default App;
