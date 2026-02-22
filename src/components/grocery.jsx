import { useProducts } from "../ProductsContext";
import { Link } from "react-router";

const Grocery = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Products Loading</div>;

  const groceryProducts = products.products.filter(
    (product) => product.category === "groceries",
  );

  return (
    <div>
      {groceryProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Grocery;
