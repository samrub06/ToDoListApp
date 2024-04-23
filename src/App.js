import { useState } from "react";

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const App2 = () => {
  const [note, setNote] = useState("");
  const [todos, setTodos] = useState(initialTasks);
  const [noteIdToEdit, setNoteIdToEdit] = useState();
  const [editedNoteText, setEditedNoteText] = useState("");

  const nextId = todos.length;

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: nextId,
      text: note,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newNote]);
    setNote("");
  };

  const handleEditNote = (id) => {
    const noteSelected = todos.find((note) => note.id === id);
    setNoteIdToEdit(noteSelected.id);
    setEditedNoteText(noteSelected.text);
  };

  const handleDeleteNote = (id) => {
    const noteSelected = todos.filter((note) => note.id !== id);
    setTodos(noteSelected);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((note) =>
      note.id === noteIdToEdit ? { ...note, text:editedNoteText } : note
    );
    setTodos(updatedTodos);
    setNoteIdToEdit(null);
  };

  return (
    <div>
      <h1> TO DO APP </h1>
      <form>
        <input
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button onClick={handleAddNote}>ADD</button>
      </form>
      <ul>
        {todos?.map((note, idx) => (
          <div key={idx}>
            {noteIdToEdit !== note.id ? (
              <li key={note.id}>
                {note.text}
                <button onClick={() => handleEditNote(note.id)}>EDIT</button>
                <button onClick={() => handleDeleteNote(note.id)}>
                  DELETE
                </button>
              </li>
            ) : (
              <>
                <input
                  value={editedNoteText}
                  onChange={(e) => setEditedNoteText(e.target.value)}
                />
                <button onClick={() => setNoteIdToEdit(null)}>CANCEL</button>
                <button onClick={(e) => handleSaveNote(e)}>SAVE</button>
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default App2;
