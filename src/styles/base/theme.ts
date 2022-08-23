interface ThemeData {
  color: string;
  colorLight: string;
  colorDark: string;
  text: string;
  border: string;
}

export interface Theme {
  primary: ThemeData;
  secondary: ThemeData;
}

const light: Theme = {
  primary: {
    color: '#9e31f5',
    colorLight: '#c990f6',
    colorDark: '#7400d1',
    text: '#fff',
    border: '#f1c40f',
  },
  secondary: {
    color: '#16a085',
    colorLight: '#07cda6',
    colorDark: '#1e7060',
    text: '#fff',
    border: '#f1c40f',
  },
};

const dark: Theme = {
  primary: {
    color: '#2c3e50',
    colorLight: '#305f8e',
    colorDark: '#25313d',
    text: '#fff',
    border: '#95a5a6',
  },
  secondary: {
    color: '#34495e',
    colorLight: '#498ed2',
    colorDark: '#2a3744',
    text: '#fff',
    border: '#95a5a6',
  },
};

export const theme = {
  light,
  dark,
};
