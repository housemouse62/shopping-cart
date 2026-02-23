// import { useCart } from "./CartContext";
import { Link } from "react-router";

const Cart = () => {
  //   const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  //   if (cart.length === 0) {
  return (
    <div className="empty-cart-message">
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added anything yet.</p>
      <Link to="/shop">Start Shopping</Link>
    </div>
  );
};

//   return (
//     <div className="cart-page">
//       <h1>Shopping Cart</h1>

//       <div className="cart-items-list">
//         {cart.map((item) => (
//           <div key={item.id} className="cart-item">
//             <div className="cart-item-info">
//               <h3>{item.title}</h3>
//             </div>

//             <div className="cart-item-price">${item.price.toFixed(2)}</div>

//             <div className="cart-quantity-controls">
//               <button
//                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//               >
//                 -
//               </button>
//               <span>{item.quantity}</span>
//               <button
//                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//             </div>

//             <button
//               className="remove-button"
//               onClick={() => removeFromCart(item.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="cart-summary">
//         <div className="cart-summary-row">
//           <span>Subtotal:</span>
//           <span>${getCartTotal().toFixed(2)}</span>
//         </div>
//         <div className="cart-summary-row cart-summary-total">
//           <span>Total:</span>
//           <span>${getCartTotal().toFixed(2)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Cart;
