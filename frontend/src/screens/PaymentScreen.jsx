import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };

  return (
    <>
      <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>

        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Payment</h2>
              </li>

              <li>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="paymentMethod"
                    value="Cash on delivery"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="paymentMethod">Cash on delivery</label>
                </div>
              </li>

              <li>
                <button className="button primary" type="submit">
                  Continue
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
