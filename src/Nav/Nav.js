import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Nav extends React.Component {

  render() {
    const {
      switchTheme
    } = this.context;

    return (
      <nav
      >
        <div onClick={(e) => switchTheme()}>
          <element id="button" ><span class="title">Color</span></element>
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  switchTheme: PropTypes.func
};