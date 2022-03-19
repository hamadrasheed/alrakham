import React, { useEffect } from "react";
// import data from "../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = (props) => {

  const productList = useSelector((state) => state.productList);
  const searchBy = useSelector((state) => state.search);

  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  useEffect(() => {
    dispatch(listProducts(searchBy));
  }, [searchBy]);

  return loading ? (
    <div>Loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <div className="product">
              <Link to={"/product/" + product.id}>
                <img
                  className="product-image"
                  src={product.image_url}
                  alt="Product"
                />
              </Link>
              <div className="product-name">
                <Link to={"/product/" + product.id}>{product.name}</Link>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                No. of Reviews: ({product.productReviews.length})
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeScreen;
