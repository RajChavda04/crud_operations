import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import React, { useContext } from 'react'


const User = () => {
    const { user, handleDelete } = useContext(UserContext)

    return (
        <>
            <div className="main">
                <div className="data">
                   
                    <h1>User lsit</h1>
                    <Link to="/UserCreate" className="btn btn-success">Add User</Link>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>

                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Age</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => {

                                return <tr key={index} >
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td ><div className="buttons"><Link to={`/UserUpdate/${user._id}`} className="btn btn-primary">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}  >Delete</button></div></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default User
