import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Notesitem"


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNote,editNote } = context;
    const [note,setNote] = useState({etitle:" ",edescription:" ",etag:" "});
    const refClose = useRef(null);

    const handleClick=(e)=>{
        e.preventDefault();
        editNote(note.id,note.etitle,note.edescription,note.etag);
        refClose.current.click();
    
    }
    const onChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value});
    }
    

    const updateNote = (currentNote) => {
        console.log("update");
        setNote({id: currentNote._id, etitle:currentNote.title,edescription: currentNote.description,etag: currentNote.tag})
        
    }

    useEffect(() => {
        getNote();
    }, [])
    return (
        <> 
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle">Title</label>
                                    <input name="etitle" type="text" value={note.etitle} className="form-control" id="etitle" onChange={onChange} aria-describedby="title" placeholder="Enter Title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription">Description</label>
                                    <input name="edescription" value={note.edescription} type="text" className="form-control" id="edescription" onChange={onChange} placeholder="Enter The Description" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag">Tag</label>
                                    <input name="etag" type="text" value={note.etag} className="form-control" id="etag" onChange={onChange} placeholder="Enter The Tag" />
                                </div>
                        
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />

                })}
            </div>
        </>
    )
}
export default Notes;