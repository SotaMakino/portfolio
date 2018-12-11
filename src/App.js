import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Main from './Main';
import Nav from './Nav';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ThemeSwitcher>
          <Main />
          <Nav />
        </ThemeSwitcher>
      </div>
    );
  }
}
