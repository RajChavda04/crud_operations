import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext'


const Productupdate = () => {

  const { id } = useParams()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const { getProductById, updateProduct } = useContext(ProductContext)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      if (data) {
        setName(data.name);
        setCategory(data.category);
        setPrice(data.price);
        setDescription(data.description);
      }
    };
    fetchProduct();
    getProductById(id, setName, setCategory, setPrice, setDescription, profileImage)
  }, [id])


  const Update = (e) => {
    e.preventDefault();
    updateProduct(id, { name, category, price, description, profileImage }, navigate)

  }
  return (
    <>
      <div className="main">
        <div className="data">
          <form onSubmit={Update}>
            <div className="container">
              <h1>Update Product</h1>
              <label htmlFor="name"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="text" value={name} placeholder='Enter product name' onChange={(e) => setName(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <label htmlFor="categry"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="text" value={category} placeholder='Enter product email' onChange={(e) => setCategory(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>

              <label htmlFor="price"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="number" placeholder='Enter product Age' value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <label htmlFor="description"></label>
              <div className="input-group input-group-sm mb-3">
                <input type="text" placeholder='Enter product description' value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
              </div>
              <input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} className="form-control mb-3" />
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Productupdate
