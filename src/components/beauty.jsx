import { useProducts } from "../ProductsContext";
import { Link } from "react-router";

const Beauty = () => {
  const { products, loading } = useProducts();

  if (loading) return <div>Products Loading</div>;

  const beautyProducts = products.products.filter(
    (product) => product.category === "beauty",
  );

  return (
    <div className="items-container">
      {beautyProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div className="card-upper">
            <h3>{product.title}</h3>
            <h4>by: {product.brand}</h4>
            <img src={`${product.thumbnail}`} />
            <p>
              <i>{product.description}</i>
            </p>
          </div>
          <div className="card-lower">
            <div className="card-price-button">
              <p className="product-info">${product.price}</p>
              <button>Add to Cart</button>
            </div>
            <div className="card-lowest">
              <p>
                <i>{product.availabilityStatus}</i>
              </p>
              <p>
                <i className="product-info">{product.rating}</i>/5
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beauty;
