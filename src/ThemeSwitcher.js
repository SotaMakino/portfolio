import React from 'react';
import PropTypes from 'prop-types';

import { getThemes } from './themes';

export default class ThemeSwitcher extends React.Component {

  constructor(props) {
    super(props);
    const allThemes = getThemes();

    this.state = {
      theme: allThemes[0]
    }

    this.switchTheme = this.switchTheme.bind(this);
  }
  
  getChildContext() {
    return {
      theme: this.state.theme,
      switchTheme: this.switchTheme
    };
  }

  getRandomTheme = () => {
    const currentTheme = this.state.theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      (Math.random() * (themesWithoutCurrentTheme.length))
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  }

  switchTheme = () => {
    const randomTheme = this.getRandomTheme();
    this.setState({
      theme: randomTheme
    });
  }

  render() {
    const { children } = this.props;
    const theme = this.state.theme;

    return (
      <div>
        <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
          }
        `}
        </style>
        { children }
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node
}

ThemeSwitcher.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
}