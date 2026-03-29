import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { useCollection } from "../hooks/useCollection";
import { useState } from "react";
function Home() {
  const [filterOption, setFilterOption] = useState("asc");
  const { data: products } = useCollection("products", filterOption);
  return (
    <section>
      <div className="align-content">
        <h1 className="text-3xl text-center mb-5 mt-5">All Products</h1>
        <div className="flex justify-end mb-5">
          <select
            className="select"
            onChange={(e) => setFilterOption(e.target.value)}
            value={filterOption}
          >
            <option value="asc">Oldest</option>
            <option value="desc">Newest</option>
          </select>
        </div>
      </div>
      {products && products.length === 0 && (
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-center text-2xl">No products found.</h1>
          <Link to="/create" className="btn btn-primary mb-5">
            Create New Product
          </Link>
        </div>
      )}
      {products && <ProductList products={products} />}
    </section>
  );
}

export default Home;
