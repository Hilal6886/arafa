import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,  sendEmailVerification,
} from "srevices/users.service";
import {useAuthValue} from './AuthContext'
import "./Signup.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState("");
  const [user, loading, ] = useAuthState(auth);
  const [error, setError] = useState('')
  const navigate = useNavigate();

 
  const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== ''){
      if (password !== confirmPassword) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }
  const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
    
      registerWithEmailAndPassword(name, email, password)
      
        .then(() => {
          sendEmailVerification(auth.currentUser)   
          .then(() => {
          
            navigate('/verify-email')
          }).catch((err) => alert(err.message))
        })
        .catch(err => setError(err.message))
    }
  
  }
  return (
    <div className="register">
      <div className="register__container">
      <h1 className="text-purple-900 text-xl"> sign up</h1>
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
         <input 
            type='password'
            className="register__textBox"
            value={confirmPassword} 
         
            placeholder='Confirm password'
            onChange={e => setConfirmPassword(e.target.value)}
            />

        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Signup;