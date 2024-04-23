import { useState } from "react";

const AddTask = ({ onAddNote }) => {
  const [note, setNote] = useState("");
  return (
    <div>
      
        <input
          name="note"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button onClick={()=>{
					setNote("")
					onAddNote(note)}}>ADD</button>
      
    </div>
  );
};
export default AddTask