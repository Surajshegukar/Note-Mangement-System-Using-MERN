import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getNote = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZmE5MGYyOWFjY2JhOGQwZjUwMjU2In0sImlhdCI6MTcwNDk2NTU5MH0.hhZy6n4Yj4usMtoe6amYtO_Lva-V6ZcqzZoWEELnkug"
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZmE5MGYyOWFjY2JhOGQwZjUwMjU2In0sImlhdCI6MTcwNDk2NTU5MH0.hhZy6n4Yj4usMtoe6amYtO_Lva-V6ZcqzZoWEELnkug",
      },
      body: JSON.stringify({title,description,tag})
    });
    const note = await response.json();
    
    setNotes(notes.concat(note));
  };
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZmE5MGYyOWFjY2JhOGQwZjUwMjU2In0sImlhdCI6MTcwNDk2NTU5MH0.hhZy6n4Yj4usMtoe6amYtO_Lva-V6ZcqzZoWEELnkug",
      },
    });
    const json = response.json();
    console.log(json);;

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    console.log("Deleting Note " + id);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5ZmE5MGYyOWFjY2JhOGQwZjUwMjU2In0sImlhdCI6MTcwNDk2NTU5MH0.hhZy6n4Yj4usMtoe6amYtO_Lva-V6ZcqzZoWEELnkug",
      },
      body: JSON.stringify({title,description,tag}),
    });
    
    const editedNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < editedNote.length; index++) {
      const element = editedNote[index];
      if (element._id === id) {
        editedNote[index].title = title;
        editedNote[index].description = description;
        editedNote[index].tag = tag;
        break;
      }
    }
    setNotes(editedNote);
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
