import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";

import {
  addProductReview
} from "../actions/productActions";

const ProductScreen = (props) => {

  const [qty, setQty] = useState(1);
  const [review, setReview] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { product, loading, error } = productDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    //here we give the id which product we want
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    
    e.preventDefault();
    const addRevire = {
      review,
      product_id: props.match.params.id,
    }

    dispatch(
      addProductReview({
        ...addRevire
      })
    );
    window.location.reload();
  };

  const isSomeOneSignedIn = userInfo ? true : false;

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to Shopping</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image_url} alt="product" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                <b>Price:</b>  {product.price}$
              </li>
              <li>
                <b>Description:</b> {product.description}
                {/* <div>{product.description}</div> */}
              </li>
              <li>
                <ul>
                <b> <li>Reviews:</li></b>
                {product?.productReviews?.length ? (
                    product.productReviews.map((rev, index) => (
                      <li key={rev.id}>
                        {index + 1}: {rev.review}
                      </li>
                      
                      )
                    )

                ) : (
                  <div></div>
                )}
                <li>
                  <input
                    className="form"
                    value={isSomeOneSignedIn ? review || "" : "Please Sign-In to add Review"}
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => isSomeOneSignedIn ? setReview(e.target.value) : null}
                  />
                </li>
                {isSomeOneSignedIn ? (
                <button className="button primary" type="submit" onClick={submitHandler}>
                    {"Add Review"}
                </button>
                ): <div></div>}

                </ul>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Price: {product.price}</li>
              <li>
                Status: {product.count_in_stock > 0 ? "In Stock" : "Out of stock"}
              </li>
              <li>
                Qty:{" "}
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.count_in_stock).keys()].map((x) => (
                    <option key={x} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.count_in_stock > 0 && (
                  <button onClick={handleAddToCart} className="button primary">
                    Add to cart
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
