import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
//import { connect } from 'react-redux';
//import cookies from 'js-cookie';

//import { verify } from '../actions/auth';
//import { TOKEN } from '../actions/constants';
import Header from '../components/Header';

class DefaultRoute extends Component {
  render() {
    return (
      <div className="pusher">
        <Header />
        <div className="page">
          <Route {...this.props} />
        </div>
      </div>
    );
  }
}

export default DefaultRoute;
