import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/cart-context";
import OrderDelivered from "./OrderDelivered";
import "./Cart.Module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [showOrder, setShowOrder] = useState(false);

  //const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const totalAmount = cartCtx.totalAmount ? `$${cartCtx.totalAmount.toFixed(2)}` : '$0.00';

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  
  const orderHandler = () => {
    cartCtx.clearall();
    setShowOrder(true);
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {!showOrder ? (
        <>
          {cartItems}
          <div className="total">
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className="action">
            <button className="button--alt" onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button className="button" onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        </>
      ) : (
        <OrderDelivered onClose={props.onClose} />
      )}
    </Modal>
  );
};

export default Cart;