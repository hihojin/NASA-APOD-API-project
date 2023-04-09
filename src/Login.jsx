import React, {useState } from "react";
import './style.css';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [users, setUsers] = useState({firstName: '', lastName: '', email: '',
                                        password: ''});
    const [message, setMessage] = useState('');
   
    function setEmail(event) {
        const data = event.target.value;
        setUsers({...users, email: data});
    }
    function setPassword(event) {
        const data = event.target.value;
        setUsers({...users, password: data});
    }

    async function validateUserForLogIn() {
        if (users.email == '' || users.password == '') {
            setMessage('Please fill all fields');
            return;
        }
        const response = await axios.post(`https://nasa-apod-api-project.vercel.app.com/`, users)
        //const response = await axios.post(`http://localhost:${import.meta.env.VITE_APP_PORT || 3000}/`, users)
        if (response.data == 'login success') {
            navigate('/picture');
        }
        else if (response.data == 'wrong password') {
            setMessage('Wrong password. Please try again');
        }
        else if (response.data == 'need signup first') {
            setMessage('User not exists. Please sign up first');
        }
        setUsers({firstName: '', lastName: '', email: '', password: ''});
    }

    return (
        <>
        <div className="head"> Login to your account</div>
        <div className="register-box">
            E-mail <input type='text' onChange={setEmail} value={users.email}></input>
            Password <input type='text' onChange={setPassword} value={users.password}></input>
            <button className="submit-btn" onClick={validateUserForLogIn}>Submit</button>
            <div className="message">{message}</div>
            <Link to="/signup" className="login-link">Sign Up</Link>
        </div>
        </>
    )
}

export default Login;