import React from 'react'
import { useState } from 'react'
import './Register.css'

const Register = () => {
  const [user, setUser] = useState({
    email:'',
    name:'',
    password:'',
    re_password:'',
    role:'',
    date:''
  })
  // console.log(user);
  const eventHandler = (e) => {
    console.log(e.target);
    setUser({...user,[e.target.name]:e.target.value})
  }
  const postData = () => {
    console.log('data posted')
  }
  return (
    <div className='register-container'>
      <h1>REGISTER</h1>
      <input type="email" name='email' value={user.email} placeholder='Enter email' onChange={eventHandler}/>

      <input type="name" name="name" value={user.name} placeholder='Enter name' onChange={eventHandler}/>

      <input type="password" name="password" value={user.password} placeholder='Enter correct password' onChange={eventHandler}/>

      <input type="password" name="re_password" value={user.re_password} placeholder='Reenter correct password' onChange={eventHandler}/>

      <input type="text" name="role" value={user.role} placeholder='Enter your role' onChange={eventHandler}/>

      <input type="date" name="date" value={user.date} placeholder='Enter date' onChange={eventHandler}/>

      <button onClick={postData}>Register</button>
    </div>
  )
}

export default Register