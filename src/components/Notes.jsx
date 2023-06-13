import { useContext, useEffect, useRef, useState } from 'react'
import NotesContext from '../context/notes/NotesContext'
import NoteItem from './NoteItem'
import { useNavigate } from 'react-router-dom'

const Notes = ({ showAlert }) => {
    let navigate = useNavigate()
    const [note, setNote] = useState({ eid: "", etitle: "", edescription: "", etag: "" })
    const ref = useRef(null)
    const refclose = useRef(null)
    const { notes, getNotes, editNote } = useContext(NotesContext);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate("/auth")
        }
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ eid: currentNote._id, etitle: currentNote.title, etag: currentNote.tag, edescription: currentNote.description })
    }


    const handleClick = (e) => {
        refclose.current.click();
        editNote(note.eid, note.etitle, note.etag, note.edescription)
        showAlert("Updated Successfully", "success")
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input placeholder='Title' value={note.etitle} name="etitle" onChange={onchange} type="text" className="form-control mb-3" />
                                <input placeholder='Tag' value={note.etag} name="etag" onChange={onchange} className="form-control mb-3" />
                                <textarea placeholder="Description" value={note.edescription} name="edescription" onChange={onchange} className="form-control mb-3" />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" onClick={handleClick} className="btn btn-primary">Update changes</button>
                        </div>
                    </div>
                </div>
            </div >


            <div className="container" style={{ minHeight: " calc(100vh - 511px)" }}>
                <h2 >Your Notes</h2>
                <div className='note-container my-5'>

                    {notes.length === 0 && "No Notes to display"}
                    {notes.map((note) => {
                        // return <NoteItem showAlert={showAlert} updateNote={updateNote} key={note._id} note={note} />;
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })
                    }
                </div>

            </div>
        </>
    )
}

export default Notes