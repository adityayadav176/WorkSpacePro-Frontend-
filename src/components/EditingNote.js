import React from 'react'
import "./Css/noteEditing.css"

function EditingNote() {
  return (
    <>
        <div className="modalOverlay">
      <div className="modalBox">
        <h2>New Note</h2>

        <input
          type="text"
          placeholder="Project Ideas"
          className="modalInput"
        />

        <select className="modalInput">
          <option>Ideas</option>
          <option>Work</option>
          <option>Personal</option>
        </select>

        <textarea
          placeholder="Write description..."
          className="modalTextarea"
        />

        <div className="modalButtons">
          <button className="saveBtn">Save</button>
          <button className="cancelBtn" >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditingNote
