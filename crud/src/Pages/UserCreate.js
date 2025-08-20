import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const UserCreate = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();
  const { createUser } = useContext(UserContext)

  const submit = (e) => {
    e.preventDefault();
    createUser({ name, email, age }, navigate)
  }

  return (
    <>
      <div className="main">
        <div className="data">
          <form onSubmit={submit} >
            <div className="container">

              <h1>Create User</h1>
              <label htmlFor="name"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <label htmlFor="email"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <label htmlFor="age"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="number" placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserCreate
