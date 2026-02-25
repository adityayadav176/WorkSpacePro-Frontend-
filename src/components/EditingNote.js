import React, { useContext, useState, useEffect } from 'react';
import "./Css/noteEditing.css";
import noteContext from '../context/notes/noteContext';
import { toast } from "react-toastify";

function EditingNote() {

  const context = useContext(noteContext);
  const { setUpdateNote, currentNote, editNote } = context;

  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "general"
  });

  // Load selected note into form
  useEffect(() => {
    if (currentNote) {
      setNote({
        etitle: currentNote.title,
        edescription: currentNote.description,
        etag: currentNote.tag
      });
    }
  }, [currentNote]);

  // Handle input change
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  // Update note
  const handleUpdate = () => {
    if (!currentNote) return;

    const success = editNote(
      currentNote._id,
      note.etitle,
      note.edescription,
      note.etag
    );

    if (success) {
      toast.success("Changes saved");
    } else {
      toast.error("Failed to add task");
    }

    setUpdateNote(false);
  };

  return (
    <>
      <div className="modalOverlayUpdate">
        <div className="modalBoxUpdate">
          <h2>Update The Existing Note</h2>

          <input
            type="text"
            placeholder="Enter note title..."
            minLength={3}
            required
            name="etitle"
            value={note.etitle}
            onChange={handleChange}
          />

          <select
            className="modalInputUpdate"
            name="etag"
            value={note.etag}
            onChange={handleChange}
          >
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="ideas">Ideas</option>
            <option value="important">Important</option>
          </select>

          <textarea
            placeholder="Write description..."
            className="modalTextareaUpdate"
            name="edescription"
            value={note.edescription}
            onChange={handleChange}
          />

          <div className="modalButtonsUpdate">
            <button
              className="saveBtnUpdate"
              onClick={handleUpdate}
              disabled={note.etitle.length < 3}
            >
              Update Note
            </button>

            <button
              className="cancelBtnUpdate"
              onClick={() => setUpdateNote(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditingNote;