import React, { useState } from "react";
import { getThemes } from "./themes";
import PropTypes from "prop-types";

const ThemeSwitcherHooks = props => {
  const allThemes = getThemes();
  const [theme, setTheme] = useState(allThemes[0]);

  const getChildContext = () => {
    return {
      theme,
      switchTheme
    };
  };

  const getRandomTheme = () => {
    const currentTheme = theme;
    const allThemes = getThemes();
    const themesWithoutCurrentTheme = allThemes.filter(
      theme => theme.name !== currentTheme.name
    );
    const randomThemeIndex = Math.floor(
      Math.random() * themesWithoutCurrentTheme.length
    );
    return themesWithoutCurrentTheme[randomThemeIndex];
  };

  const switchTheme = () => {
    setTheme(getRandomTheme());
  };

  return (
    <div>
      <style jsx="true">
        {`
          body {
            background-color: ${theme.bgPrimary};
          }
        `}
      </style>
      {props.children}
    </div>
  );
};

ThemeSwitcherHooks.propTypes = {
  children: PropTypes.node
};

ThemeSwitcherHooks.childContextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default ThemeSwitcherHooks;
