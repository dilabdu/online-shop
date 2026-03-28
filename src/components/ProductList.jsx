import Product from "./Product";
function ProductList({ products }) {
  return (
    <div className="align-content py-5 gap-4 grid grid-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
