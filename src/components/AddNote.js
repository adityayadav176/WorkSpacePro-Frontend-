import React from 'react'
import "./Css/Addnote.css"

function AddNote() {
    return (
        <>
            <div className="ModalOverlay">
                <div className="modalBox">
                    <h2>Create New Note</h2>
                    <div className="titleInput">
                        <span>Note Title</span>
                        <input type="text" placeholder='Enter note title...' minLength={3} required />
                    </div>
                    <div className="categoryInput">
                        <span>Category</span>

                        <select>
                            <option value="general">General</option>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="ideas">Ideas</option>
                            <option value="important">Important</option>
                        </select>
                    </div>
                    <div className="contentInput">
                        <span>Content</span>
                        <input type="text" placeholder='Enter note Content...' minLength={5} required />
                    </div>
                    <div className="addNoteBtnsSection">
                          <button className='AddnoteBtn'>Create</button>
                    <button className='CancelnoteBtn'>Cancel</button>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default AddNote
