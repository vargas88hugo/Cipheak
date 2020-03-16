import React, { Component, Fragment } from 'react';

import Header from '../components/Layouts/Header'
import Home from '../containers/Home';

export default class extends Component {
  render() {
    return (  
       <Fragment>
         <Header />
         <Home />
       </Fragment>
    );
  }
}