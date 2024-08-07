import { Fragment } from "react";
import "./Cart.Module.css";
import { useNavigate } from "react-router-dom";


const OrderDelivered = (props) => {
  const nav = useNavigate();
 
    const Order = () => {
        nav("/Home");
	}
  return (
    <Fragment>
      <section>
        <h2>Thank you so much for your order!</h2>
        <p>We really appreciate it. </p>
        <p>
          Enjoy <b>10%</b> off your next purchase with this coupon code:
          <b>THANKYOU10.</b>
        </p>
      </section>
      <div className="actions">
        <button className="button--alt" onClick={Order}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;