'use client';
// import { SubmitLogin } from '../../lib/data.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';




export default function LoginForm({SubmitLogin}){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
            setUsername(event.target.value);
        }
    const handlePasswordChange = (event) => {
            setPassword(event.target.value);
        }

    const handleSubmit = (Event) => {
        Event.preventDefault();
        SubmitLogin({user: {username, password}})
    }
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={username} onChange={handleUsernameChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={password} onChange={handlePasswordChange}required/>
            </label>
            <button type="submit" >Login</button>
        </form>
        </div>
    )
};
