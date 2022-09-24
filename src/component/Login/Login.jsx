import React from 'react'
import { useState } from 'react'
import './Login.css'

const Login = () => {
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  // const handelChange = (e) => {
  //   const {name,value} = e.target
  //   console.log(name,value);
  //   setUser({
  //     ...user,
  //     [name]: value
  //   })
  // }
  const postData = () => {
    console.log('data posted');
  }
  console.log(user);
  return (
    <div className='login-container'>
      <h1>LOGIN</h1>
      <input type="email" name='email' value={user.email} placeholder='Enter email' onChange={(e) => setUser({...user,email:e.target.value})}/>
      <input type="password" name="password" value={user.password} placeholder='Enter correct password' onChange={(e) => setUser({...user, password:e.target.value})}/>
      <button onClick={postData}>Login</button>
    </div>
  )
}

export default Login