import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder, detailsOrder, payOrder } from "../actions/orderActions";

function OrderScreen (props) {


  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order: orderDetail, error } = orderDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      { orderDetail.map( (order) => (

        
        <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {order?.address}, {order?.city},
              {order?.postal_code}, {order?.country},
            </div>
            <div>
              {order?.is_delivered
                ? "Delivered at " + order?.delivered_at
                : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {order?.payment_method}</div>
            <div>Payment Details: {order?.is_paid ? "Paid at " + order?.paid_at : "Not Paid."}</div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
                <li key={order?.product?.id}>
                <div className="cart-image">
                  <img src={order?.product?.image_url} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + order?.product?.id}>{order?.product?.name}</Link>
                  </div>
                  <div>Qty: {order.qty}</div>
                </div>
                <div className="cart-price">${order?.product?.price}</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${order.product.price * order.quantity}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${(order.product.price * order.quantity) > 500 ? 0 : 50 }</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${0.15 * (order.product.price * order.quantity)}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${(order.product.price * order.quantity) + ((order.product.price * order.quantity) > 500 ? 0 : 50) + (0.15 * (order.product.price * order.quantity))}</div>
            </li>
          </ul>
        </div>
      </div>
    )) }
    </div>
  );
}

export default OrderScreen;
