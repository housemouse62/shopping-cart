import { useProducts } from "../ProductsContext";
import { Link } from "react-router";

const Fragrances = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Products Loading</div>;

  const fragranceProducts = products.products.filter(
    (product) => product.category === "fragrances",
  );

  return (
    <div>
      {fragranceProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Fragrances;
