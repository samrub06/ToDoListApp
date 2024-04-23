import { useState } from "react";

const Task = ({ note, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editNoteText, setEditNoteText] = useState("");
  return (
    <div>
      <input
        name="inputCheckbox"
        type="checkbox"
        checked={note.completed}
        onChange={(e) => {
          onChange({
            ...note,
            completed: e.target.checked,
          });
        }}
      />
      {isEditing === false ? (
        <>
          {note.text}
          <button onClick={() => setIsEditing(true)}>EDIT</button>
          <button onClick={() => onDelete(note.id)}>DELETE</button>
        </>
      ) : (
        <>
          <input
            name="inputNote"
            value={editNoteText}
            onChange={(e) => setEditNoteText(e.target.value)}
          />
          <button onClick={() => setIsEditing(false)}>CANCEL</button>
          <button
            onClick={() => {
              onChange({
                ...note,
                text: editNoteText,
              });
              setIsEditing(false);
            }}
          >
            SAVE
          </button>
        </>
      )}
    </div>
  );
};

const TaskList = ({ todos, onChange, onDelete }) => {
  return (
    <div>
      <ul>
        {todos?.map((note, idx) => (
          <li key={idx}>
            <Task note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
