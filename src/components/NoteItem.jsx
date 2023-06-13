import React, { useContext } from 'react'
import NotesContext from '../context/notes/NotesContext'

const NoteItem = (props) => {
    const { deleteNote } = useContext(NotesContext)
    const { note, updateNote } = props;
    return (
        <>
            <div className="card text-bg-dark">
                <div className="card-body">
                    <div className="d-flex align-item-center flex-wrap">
                        <h5 className="card-title overflow-hidden"> {note.title}</h5>
                        <i onClick={() => { updateNote(note); }} className="fa-solid fa-pen-to-square mx-2 editIcon"></i>
                        <i onClick={() => { deleteNote(note._id); props.showAlert("Deleted Successfully", "danger") }} className="fa-solid fa-trash-can mx-2 deleteIcon"></i>
                    </div>
                    <hr />
                    <h6 className="card-subtitle mb-2">{note.tag}</h6>
                    <hr />
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </>
    )
}

export default NoteItem