import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import React, { useContext } from "react";

const Product = () => {
  const { product, handleDelete } = useContext(ProductContext);

  return (
    <div className="main  ">
      <div className="data">
        <h1 className="mb-3">Product List</h1>

        <Link to="/ProductCreate" className="btn btn-success mb-3">
          Add Product
        </Link>

        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {product.length > 0 ? (
              product.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>₹{p.price}</td>
                  <td>{p.description}</td>
                  <td>
                    {p.profileImage ? (
                      <img className="imagecontainer" src={p.profileImage} alt={p.name} />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td>
                    <div className="buttons">
                      <Link to={`/ProductUpdate/${p._id}`} className="btn btn-primary btn-sm" > Update </Link>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}> Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
