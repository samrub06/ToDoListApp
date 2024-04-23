import React, { useState } from "react";
import AddTask from "./AddTask";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", completed: true },
  { id: 1, text: "Watch a puppet show", completed: false },
  { id: 2, text: "Lennon Wall pic", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTasks);
  const [noteIdToEdit, setNoteIdToEdit] = useState();
  const [editedNoteText, setEditedNoteText] = useState("");

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

  const handleEditNote = (id) => {
    const noteSelected = todos.find((note) => note.id === id);
    if (noteSelected) {
      setNoteIdToEdit(noteSelected.id);
      setEditedNoteText(noteSelected.text);
    }
  };

  const handleDeleteNote = (id) => {
    const noteSelected = todos.filter((note) => note.id !== id);
    setTodos(noteSelected);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((note) =>
      note.id === noteIdToEdit ? { ...note, text: editedNoteText } : note
    );
    setTodos(updatedTodos);
    setNoteIdToEdit(null);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((note) =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1> TO DO APP </h1>
      <AddTask onAddNote={handleAddNote} />
      <ul>
        {todos?.map((note, idx) => (
          <li key={idx}>
            <input
              name="inputCheckbox"
              type="checkbox"
              checked={note.completed}
              onChange={() => {
                handleToggleComplete(note.id);
              }}
            />
            {noteIdToEdit !== note.id ? (
              <>
                {note.text}
                <button onClick={() => handleEditNote(note.id)}>EDIT</button>
                <button onClick={() => handleDeleteNote(note.id)}>
                  DELETE
                </button>
              </>
            ) : (
              <>
                <input
                  name="inputNote"
                  id={idx}
                  value={editedNoteText}
                  onChange={(e) => setEditedNoteText(e.target.value)}
                />
                <button onClick={() => setNoteIdToEdit(null)}>CANCEL</button>
                <button onClick={(e) => handleSaveNote(e)}>SAVE</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
