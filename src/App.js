import React, { useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppHeader from './components/AppHeader';
import Loadable from 'react-loadable';
import { HashRouter as Router, Route } from 'react-router-dom';
import { verifyLoggedInUser } from './actions/userActions';
// Componet Level Loading 
const ProductCatalog = Loadable({
  loader: () => import('./components/ProductCatalog'),
  loading: () => <p className="lead">loading...</p>
});
const Sidebar = Loadable({
  loader: () => import('./components/Sidebar'),
  loading: () => <p className="lead">loading...</p>
});
const CartDetails = Loadable({
  loader: () => import('./components/CartDetails'),
  loading: () => <p className="lead">loading...</p>
});
const Login = Loadable({
  loader: () => import('./components/Login'),
  loading: () => <p className="lead">loading...</p>
});
const Register = Loadable({
  loader: () => import('./components/Register'),
  loading: () => <p className="lead">loading...</p>
});

function App({ userLoginCheck }) {

  useEffect(() => {
    userLoginCheck()
  });

  return (
    <Router>
      <div className="container">
        <AppHeader />
        <div className="row">
          <div className="col-sm-3">
            <Route path="/"
              component={Sidebar} />
          </div>
          <div className="col-sm-9">
            {/* <ProductCatalog /> */}
            <Route path="/" exact={true}
              component={ProductCatalog} />
            <Route path="/products/:key?/:value?"
              component={ProductCatalog} />
            <Route path="/view-cart"
              component={CartDetails} />
            <Route path="/login"
              component={Login} />
            <Route path="/register"
              component={Register} />
          </div>
        </div>
      </div>
    </Router>

  );
}

App.propTypes = {
  userLoginCheck: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  userLoginCheck: () => dispatch(verifyLoggedInUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
