import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import './login.css'


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const logIn = async (e) => {
        e.preventDefault();

        let result = await fetch('http://localhost:3001/login', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        } else {
            localStorage.setItem("userId", JSON.stringify(result.data.userId))
            localStorage.setItem("token", JSON.stringify(result.data.token))
            navigate('/getBook')
        }
    }


    return (
        <div className="login">
            <h3>Login</h3>

            <div className="login-input">
                <form>
                    <label className="input">Email Id: </label>
                    <input
                        type='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label className="input">Password: </label>
                    <input
                        type='password'
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />

                    <button className="btn" type="submit" onClick={logIn}>Login</button><br/>

                    <span>
                        Don't have an account ? <Link to="/signup">SignUp.</Link>
                    </span>
                </form>
            </div>

        </div>

    )

}

export default Login