import { ProductContext } from "../context/ProductContext";
import React, { useContext } from "react";

const Eg = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="main">
      <div className="data">
        {product.length > 0 ? (
          product.map((p) => (
            <div key={p._id}>
              <div className="class">
                {p.profileImage ? (
                  <img className="imagecontainer2" src={p.profileImage} alt={p.name} />
                ) : (
                  <span>No Image</span>
                )}

              </div>
            </div>
          ))
        ) : (
          <tr>
            <td colan="6" className="text-center">
              No products found
            </td>
          </tr>
        )}
      </div>
    </div>
  );
};

export default Eg;
