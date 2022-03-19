import React, { useState, useEffect } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBCol } from "mdbreact";
import { searchAction } from "../actions/searchActions";

const SearchScreen = (props) => {

  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAction(search));
  }, [search]);
  
  return (
    <MDBCol md="6">
      <input 
        value={search || ""}
        type="text"
        name="search"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
        className="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search" 
      />
    </MDBCol>
  );
  
}

export default SearchScreen;
