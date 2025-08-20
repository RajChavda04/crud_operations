import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductCreate = () => {
  const { createProduct } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await createProduct({ name, category, price, description, profileImage }, navigate);
  };

  return (
    <div className="main ">
      <div className="data">
        <form onSubmit={submit} className="p-4 shadow rounded bg-light">
          <div className="container">
            <h2 className="mb-4">Create Product</h2>

            <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" required />

            <input type="text" placeholder="Product Category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control mb-3" required />

            <input type="number" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control mb-3" required />

            <input type="text" placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control mb-3" />

            <input type="file" accept="image/*" onChange={(e) => setProfileImage(e.target.files[0])} className="form-control mb-3" />

            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
