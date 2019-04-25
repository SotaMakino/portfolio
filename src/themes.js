const themes = [
  {
    name: 'orange',
    firstTime: true,
    colorAlternate: '#aedadd',
  },
  {
    name: 'white',
    colorAlternate: '#fcf8f3',
  },
  {
    name: 'lemon',
    colorAlternate: '#db996c',
  },
  {
    name: 'blue',
    colorAlternate: '#6e7da2',
  }
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      bgPrimary: theme.colorAlternate,
    };
  });
};
