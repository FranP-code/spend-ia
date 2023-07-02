/* eslint-disable sort-keys-fix/sort-keys-fix */
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    complementary: string;
    textColor: {
      primary: string;
    };
  };
}

const theme: Theme = {
  colors: {
    primary: '#635985',
    secondary: '#443C68',
    complementary: '#393053',
    textColor: {
      primary: '#ddd',
    },
  },
};

export default theme;
