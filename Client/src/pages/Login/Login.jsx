import React from 'react'
import './Login.css'

const Login = () => {
  const Change = async (e)=>{

  }
  return (
    <div className='login'>
      <div className='logincontainer'>
        <h1>Sign Up</h1>
      <div className='login-fields'>
        <input type='text'  placeholder='Your Name'/>
        <input type='email'  placeholder='Email Address'/>
        <input type='password'  placeholder='Pasword'/>
      </div>
      <button onClick={Change}>Continue</button>
      <p className='loginsignup'>Already have a account? <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continuing, I agree to the terms of use and privacy policy.</p>
      </div>
    </div>
    </div>
  )
}

export default Login
