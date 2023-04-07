import React, {useState } from "react";
import './style.css';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const [users, setUsers] = useState({firstName: '', lastName: '', email: '',
                                        password: ''});
    const [message, setMessage] = useState('');
    function setFirstName(event) {
        const data = event.target.value;
        setUsers({...users, firstName: data});
    }
    function setLastName(event) {
        const data = event.target.value;
        setUsers({...users, lastName: data});
    }
    function setEmail(event) {
        const data = event.target.value;
        setUsers({...users, email: data});
    }
    function setPassword(event) {
        const data = event.target.value;
        setUsers({...users, password: data});
    }

    async function createNewUser() {
        if (users.firstName == '' || users.lastName == '' || users.email == '' || users.password == '') {
            setMessage('Please fill all fields');
            return;
        }
        const response = await axios.post('http://localhost:8000/api/signup', users)
        // if response.data is user successfully created navigate to home
        if (response.data == 'user created') {
            navigate('/');
            setUsers({firstName: '', lastName: '', email: '', password: ''});
        }
        else {
            setUsers({firstName: '', lastName: '', email: '', password: ''});
            setMessage('User with the login exist. Please login');
        }
    }

    return (
        <>
        <div className="head"> Let's create your account</div>
        <div className="register-box">
            First Name <input type='text' onChange={setFirstName} value={users.firstName}></input>
            Last Name <input type='text' onChange={setLastName} value={users.lastName}></input>
            E-mail <input type='text' onChange={setEmail} value={users.email}></input>
            Password <input type='text' onChange={setPassword} value={users.password}></input>
            <button className="submit-btn" onClick={createNewUser}>Submit</button>
            <div className="message">{message}</div>
            <Link to="/login" className="login-link">Login</Link>
        </div>
        </>
    )
}

export default Register;