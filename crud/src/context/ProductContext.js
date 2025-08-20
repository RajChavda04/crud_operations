import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

useEffect(()=>{
  getProduct();
})

const createProduct = async (data, navigate) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("price", data.price);
      formData.append("description", data.description);
      if (data.profileImage) {
        formData.append("profileImage", data.profileImage); // name must match backend
      }

      const res = await axios.post("http://localhost:8082/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const newProduct = res.data?.data || res.data; 
      setProduct((prev) => [...prev, newProduct]);
      navigate("/product");
    } catch (err) {
      console.log("Error creating product:", err);
    }
  };


  //  Get all products
  const getProduct = () => {
    axios
      .get("http://localhost:8082/api/products")
      .then((result) => {
        setProduct(result.data?.data?.products || []);
      })
      .catch((err) => console.log("Error fetching products:", err));
  };

  // Get product by ID
  const getProductById =async (id) => {
     try {
    const result = await axios.get(`http://localhost:8082/api/products/${id}`);
    // backend returns product in result.data.data
    return result.data?.data || result.data;
  } catch (err) {
    console.log("Error fetching product by id:", err);
    return null;
  }
     
  };

  // Update product
  const updateProduct = (id, data, navigate) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("description", data.description);
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }

    axios.put(`http://localhost:8082/api/products/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        console.log("Update Product Response:", result.data);
        const updated = result.data?.data;
        if (updated) {
          setProduct((prev) =>
            prev.map((p) => (p._id === id ? updated : p))
          );
        }
        navigate("/Product");
      })
      .catch((err) => console.log("Error updating product:", err));
  };

  //  Delete product
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8082/api/products/${id}`)
      .then(() => {
        setProduct((prev) => prev.filter((p) => p._id !== id));
      })
      .catch((err) => console.log("Error deleting product:", err));
  };


  return (
    <ProductContext.Provider value={{ product, setProduct, handleDelete, createProduct, getProductById,getProduct, updateProduct}}>
      {children}
    </ProductContext.Provider>
  )
}
