import React from 'react'
import Notes from '../components/Notes'
import AddNote from '../components/AddNote'

const Home = ({ showAlert }) => {

    return (
        <>
            <AddNote showAlert={showAlert} />
            <Notes showAlert={showAlert} />
        </>
    )
}

export default Home