import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDocument } from "../hooks/useDocument";

function Productitem() {
  const { id } = useParams();
  const { data: product } = useDocument("products", id);

  return (
    <div className="align-content py-10">
      {product && (
        <>
          <div className="card bg-base-100 w-96 shadow-sm align-content">
            <div className="flex justify-between mt-5">
              <span className="font-medium">Price: {product.price} €</span>
              <span className="flex justify-center items-center">
                <FaCheckCircle className="m-1.5" />
                {product.guarantee} years
              </span>
            </div>
            <div className="flex justify-between">
              <span>Category: {product.category}</span>
              <span> Storage: {product.storage} GB</span>
            </div>
            <figure className="px-10 pt-10">
              <img
                src={product.image}
                alt={product.image}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{product.name}</h2>
              <p className="text-xl">{product.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Productitem;
