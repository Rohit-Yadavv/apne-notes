import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = (props) => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/');
            props.showAlert("Account created successfully", "success");
        }
        else {
            props.showAlert("Invalid credentials", "danger");
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className="container" style={{ minHeight: " calc(100vh - 184px)" }}>
            <h2>Create Account to use NoteVault</h2>
            <form onSubmit={handleSubmit} style={{ marginBottom: "31px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input required onChange={onchange} type="text" id='name' name='name' className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input required onChange={onchange} type="email" name='email' id='exampleInputEmail1' className="form-control" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input required onChange={onchange} id='password' name='password' type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input required onChange={onchange} id='cpassword' name='cpassword' type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-danger">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp