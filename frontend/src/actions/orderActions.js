import Axios from "axios";
import Cookie from "js-cookie";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
  ORDER_DELETE_REQUEST,
  ORDER_DELETE_SUCCESS,
  ORDER_DELETE_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from "../constants/orderConstants";

const createOrder = (order) => async (dispatch, getState) => {
  try {
    
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
    const {
      data: { result: newOrder },
    } = await Axios.post("/api/order", order, {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    });
    Cookie.remove("cartItems")
    
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
  
  } catch (error) {
    
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};

const listMyOrders = () => async (dispatch, getState) => {
  try {
    
    dispatch({ type: MY_ORDER_LIST_REQUEST });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
    const { data: { result } } = await Axios.get("/api/order/mine", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: result });
  
  } catch (error) {
    dispatch({ type: MY_ORDER_LIST_FAIL, payload: error.message });
  }
};

const listOrders = () => async (dispatch, getState) => {
  try {
    
    dispatch({ type: ORDER_LIST_REQUEST });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
    const { data: { result } } = await Axios.get("/api/order", {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    
    dispatch({ type: ORDER_LIST_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
  }
};

const detailsOrder = (orderId) => async (dispatch, getState) => {
  try {
    console.log('hit 111');
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
//     const { data: { result } } = await Axios.get("/api/order/by-product-id?" + orderId, {
    const { data: { result } } = await Axios.get("/api/order?id=" + orderId, {
        headers: { Authorization: "Bearer " + userInfo.token },
    });
    
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: result });
  
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};

const payOrder = (order, paymentResult) => async (dispatch, getState) => {
  try {
    
    dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
    const { data } = await Axios.put(
      "/api/order/" + order.id + "/pay",
      paymentResult,
      {
        headers: { Authorization: "Bearer " + userInfo.token },
      }
    );
    
    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
  }
};

const deleteOrder = (orderId) => async (dispatch, getState) => {
  try {
    
    dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
    
    const {
      userSignin: { userInfo },
    } = getState();
    
    const { data: { result } } = await Axios.delete("/api/order?id=" + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    
    dispatch({ type: ORDER_DELETE_SUCCESS, payload: result });
  
  } catch (error) {
    dispatch({ type: ORDER_DELETE_FAIL, payload: error.message });
  }
};

export {
  createOrder,
  detailsOrder,
  payOrder,
  listMyOrders,
  listOrders,
  deleteOrder,
};
