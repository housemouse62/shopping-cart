import { useProducts } from "../ProductsContext";
import { Link } from "react-router";

const Beauty = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Products Loading</div>;

  const beautyProducts = products.products.filter(
    (product) => product.category === "beauty",
  );

  return (
    <div>
      {beautyProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Beauty;
