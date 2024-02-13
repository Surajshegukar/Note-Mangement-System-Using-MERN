import React, { useContext, useState } from 'react'
import Notes from './Notes'
import noteContext from '../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title:" ",description:" ",tag:"Default"});

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }

    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <div className="container my-3">
            <h2>Add Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" className="form-control" id="title" onChange={onChange} aria-describedby="title" placeholder="Enter Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input name="description" type="text" className="form-control" id="description" onChange={onChange} placeholder="Enter The Description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag">Tag</label>
                    <input name="tag" type="text" className="form-control" id="tag" onChange={onChange} placeholder="Enter The Tag" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
            <div className="container my-3">
                <h2>Your Note</h2>
                <Notes />
            </div></div>
    )
}

export default AddNote