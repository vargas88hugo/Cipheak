import React, { Component, Fragment } from 'react';

import Header from '../components/Layouts/Header'
import Home from '../containers/Home';
import PdgGenerator from '../components/Pdf/pdf';

export default class extends Component {
  render() {
    return (  
      <PdgGenerator/>
    );
  }
}