import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './signup.css'


const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const SignUp = async (e) => {
        e.preventDefault();
        console.log(name, email, password);

        let result = await fetch('http://localhost:3001/register', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, confirmPassword })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        } else {
            navigate('/login')
        }
    }



    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="signup-input">
                <form>

                    <label>Name: </label>
                    <input
                        type='text'
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label>Email ID: </label>
                    <input
                        type='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    <label>Confirm Password: </label>
                    <input
                        type='password'
                        placeholder="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /><br /><br />


                    {/* <Link to="/login" > */}
                    <button className="btn" type="submit" onClick={SignUp}>SignUp</button><br />
                    {/* </Link> */}

                    <span>
                        Already have an account ? <Link to="/login">Login.</Link>
                    </span>

                </form>
            </div>




        </div>
    )

}

export default SignUp