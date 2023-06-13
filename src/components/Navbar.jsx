import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '/logo.png'
const Navbar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/auth')
    }
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ "backgroundColor": "#282634" }} >
            <div className="container-fluid" >
                <NavLink className="navbar-brand mr-3 " to="/" style={{ "marginRight": "40px", maxWidth: "1024px" }}>
                    <img className='pr-3' src={logo} alt="ApneNotes" width="200" height="50" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="active" to="/about">About</NavLink>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ?
                        <form className="d-flex">
                            <Link className="btn btn-danger mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-danger mx-1" to="/signup" role="button">Sign Up</Link>
                        </form> : <button onClick={handleLogout} className="btn btn-danger mx-1">Log Out</button>
                    }
                </div>
            </div>
        </nav >
    )
}

export default Navbar