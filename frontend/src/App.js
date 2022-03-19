import React, { useEffect, useState  } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  SigninScreen,
  RegisterScreen,
  ProductsScreen,
  ShippingScreen,
  PaymentScreen,
  PlaceOrderScreen,
  ProfileScreen,
  OrderScreen,
  OrdersScreen,
  SearchScreen,
} from "./screens";
import { useSelector } from "react-redux";

function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [showSearchBar, setShowSearchBar] = useState(false);

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  ;
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSearchBar(window.location.pathname === '/' ? true  : false)
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Al-Rakham</Link>
          </div>
          {showSearchBar && (

          <div>
            <SearchScreen />
          </div>
          )}

          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign-In</Link>
            )}
            {userInfo && userInfo.is_admin && (
              <div className="dropdown">
                <Link to="/">Admin</Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <main className="main">
          <div className="content">
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/orders" component={OrdersScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/signin" component={SigninScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/products" component={ProductsScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/product/:id" component={ProductScreen} />
            </Switch>
          </div>
        </main>

        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
