import ProductList from "../components/ProductList";
import { useCollection } from "../hooks/useCollection";
function Home() {
  const { data: products } = useCollection("products");
  return (
    <section>
      <div className="align-content"></div>
      {products && <ProductList products={products} />}
    </section>
  );
}

export default Home;
