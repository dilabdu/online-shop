import { FaCheckCircle, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";

function Product({ product }) {
  const { deleteDocument } = useFirestore("products");
  const handleDelete = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteDocument(product.id);
    }
  };
  return (
    <Link
      to={`/productitem/${product.id}`}
      className="card bg-base-100 w-full shadow-sm hover:shadow-2xl group"
    >
      <figure className="realtive">
        <img
          className="object-cover h-[200px] w-auto group-hover:scale-105 transition duration-300"
          src={product.image}
          alt={product.name}
        />
        <button
          onClick={handleDelete}
          className="btn-outline btn-secondary btn btn-sm absolute top-2 right-2 border-0"
        >
          <FaTrash className="text-white opacity-85" />
        </button>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title truncate w-[165px] grow ">
            {product.name}
          </h2>
          <p className="flex justify-center items-center">
            <FaCheckCircle className="m-1.5" />
            {product.guarantee} years
          </p>
        </div>
        <p>Price: {product.price} €</p>
        <p>Category: {product.category}</p>
        <p>Storage:{product.storage} GB</p>
        <p className="line-clamp-2">Description:{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success w-full">Buy Now</button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
