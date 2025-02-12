import React, { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [state ,setState] = useState("Login");
  const [formdata , setFormdata] = useState({
    username:"",
    password:"",
    email:""
  });
  const changeHandler = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
  }
  const login = async ()=>{
    console.log("Login",formdata);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
        navigate('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup = async ()=>{
    console.log("Signup",formdata);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formdata),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
        navigate('/');
    }
    else{
      alert(responseData.errors);
    }
  }
  return (
    <div className='login'>
      <div className='logincontainer'>
        <h1>{state}</h1>
      <div className='login-fields'>
        {state === "Sign Up"?<input name='username' value={formdata.username} onChange={changeHandler} type='text'  placeholder='Your Name'/>:<></>}
        <input name='email' value={formdata.email} onChange={changeHandler} type='email'  placeholder='Email Address'/>
        <input name='password' value={formdata.password} onChange={changeHandler} type='password'  placeholder='Pasword'/>
      </div>
      <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
      {state==="Sign Up"? <p className='loginsignup'>Already have a account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
      :<p className='loginsignup'>Create and account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continuing, I agree to the terms of use and privacy policy.</p>
      </div>
    </div>
    </div>
  )
}

export default Login
