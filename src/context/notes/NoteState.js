import React, {useState} from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
  {
    "_id": "6985923cwewe9fb5d249ee6f89814",
    "user": "6984c2b94d18c80598f3a62f",
    "title": "introduction",
    "description": "my name is aditya",
    "tag": "general",
    "date": "2026-02-06T07:03:24.095Z",
    "__v": 0
  },
  {
    "_id": "698775918a573e4d11f9794dd",
    "user": "6984c2b94d18c80598f3a62f",
    "title": "introduction",
    "description": "my name is aditya",
    "tag": "general",
    "date": "2026-02-07T17:25:37.618Z",
    "__v": 0
  }
]

// Add note  
const addNote = (title, description, tag) =>{
   // TODO API CALL 
  const note =   {
    "_id": "698775918a573e4d11f9794dd",
    "user": "6984c2b94d18c80598f3a62f",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2026-02-07T17:25:37.618Z",
    "__v": 0
  };
  setNotes(notes.concat(note))
}
// delete note
const deleteNote = (id) =>{
   // TODO API CALL 
  console.log("deleting the note", id)
   const newNotes = notes.filter((note)=>{ return note._id!==id})
  setNotes(newNotes)
}
// edit note
const editNote = () =>{
  
}


const [notes, setNotes] = useState(notesInitial)
  return (

    <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;