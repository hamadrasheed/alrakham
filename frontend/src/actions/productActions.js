import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_REVIEW_SAVE_FAIL,
  PRODUCT_REVIEW_SAVE_REQUEST,
  PRODUCT_REVIEW_SAVE_SUCCESS
} from "../constants/productConstants";

import Axios from "axios";

const listProducts = (
  searchBy = null,
  category = "",
  searchKeyword = "",
  sortOrder = ""
) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    if (searchBy) {
      const { data: { result } } = await Axios.get(
        `/api/products?search_by=${searchBy}`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: result });

    } else {
      const { data: { result } } = await Axios.get(
        `/api/products`
      );
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: result });
    }
    
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

const saveProduct = (product) => async (dispatch, getState) => {
  try {
    
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    
    const {
      userSignin: { userInfo },
    } = getState();

    if (!product.id) {

      const { data: { result } } = await Axios.post("/api/products", product, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });

      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: result });
    
    } else {
      const { data } = await Axios.put(
        "/api/products/",
        product,
        {
          headers: {
            Authorization: "Bearer " + userInfo.token,
          },
        }
      );
      dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
  
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data: { result } } = await Axios.get("/api/products?id=" + productId);
  
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: result });
  
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await Axios.delete("/api/products?id=" + productId, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    dispatch({ type: PRODUCT_DELETE_SUCCESS, payload: data, success: true });
  } catch (error) {
    dispatch({ type: PRODUCT_DELETE_FAIL, payload: error.message });
  }
};

const addProductReview = (review) => async (dispatch, getState) => {
  try {
    
    dispatch({ type: PRODUCT_REVIEW_SAVE_REQUEST, payload: review });
    
    const {
      userSignin: { userInfo },
    } = getState();

      const { data: { result } } = await Axios.post("/api/products/review", review, {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      });

      dispatch({ type: PRODUCT_REVIEW_SAVE_SUCCESS, payload: result });
    
  } catch (error) {
    dispatch({ type: PRODUCT_REVIEW_SAVE_FAIL, payload: error.message });
  }
};

export { listProducts, detailsProduct, saveProduct, deleteProduct, addProductReview };
