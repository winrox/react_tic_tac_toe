import React from 'react';
import Store from '../stores/Store.js';

class BaseComponent extends React.Component {
  StateOrigin() {
    this.state = Store.getState();
  }

  onChange() {
    this.setState(Store.getState());
  }

  componentDidMount() {
    Store.addChangeListener(this.onChange);
  }

  binds(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this) );
  }
}

export default BaseComponent;
