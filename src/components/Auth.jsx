import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'
const Auth = () => {
    return (
        <div className="container" style={{ minHeight: "calc(100vh - 184px)" }} >
            <div className="d-flex align-items-center flex-column pt-5" >
                <div className="logo my-3">
                    <img className='pr-3' src={logo} alt="ApneNotes" width="250" height="60" />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <p style={{ fontSize: "16px" }}><strong>Welcome to NoteVault </strong>- Your fortress for ideas</p>
                    <p style={{ fontSize: "15px" }}>Log in with your NoteVault account to continue</p>
                </div>
                <div className="links my-3">
                    <Link className="btn btn-danger mx-1" to="/login" role="button">Login</Link>
                    <Link className="btn btn-danger mx-1" to="/signup" role="button">Sign Up</Link>
                </div>
            </div>
        </div >
    )
}

export default Auth