import { useProducts } from "../ProductsContext";
import { Link } from "react-router";

const Furniture = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Products Loading</div>;

  const furnitureProducts = products.products.filter(
    (product) => product.category === "furniture",
  );

  return (
    <div>
      {furnitureProducts.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Furniture;
