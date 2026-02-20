import React, {useContext} from 'react'
import "./Css/noteEditing.css"
import noteContext from '../context/notes/noteContext'

function EditingNote(props) {
  const context = useContext(noteContext);
  const {setUpdateNote } = context;
  return (
    <>
      <div className="modalOverlayUpdate">
        <div className="modalBoxUpdate">
          <h2>Update The Existing Note</h2>

          <input type="text" placeholder='Enter note title...' minLength={3}  required  name='etitle' />

          <select className="modalInputUpdate" name='etag'>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="ideas">Ideas</option>
            <option value="important">Important</option>
          </select>

          <textarea
            placeholder="Write description..."
            className="modalTextareaUpdate"
            name='edescription'
          />

          <div className="modalButtonsUpdate">
            <button className="saveBtnUpdate">Update Note</button>
            <button className="cancelBtnUpdate" onClick={()=>{setUpdateNote(false)}}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditingNote
