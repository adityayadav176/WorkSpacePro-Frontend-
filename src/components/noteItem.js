import React, {useContext} from 'react'
import "./Css/noteItem.css";
import noteContext from "../context/notes/noteContext"

function NoteItem(props) {
    const context = useContext(noteContext);
    const { deleteNote, setUpdateNote, setCurrentNote, shortText } = context;
    const { note } = props;
    return (
        <>
            <div className="Notes-items">
                <div className="Note-title">
                    <h2>{shortText(note.title, 15)}</h2>
                    <p className={` note-tag ${note.tag}`}>{note.tag}</p>
                </div>
                <p className='description'>{shortText(note.description, 25)}</p>
                <div className="Note-lower-data">
                    <div className="note-date">
                        {new Date(note.date).toLocaleDateString()}
                    </div>
                    <div className="Note-btn">
                        <i className="fa-regular fa-pen-to-square" onClick={() => {setUpdateNote(true); setCurrentNote(note);}}></i>
                        <i className="fa-regular fa-trash-can note-trash-btn" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
