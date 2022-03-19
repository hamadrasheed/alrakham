import React, { useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartScreen = (props) => {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productID = props.match.params.id;

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();

  //remove product from cart
  const removeFromCartHandler = (productID) => {
    dispatch(removeFromCart(productID));
  };
  
  //redirect to shipping
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, []);

  return (
    <>
      {/* <div className="back-to-result">
        <Link to="/">Back to Shopping</Link>
      </div> */}
      <div className="cart">
        <div className="cart-list">
          <ul className="cart-list-container">
            <li>
              <h3>Shopping Cart</h3>
              <div>Price</div>
            </li>
            {cartItems.length === 0 ? (
              <div>
                Cart is empty! <Link to="/">Go Shopping</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <li key={item.id}>
                  <div className="cart-image">
                    <img src={item.image_url} alt="Product" />
                  </div>
                  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.id}>{item.name}</Link>
                    </div>
                    <div>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCart(item.id, e.target.value))
                        }
                      >
                        {[...Array(item.count_in_stock).keys()].map((x) => (
                          <option key={x} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        className="button"
                        type="button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="cart-price">${item.price}</div>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="cart-action">
          <h3>
            SubTotal ({cartItems.reduce((a, c) => a + parseInt(c.qty), 0)}{" "}
            items) : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button
            className="button primary full-width"
            onClick={checkoutHandler}
            disabled={cartItems.length === 0}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
