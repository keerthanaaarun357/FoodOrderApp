import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderCartButton.Module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${"button"} ${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const nav = useNavigate();
 
    const CartPage = () => {
        nav("/Cart");
	}

  return (
    //<button className={btnClasses} onClick={props.onClick}>
    
      <button className={btnClasses} onClick={CartPage}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Send Order</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;