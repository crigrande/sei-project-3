import React, { useState } from 'react'
import { useHistory } from 'react-router-dom' 
import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
  })
  

  const handleChange = (event) => {
    const newFormdata = { ...formdata, [event.target.name]: event.target.value }
    setFormdata(newFormdata)
  }
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('api/login', formdata)
      setTokenToLocalStorage(data.token)
      history.push('/')
      // console.log('token', data.token)
      // console.log('response', response)
    } catch (err) {
      console.log(err)
    }
  }
  // console.log('form data on state', formdata)
  
  return (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-3">
        <form className="px-4 py-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
            <input onChange={handleChange} 
              type="email" 
              name="email"
              className="form-control" 
              id="exampleDropdownFormEmail1" 
              placeholder="email@example.com" 
              value={formdata.email} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
            <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" value={formdata.password}/>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
              <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" id="buttonSignIn">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="/register">New around here? Sign up</a>
        <a className="dropdown-item" href="#">Forgot password?</a>
      </div>
    </div>
  )
}

export default Login