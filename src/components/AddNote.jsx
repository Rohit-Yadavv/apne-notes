import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes/NotesContext'

const AddNote = (props) => {
    const { addNote } = useContext(NotesContext)

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.tag, note.description)
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Note Successfully", "success")
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container">
            <h2>Add a Note</h2>
            <form>
                {/* here minlength and required will not work as we are using onclick instead of onsubmit in submit button */}
                <input required minLength={3} value={note.title} placeholder='Title (Atleast 3 characters) ' name="title" onChange={onchange} type="text" className="form-control mb-3" />
                <input placeholder='Tag (optional)' value={note.tag} name="tag" onChange={onchange} className="form-control mb-3" />
                <textarea required minLength={5} value={note.description} placeholder="Description (Atleast 5 characters)" name="description" onChange={onchange} className="form-control mb-3" />

                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" onClick={handleClick} className="btn btn-danger">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote