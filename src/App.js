import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Items from "./components/items/Items";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Cart from "./components/cart/Cart";

import { loadUser } from "./actions/userActions";

import SearchItems from "./components/items/SearchItems";
import "bootswatch/dist/cyborg/bootstrap.min.css"; //

import "./App.css";

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        {props.items.redirect === "brand" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        {props.items.redirect === "category" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        {props.items.redirect === "name" && (
          <Redirect
            to={`/items/${props.items.redirect}/${props.items.searchInfo}`}
          />
        )}
        <Navbar {...props} />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Fragment>
                <hr />
                <Items />
                <hr />
              </Fragment>
            )}
          />

          <Route exact path="/items/brand/:brand" component={SearchItems} />
          <Route exact path="/items/category/:brand" component={SearchItems} />
          <Route exact path="/items/name/:name" component={SearchItems} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </Provider>
  );
};

// export default App;
//map state to props
const mapStateToProps = state => ({
  user: state.user,
  items: state.items,
  cart: state.cart
});
export default connect(mapStateToProps, { loadUser })(App);
