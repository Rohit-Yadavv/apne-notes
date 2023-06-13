import NotesContext from "./NotesContext.jsx";
import { createContext, useState } from 'react'

const NoteState = (props) => {

    const host = "http://localhost:5000"

    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes)




    // get all notes
    const getNotes = async () => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "get", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });

        const json = await response.json(); // parses JSON response into native JavaScript objects
        setNotes(json)
    }




    // add a note
    const addNote = async (title, tag, description) => {

        // TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });

        const note = await response.json();
        setNotes(notes.concat(note))
    }


    // delete a note
    const deleteNote = async (id) => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const json = await response.json();
        // parses JSON response into native JavaScript objects
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }


    // edit a note
    const editNote = async (id, title, description, tag) => {

        // api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
            body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects


        let newNotes = JSON.parse(JSON.stringify(notes))
        // logic to edit notes
        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].tag = tag;
                newNotes[index].description = description;
            }
        }
        setNotes(newNotes)
    }



    return (
        <NotesContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            <>{props.children}</>
        </NotesContext.Provider>
    )
}

export default NoteState;
