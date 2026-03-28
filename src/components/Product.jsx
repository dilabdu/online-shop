import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <Link
      to={`/productitem/${product.id}`}
      className="card bg-base-100 w-full shadow-sm hover:shadow-2xl group"
    >
      <figure>
        <img
          className="object-cover h-[200px] w-auto group-hover:scale-105 transition duration-300"
          src={product.image}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title truncate w-[165px] grow ">
            {product.name}
          </h2>
          <p className="flex justify-center items-center">
            <FaCheckCircle className="m-1.5" />
            {product.guarantee}
          </p>
        </div>
        <p>Price: {product.price} €</p>
        <p>Category: {product.category}</p>
        <p>Storage:{product.storage}</p>
        <p className="line-clamp-2">Description:{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success w-full">Buy Now</button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
