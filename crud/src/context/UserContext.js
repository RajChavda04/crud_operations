import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/listuser")
      .then(result => {
        setUser(result.data)
      })
      .catch(err => {
        console.log("Error in fetching users", err)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete("http://localhost:8082/deleteUser/" + id)
      .then(res => {
        console.log(res)
        setUser(user.filter(u => u._id !== id))
      })
      .catch(err => console.log(err))
  }

  const createUser = (data, navigate) => {
    axios.post("http://localhost:8082/createUser", data)
      .then(result => {
        console.log(result);
         setUser(prev => [...prev, result.data]); 
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  const getUserById = (id, setName, setEmail, setAge) => {
    axios.get("http://localhost:8082/getuser/" + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => {
        console.log("Error in fetching users", err)
      })
  }

  const updateUser = (id, data, navigate) => {
    axios.put("http://localhost:8082/updateUser/" + id, data)
      .then(result => {
        console.log(result);
        setUser(prev =>
        prev.map(user =>
          user._id === id ? { ...user, ...data } : user  
        )
      );
        
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <UserContext.Provider value={{ user, setUser, handleDelete, createUser, getUserById, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
