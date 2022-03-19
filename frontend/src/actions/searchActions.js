import Axios from "axios";
import Cookie from "js-cookie";
import {
  ADD_SEARCH
} from "../constants/searchConstants";


const searchAction = (search) => async (dispatch) => {
  dispatch({ type: ADD_SEARCH, payload: search });

};

export { searchAction };
