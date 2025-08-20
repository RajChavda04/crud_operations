import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'


const Userupdate = () => {

  const { id } = useParams()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate();
  const { getUserById, updateUser } = useContext(UserContext)

  useEffect(() => {
    getUserById(id, setName, setEmail, setAge)
  }, [id])


  const Update = (e) => {
    e.preventDefault();
    updateUser(id, { name, email, age }, navigate)

  }
  return (
    <>
      <div className="main">
        <div className="data">
          <form onSubmit={Update}>
            <div className="container">
              <h1>Update User</h1>
              <label htmlFor="Name"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <label htmlFor="Email"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="email" value={email} placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <label htmlFor="Age"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="number" placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Userupdate
